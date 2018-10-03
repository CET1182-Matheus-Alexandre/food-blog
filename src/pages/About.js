import React, { Component } from 'react';
import Page from '../layout/page';

export default class About extends Component {
  render() {
    return (
      <Page
        pageTitle="Shared Food - About us"
        title="About us"
        subtitle="hu3"
        photo={{
          src: 'assets/images/brazilian-flag.jpg',
          authorName: 'rawpixel'
        }}
      >
        <h2>Oi</h2>
      </Page>
    );
  }
}
