import React, { Component } from 'react';

export default class TextSection extends Component {
  render() {
    const {
      image: { imageLink, name, right },
      title,
      children
    } = this.props;
    return (
      <div>
        <section className="welcome">
          {!right && <img src={imageLink} alt={name} />}
          <div className="about">
            <h2>{title}</h2>
            <div>{children}</div>
          </div>
          {right && <img src={imageLink} alt={name} />}
        </section>
      </div>
    );
  }
}
