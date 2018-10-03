import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../src/components/Footer';

describe('Footer', () => {
  it('should render', () => {
    const rendered = renderer.create(<Footer />).toJSON();

    expect(rendered).toBeTruthy();
  });
});
