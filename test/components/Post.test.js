import React from 'react';
import renderer from 'react-test-renderer';
import Post from '../../src/components/Post';

describe('Post', () => {
  describe('should render', () => {
    it('as blog post', () => {
      const rendered = renderer
        .create(
          <Post
            post={{
              imageLink: '',
              imageDescription: '',
              postLink: '',
              postTitle: '',
              authorLink: '',
              authorName: '',
              dateTime: ''
            }}
          >
            <h2>a</h2>
          </Post>
        )
        .toJSON();

      expect(rendered).toBeTruthy();
    });

    it('as post resume card', () => {
      const rendered = renderer
        .create(
          <Post
            card
            post={{
              imageLink: '',
              imageDescription: '',
              postLink: '',
              postTitle: '',
              authorLink: '',
              authorName: '',
              dateTime: ''
            }}
          >
            <h2>a</h2>
          </Post>
        )
        .toJSON();

      expect(rendered).toBeTruthy();
    });
  });
});
