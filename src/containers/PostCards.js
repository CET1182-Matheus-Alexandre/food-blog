import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import CardContainer from '../components/CardContainer';
import Card from '../components/Card';

export default class PostCards extends Component {
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

  renderCards = () => {
    const { posts } = this.state;

    if (posts) {
      const postsCards = posts
        .map((post) => {
          const postConfig = {
            postLink: `/post/${post.id}`,
            imageLink: post.data.image.imageUrl,
            imageDescription: 'A burguer',
            authorName: post.author.name,
            authorLink: post.author.link,
            dateTime: new firebase.firestore.Timestamp(
              post.data.createdAt.seconds,
              post.data.createdAt.nanoseconds
            ).toDate(),
            postTitle: post.data.title
          };

          return <Card key={post.id} lastPost={postConfig} />;
        })
        .sort(
          (a, b) =>
            new Date(b.props.lastPost.dateTime) -
            new Date(a.props.lastPost.dateTime)
        );

      return postsCards.slice(0, 3);
    }

    return <h1>Carregando</h1>;
  };

  render() {
    return (
      <CardContainer title="Últimos posts">{this.renderCards()}</CardContainer>
    );
  }
}
