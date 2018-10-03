import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../src/components/Header';

describe('Header', () => {
  test('should render', () => {
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

    const rendered = renderer
      .create(
        <Header
          navItens={navItens}
          title="The Best Food"
          subTitle="is the one that you share"
          photo={{
            photoLink: 'path/to/image.jpg',
            credits: {
              author: {
                authorLink: 'https://link.to.author.page.com',
                authorName: 'Author Name'
              },
              stock: {
                stockLink: 'https://stock.page.link.com',
                stockName: 'Image Stock Name'
              }
            }
          }}
        />
      )
      .toJSON();
    expect(rendered).toBeTruthy();
  });
});
