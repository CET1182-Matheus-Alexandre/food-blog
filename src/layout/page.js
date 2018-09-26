import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Page extends Component {
  render() {
    const navItens = [
      {
        name: 'Inicio',
        href: '#',
        active: true
      },
      {
        name: 'Blog',
        href: '#'
      },
      {
        name: 'Sobre nós',
        href: '#'
      }
    ];

    const {
      children,
      title,
      subtitle,
      photo: { src, authorName }
    } = this.props;

    return (
      <div>
        <Header
          navItens={navItens}
          title={title}
          subTitle={subtitle}
          photo={{
            photoLink: src,
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
        <Footer />
      </div>
    );
  }
}
