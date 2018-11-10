import React, { Component } from 'react';
import HtmlToReactParser from 'html-to-react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import PostPage from '../layout/post';
import PostContainer from '../components/PostContainer';
import PostText from '../components/PostText';
import PostCards from '../containers/PostCards';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postAuthor: {},
      post: {},
      loaded: false
    };
  }

  componentWillMount = () => {
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);

    db.collection('posts')
      .get()
      .then((posts) => {
        posts.forEach((post) => {
          if (post.id === this.props.postId) {
            db.collection('users')
              .get()
              .then((users) => {
                users.forEach((user) => {
                  if (user.data().uuid === post.data().author) {
                    this.setState({
                      post: post.data(),
                      postAuthor: user.data(),
                      loaded: true
                    });
                  }
                });
              })
              .catch((error) => console.log('Error getting user: ', error));
          }
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  };

  render() {
    const { postId } = this.props;
    const {
      post: { title, createdAt, html, image },
      loaded,
      postAuthor
    } = this.state;
    const htmlToReact = new HtmlToReactParser.Parser();

    if (loaded) {
      return (
        <PostPage
          pageTitle={`Shared Food - ${title}`}
          title={title}
          photo={{
            src: image.imageUrl,
            authorName: image.imageAuthor
          }}
        >
          <PostContainer>
            <PostText
              post={{
                postLink: `/post/${postId}`,
                postTitle: title,
                authorLink: postAuthor.link,
                authorName: postAuthor.name,
                dateTime: new Date(createdAt.seconds).toDateString()
              }}
            >
              {htmlToReact.parse(html)}
            </PostText>
          </PostContainer>

          <PostCards />
        </PostPage>
      );
    }

    return <h1>Carregando</h1>;
  }
}
