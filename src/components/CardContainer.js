import React, { Component } from 'react';

export default class CardContainer extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <section id="last-posts">
        <h2>{title}</h2>
        <div>{children}</div>
      </section>
    );
  }
}
