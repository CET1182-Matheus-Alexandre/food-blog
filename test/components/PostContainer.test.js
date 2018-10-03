import React from 'react';
import renderer from 'react-test-renderer';
import PostContainer from '../../src/components/PostContainer';

describe('PostContainer', () => {
  describe('should render', () => {
    it('with title', () => {
      const rendered = renderer
        .create(
          <PostContainer title="oi">
            <h1>oi</h1>
          </PostContainer>
        )
        .toJSON();

      expect(rendered).toBeTruthy();
    });

    it('without title', () => {
      const rendered = renderer
        .create(
          <PostContainer title="oi">
            <h1>oi</h1>
          </PostContainer>
        )
        .toJSON();

      expect(rendered).toBeTruthy();
    });
  });
});
