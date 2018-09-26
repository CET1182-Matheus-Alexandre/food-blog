import React, { Component } from 'react';
import Page from '../layout/page';

export default class Home extends Component {
  render() {
    return (
      <Page
        title="The Best Food"
        subtitle="is the one that you share"
        photo={{
          src: './src/assets/images/shared-food.jpg',
          authorName: 'rawpixel'
        }}
      >
        <h2>Oi tio</h2>
      </Page>
    );
  }
}
