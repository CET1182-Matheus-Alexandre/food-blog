import React, { Component } from 'react';
import Page from '../layout/page';

export default class Blog extends Component {
  render() {
    return (
      <Page
        pageTitle="Shared Food - Blog"
        title="Blog"
        subtitle="sweet posts here"
        photo={{
          src: 'assets/images/notebook-food.jpg',
          authorName: 'rawpixel'
        }}
      >
        <h2>Oi</h2>
      </Page>
    );
  }
}
