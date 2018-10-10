import React from 'react';
import renderer from 'react-test-renderer';
import PostText from '../../src/components/PostText';

describe('PostText', () => {
  describe('should render', () => {
    it('as blog post', () => {
      const rendered = renderer
        .create(
          <PostText
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
          </PostText>
        )
        .toJSON();

      expect(rendered).toBeTruthy();
    });

    it('as post resume card', () => {
      const rendered = renderer
        .create(
          <PostText
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
          </PostText>
        )
        .toJSON();

      expect(rendered).toBeTruthy();
    });
  });
});
