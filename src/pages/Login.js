/* global window */
/* eslint no-alert: off */
import React, { Component } from 'react';
import { Redirect } from '@reach/router';
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    submitTimes: 0,
    redirect: false
  };

  usernameHandler = ({ target: { value } }) => {
    this.setState({ username: value });
  };

  passwordHandler = ({ target: { value } }) => {
    this.setState({ password: value });
  };

  userCreation = () => {
    const { username, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => window.alert('Usuário criado com sucesso'))
      .catch(() =>
        window.alert(
          'Ocorreu algum erro na criação do usuário, tente novamente mais tarde!'
        )
      );
  };

  userSignIn = () => {
    const { username, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => this.setState({ redirect: true }))
      .catch(() => window.alert('Ocorreu algum erro na autenticação!'));
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { username, password, submitTimes } = this.state;
    if (submitTimes < 1) {
      this.setState({ submitTimes: submitTimes + 1 });
      window.alert('VOCÊ FOI RASQUEADO!');
      return;
    }

    this.userSignIn();
    console.log(username, password);
  };

  render() {
    return (
      <div>
        <form className="login-form">
          <h1>Isso não é uma página de login pra área de administração</h1>
          <h2>
            Caso você queira ir para a verdadeira página de administração{' '}
            <a
              className="admin-link"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              Clique Aqui
            </a>
          </h2>
          <label className="form-input" htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              onChange={this.usernameHandler}
            />
          </label>
          <label className="form-input" htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              onChange={this.passwordHandler}
            />
          </label>
          <input
            className="form-submit"
            type="submit"
            value="Entrar"
            onClick={this.submitHandler}
          />
        </form>
        {this.state.redirect && <Redirect noThrow to="/admin" />}
      </div>
    );
  }
}
