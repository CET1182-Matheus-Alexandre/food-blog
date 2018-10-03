import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../src/components/Card';

describe('Card', () => {
  it('should render', () => {
    const rendered = renderer
      .create(
        <Card
          lastPost={{
            postLink: '#',
            imageLink: 'assets/images/burguer.jpg',
            imageDescription: 'A delicious burguer',
            authorName: 'Alexandre Pedrecal',
            authorLink: 'https://twitter.com/pedr3cal',
            dateTime: '2018-08-19 16:05',
            postTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscin elit.'
          }}
        />
      )
      .toJSON();

    expect(rendered).toBeTruthy();
  });
});
