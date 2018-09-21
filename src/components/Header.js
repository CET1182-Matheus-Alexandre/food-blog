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

    console.log(navItens);

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

// function App() {
//   const navItens = [
//     {
//       name: 'Inicio',
//       href: '#',
//       active: true
//     },
//     {
//       name: 'Blog',
//       href: '#'
//     },
//     {
//       name: 'Sobre nós',
//       href: '#'
//     }
//   ];

//   return (
//     <div>
//       <Header
//         navItens={navItens}
//         title="The Best Food"
//         subTitle="is the one that you share"
//         photo={{
//           photoLink: './src/assets/images/shared-food.jpg',
//           credits: {
//             author: {
//               authorLink:
//                 'https://unsplash.com/@rawpixel?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge',
//               authorName: 'rawpixel'
//             },
//             stock: {
//               stockLink: 'https://unsplash.com/',
//               stockName: 'Unsplash'
//             }
//           }
//         }}
//       />
//     </div>
//   );
// }