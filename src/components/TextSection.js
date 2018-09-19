import React, { Component } from 'react';

export default class TextSection extends Component {
  render() {
    const {
      image: { imageLink, name, right },
      children
    } = this.props;
    return (
      <div>
        <section className="welcome">
          {!right && <img src={imageLink} alt={name} />}
          <div className="about">{children}</div>
          {right && <img src={imageLink} alt={name} />}
        </section>
      </div>
    );
  }
}
