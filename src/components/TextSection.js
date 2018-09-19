import React, { Component } from 'react';

export default class TextSection extends Component {
  render() {
    const {
      image: { imageLink, name },
      children
    } = this.props;
    return (
      <div>
        <section className="welcome">
          <img src={imageLink} alt={name} />
          <div className="about">{children}</div>
        </section>
      </div>
    );
  }
}
