/* global window */
import React, { Component } from 'react';
import path from 'path';
import PostHeader from '../components/PostHeader';
import Footer from '../components/Footer';

export default class Page extends Component {
  componentDidMount() {
    document.title = this.props.pageTitle;
  }

  render() {
    const pathN = window.location.pathname.split('/')[1];

    const navItens = [
      {
        name: 'Inicio',
        href: '/',
        active: pathN === ''
      },
      {
        name: 'Blog',
        href: '/blog',
        active: pathN === 'blog'
      },
      {
        name: 'Sobre nós',
        href: '/about',
        active: pathN === 'about'
      }
    ];

    const {
      children,
      rootPath = '.',
      title,
      subtitle,
      photo: { src, authorName }
    } = this.props;

    return (
      <div>
        <PostHeader
          navItens={navItens}
          title={title}
          subTitle={subtitle}
          photo={{
            photoLink: path.join(rootPath, src),
            credits: {
              author: {
                authorLink: `https://unsplash.com/@${authorName}?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge`,
                authorName
              },
              stock: {
                stockLink: 'https://unsplash.com/',
                stockName: 'Unsplash'
              }
            }
          }}
        />
        {children}
        <Footer rootPath={rootPath} />
      </div>
    );
  }
}
