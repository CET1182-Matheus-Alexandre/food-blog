import React, { Component } from 'react';

export default class Header extends Component {
  navRender(navItens) {
    const itens = navItens.map(({ name, href, active }) => {
      const activation = active ? 'active' : ' ';

      return (
        <a href={href} key={parseInt(name, 10) + name}>
          <div className={`button ${activation}`}>{name}</div>
        </a>
      );
    });

    return itens;
  }

  render() {
    const {
      navItens,
      title,
      subTitle,
      photo: {
        photoLink,
        credits: {
          author: { authorLink, authorName },
          stock: { stockLink, stockName }
        }
      }
    } = this.props;

    return (
      <header style={{ backgroundImage: `url(${photoLink})` }}>
        <div className="black-screen">
          <div id="nav-bar">
            <div className="logo" />
            <nav>{this.navRender(navItens)}</nav>
          </div>
          <div id="hero">
            <h1 className="title">{title}</h1>
            <h4 className="sub-title">{subTitle}</h4>
          </div>
          <div id="photo-credit">
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
