import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAdmin: 0
    };
  }

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

  adminPageHandler = () => {
    const newState = { openAdmin: this.state.openAdmin + 1 };

    if (this.state.openAdmin === 13) {
      newState.redirect = true;
    }

    this.setState({ ...newState });
  };

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
      <React.Fragment>
        <header
          className="main-header"
          style={{ backgroundImage: `url(${photoLink})` }}
        >
          <div className="black-screen">
            <div className="nav-bar">
              <div className="logo">
                <a href="#" onClick={this.adminPageHandler}>
                  <img src="/assets/images/logo-banner.png" alt="logo banner" />
                </a>
              </div>
              <nav className="main-nav">{this.navRender(navItens)}</nav>
            </div>
            <div className="hero">
              <h1 className="title">{title}</h1>
              <h4 className="sub-title">{subTitle}</h4>
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
        {this.state.redirect && <Redirect noThrow to="/thereisnoadminpage" />}
      </React.Fragment>
    );
  }
}
