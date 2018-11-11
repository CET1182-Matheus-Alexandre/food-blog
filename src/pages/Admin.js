import React, { Component } from 'react';
import { Redirect } from '@reach/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export default class Admin extends Component {
  state = {
    signed: !!firebase.auth().currentUser,
    currentUser: null,
    posts: [],
    title: '',
    imageUrl: '',
    imageAuthor: '',
    html: ''
  };

  componentDidMount = () => {
    if (this.state.signed) {
      this.db = firebase.firestore();
      const settings = { timestampsInSnapshots: true };
      this.db.settings(settings);

      this.db
        .collection('posts')
        .get()
        .then((querySnapshot) => {
          const newPosts = [];
          querySnapshot.forEach((doc) => {
            newPosts.push(doc.data());
            console.log(`${doc.id} => ${doc.data()}`);
          });
          this.setState({
            posts: newPosts,
            currentUser: firebase.auth().currentUser
          });
        });
    }
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

  submitHandler = (e) => {
    e.preventDefault();
    const { title, imageUrl, imageAuthor, html, currentUser } = this.state;

    this.db.collection('posts').add({
      author: currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      title,
      html,
      image: {
        imageUrl,
        imageAuthor
      }
    });
  };

  logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ signed: false });
      });
  };

  render() {
    const { posts, signed } = this.state;

    if (signed) {
      if (posts !== []) {
        return (
          <div>
            <h1>oi</h1>
            <button onClick={this.logoutHandler}>Logout</button>
            <form className="new-post-form">
              <label className="form-input" htmlFor="title">
                Titulo:
                <input type="text" name="title" onChange={this.titleHandler} />
              </label>
              <label className="form-input" htmlFor="imageUrl">
                Url da Imagem:
                <input
                  type="text"
                  name="imageUrl"
                  onChange={this.imageUrlHandler}
                />
              </label>
              <label className="form-input" htmlFor="imageAuthor">
                Autor da Imagem:
                <input
                  type="text"
                  name="imageAuthor"
                  onChange={this.imageAuthorHandler}
                />
              </label>
              <label className="form-input" htmlFor="html">
                Post em Html:
                <input
                  type="textarea"
                  name="html"
                  onChange={this.htmlHandler}
                />
              </label>
              <input
                className="form-submit"
                type="submit"
                value="Entrar"
                onClick={this.submitHandler}
              />
            </form>
            {JSON.stringify(posts)}
          </div>
        );
      }
      return <h1>Carregando</h1>;
    }

    return <Redirect noThrow to="/" />;
  }
}
