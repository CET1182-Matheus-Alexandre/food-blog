import React, { Component } from 'react';
import HtmlToReactParser from 'html-to-react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Page from '../layout/page';
import PostContainer from '../components/PostContainer';
import PostText from '../components/PostText';

export default class Blog extends Component {
  state = {
    posts: []
  };

  componentDidMount = () => {
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);

    db.collection('posts')
      .get()
      .then((posts) => {
        const newPosts = [];
        posts.forEach((post) => {
          db.collection('users')
            .get()
            .then((users) => {
              users.forEach((user) => {
                if (user.data().uuid === post.data().author) {
                  newPosts.push({
                    id: post.id,
                    data: post.data(),
                    author: user.data()
                  });
                }
              });
              this.setState({ posts: newPosts });
            })
            .catch((error) => console.log('Error getting user: ', error));
        });
      });
  };

  renderPosts = () => {
    const { posts } = this.state;
    const htmlToReact = new HtmlToReactParser.Parser();

    if (posts) {
      const postsComponents = posts
        .map((post) => {
          const postConfig = {
            imageLink: post.data.image.imageUrl,
            imageDescription: 'A burguer',
            postLink: `/post/${post.id}`,
            postTitle: post.data.title,
            authorLink: post.author.link,
            authorName: post.author.name,
            dateTime: new firebase.firestore.Timestamp(
              post.data.createdAt.seconds,
              post.data.createdAt.nanoseconds
            ).toDate()
          };

          return (
            <PostText key={post.id} card post={postConfig}>
              {htmlToReact.parse(post.data.html.split('</p>')[0])}
            </PostText>
          );
        })
        .sort(
          (a, b) =>
            new Date(b.props.post.dateTime) - new Date(a.props.post.dateTime)
        );

      return postsComponents;
    }

    return undefined;
  };

  render() {
    return (
      <Page
        pageTitle="Shared Food - Blog"
        title="Blog"
        subtitle="sweet posts here"
        photo={{
          src: 'assets/images/notebook-food.jpg',
          authorName: 'rawpixel'
        }}
      >
        <PostContainer title="Posts">{this.renderPosts()}</PostContainer>
      </Page>
    );
  }
}
