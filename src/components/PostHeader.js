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
          author: { authorLink, authorName },
          stock: { stockLink, stockName }
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
            <div className="logo" />
            <nav className="main-nav">{this.navRender(navItens)}</nav>
          </div>
          <div className="hero">
            <h1 className="title">{title}</h1>
          </div>
          <div className="photo-credit">
            Foto por{' '}
            <a href={authorLink}>
              <u>{authorName}</u>
            </a>{' '}
            em{' '}
            <a href={stockLink}>
              <u>{stockName}</u>
            </a>
          </div>
        </div>
      </header>
    );
  }
}
