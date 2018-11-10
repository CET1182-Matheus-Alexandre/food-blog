import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default class Admin extends Component {
  state = {
    posts: []
  };

  componentWillMount = () => {
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    db.settings(settings);

    db.collection('posts')
      .get()
      .then((querySnapshot) => {
        const newPosts = [];
        querySnapshot.forEach((doc) => {
          newPosts.push(doc.data());
          console.log(`${doc.id} => ${doc.data()}`);
        });
        this.setState({ posts: newPosts });
      });
  };

  render() {
    return (
      <div>
        <h1>oi</h1>
        {JSON.stringify(this.state.posts)}
      </div>
    );
  }
}
