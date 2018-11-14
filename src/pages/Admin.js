import React, { Component } from 'react';
import { Redirect } from '@reach/router';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import EditionCard from '../components/EditionCard';

export default class Admin extends Component {
  constructor(props) {
    super(props);

    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    let editorState = EditorState.createEmpty();
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      editorState = EditorState.createWithContent(contentState);
    }

    this.state = {
      signed: false,
      currentUser: null,
      loading: true,
      userName: '',
      posts: [],
      postInEdit: '',
      title: '',
      imageUrl: '',
      imageAuthor: '',
      html: '',
      editorState
    };
  }

  componentDidMount = () => {
    this.db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    this.db.settings(settings);

    this.db.collection('posts').onSnapshot((posts) => {
      const newPosts = [];
      posts.forEach((post) => {
        this.db
          .collection('users')
          .get()
          .then((users) => {
            let currentUserName = '';
            users.forEach((user) => {
              if (user.data().uuid === post.data().author) {
                newPosts.push({
                  id: post.id,
                  data: post.data(),
                  author: user.data()
                });
              }
              if (user.data().uuid === firebase.auth().currentUser.uid) {
                currentUserName = user.data().name;
              }
            });
            this.setState({
              posts: newPosts,
              currentUser: firebase.auth().currentUser,
              userName: currentUserName,
              loading: false,
              signed: true
            });
          })
          .catch(() => {
            this.setState({ loading: false });
          });
      });
    });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      html: draftToHtml(convertToRaw(editorState.getCurrentContent()))
    });
  };

  titleHandler = ({ target: { value } }) => {
    this.setState({ title: value });
  };

  imageUrlHandler = ({ target: { value } }) => {
    this.setState({ imageUrl: value });
  };

  imageAuthorHandler = ({ target: { value } }) => {
    this.setState({ imageAuthor: value });
  };

  htmlHandler = ({ target: { value } }) => {
    this.setState({ html: value });
  };

  cleanState = () => {
    this.setState({
      postInEdit: '',
      title: '',
      imageUrl: '',
      imageAuthor: '',
      html: '',
      editorState: EditorState.createEmpty()
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const {
      postInEdit,
      title,
      imageUrl,
      imageAuthor,
      html,
      currentUser
    } = this.state;

    if (postInEdit === '') {
      this.db
        .collection('posts')
        .add({
          author: currentUser.uid,
          createdAt: new Date(),
          title,
          html,
          image: {
            imageUrl,
            imageAuthor
          }
        })
        .then(() => this.forceUpdate())
        .catch(console.log);

      this.cleanState();
    } else {
      this.db
        .collection('posts')
        .doc(postInEdit)
        .update({
          title,
          html,
          image: {
            imageUrl,
            imageAuthor
          }
        })
        .then(() => this.forceUpdate())
        .catch(console.log);

      this.cleanState();
    }
  };

  logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ signed: false });
      });
  };

  renderAllPosts = () => {
    const autores = this.state.posts
      .map((post) => (
        <EditionCard
          key={post.id}
          id={post.id}
          post={post.data}
          author={post.author}
          onEdit={() => {
            const htmlDraft = htmlToDraft(post.data.html);
            const htmlDraftContent = ContentState.createFromBlockArray(
              htmlDraft.contentBlocks
            );

            this.setState({
              postInEdit: post.id,
              title: post.data.title,
              imageUrl: post.data.image.imageUrl,
              imageAuthor: post.data.image.imageAuthor,
              html: post.data.html,
              editorState: EditorState.createWithContent(htmlDraftContent)
            });
          }}
          onRemove={() =>
            this.db
              .collection('posts')
              .doc(post.id)
              .delete()
              .then(console.log)
              .catch(console.log)
          }
        />
      ))
      .sort(
        (a, b) =>
          new firebase.firestore.Timestamp(
            b.props.post.createdAt.seconds,
            b.props.post.createdAt.nanoseconds
          ).toDate() -
          new firebase.firestore.Timestamp(
            a.props.post.createdAt.seconds,
            a.props.post.createdAt.nanoseconds
          ).toDate()
      );

    return autores;
  };

  render() {
    const {
      userName,
      posts,
      signed,
      editorState,
      title,
      imageUrl,
      imageAuthor,
      loading
    } = this.state;

    if (loading) {
      return <h1>Carregando</h1>;
    }
    if (signed) {
      return (
        <div>
          <div className="admin-card">
            <h1 className="gretting">Olá {userName}</h1>
            <button className="signout-btn" onClick={this.logoutHandler}>
              Logout
            </button>
          </div>
          <form className="new-post-form">
            <div className="form-input">
              <span className="label">Titulo:</span>
              <input
                type="text"
                value={title}
                name="title"
                onChange={this.titleHandler}
              />
            </div>
            <div className="image-info">
              <div className="form-input">
                <span className="label">Url da Imagem:</span>
                <input
                  type="text"
                  name="imageUrl"
                  value={imageUrl}
                  onChange={this.imageUrlHandler}
                />
              </div>
              <div className="form-input">
                <span className="label">Autor da Imagem:</span>
                <input
                  type="text"
                  name="imageAuthor"
                  value={imageAuthor}
                  onChange={this.imageAuthorHandler}
                />
              </div>
            </div>
            <Editor
              editorState={editorState}
              toolbarClassName="demo-toolbar-custom"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor-custom"
              editorStyle={{
                height: '400px',
                borderStyle: 'solid',
                borderWidth: '10px',
                borderTop: 0,
                borderRight: 0,
                borderBottom: 0,
                borderColor: 'rgba(0, 0, 0, 0.5)',
                padding: 5
              }}
              onEditorStateChange={this.onEditorStateChange}
            />
            <div className="send-area">
              <button className="form-submit" onClick={this.submitHandler}>
                Enviar Postagem
              </button>
            </div>
          </form>
          {posts !== [] && this.renderAllPosts()}
        </div>
      );
    }
    return <Redirect noThrow to="/" />;
  }
}
