import React, { Component } from 'react';

export default class CardContainer extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <section id="post-container">
        {title && <h2>{title}</h2>}
        {children}
      </section>
    );
  }
}
