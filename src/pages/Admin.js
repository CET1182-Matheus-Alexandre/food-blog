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
      // signed: !!firebase.auth().currentUser,
      signed: true,
      currentUser: null,
      userName: '',
      posts: [],
      title: '',
      imageUrl: '',
      imageAuthor: '',
      html: '',
      editorState
    };
  }

  componentDidMount = () => {
    if (this.state.signed) {
      this.db = firebase.firestore();
      const settings = { timestampsInSnapshots: true };
      this.db.settings(settings);

      this.db
        .collection('posts')
        .get()
        .then((posts) => {
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
                  if (
                    !this.state.currentUser &&
                    user.data().uuid === firebase.auth().currentUser
                  ) {
                    currentUserName = user.data().name;
                  }
                });
                this.setState({
                  posts: newPosts,
                  currentUser: firebase.auth().currentUser,
                  userName: currentUserName
                });
              })
              .catch((error) => console.log('Error getting user: ', error));
          });
        });

      // this.db
      //   .collection('posts')
      //   .get()
      //   .then((posts) => {
      //     const newPosts = [];
      //     posts.forEach((post) => {
      //       newPosts.push(post.data());
      //       console.log(`${post.id} => ${post.data()}`);
      //     });
      //     this.setState({
      //       posts: newPosts,
      //       currentUser: firebase.auth().currentUser
      //     });
      //   });
    }
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
      title: '',
      imageUrl: '',
      imageAuthor: '',
      html: '',
      editorState: EditorState.createEmpty()
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { title, imageUrl, imageAuthor, html, currentUser } = this.state;

    this.db.collection('posts').add({
      author: currentUser.uid,
      createdAt: new Date(),
      title,
      html,
      image: {
        imageUrl,
        imageAuthor
      }
    });

    this.cleanState();
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
    const autores = this.state.posts.map((post) => (
      <EditionCard
        key={post.id}
        id={post.id}
        post={post.data}
        author={post.author}
      />
    ));

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
      imageAuthor
    } = this.state;

    if (signed) {
      if (posts !== []) {
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
              <input
                className="form-submit"
                type="submit"
                value="Entrar"
                onClick={this.submitHandler}
              />
            </form>
            {this.renderAllPosts()}
            {JSON.stringify(posts)}
          </div>
        );
      }
      return <h1>Carregando</h1>;
    }

    return <Redirect noThrow to="/" />;
  }
}
