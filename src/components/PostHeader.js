import React, { Component } from 'react';
import { Link } from '@reach/router';

export default class Header extends Component {
  navRender(navItens) {
    const itens = navItens.map(({ name, href, active }) => {
      const activation = active ? 'active' : ' ';

      return (
        <Link to={href} key={parseInt(name, 10) + name}>
          <div className={`button ${activation}`}>{name}</div>
        </Link>
      );
    });

    return itens;
  }

  render() {
    const {
      navItens,
      title,
      photo: {
        photoLink,
        credits: {
          author: { authorName }
        }
      }
    } = this.props;

    return (
      <header
        className="post-header"
        style={{ backgroundImage: `url(${photoLink})` }}
      >
        <div className="black-screen">
          <div className="nav-bar">
            <div className="logo">
              <img src="/assets/images/logo-banner.png" alt="logo banner" />
            </div>
            <nav className="main-nav">{this.navRender(navItens)}</nav>
          </div>
          <div className="hero">
            <h1 className="title">{title}</h1>
          </div>
          <div className="photo-credit">Foto por {authorName}</div>
        </div>
      </header>
    );
  }
}
