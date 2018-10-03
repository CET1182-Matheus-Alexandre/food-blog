import React, { Component } from 'react';

export default class TextSection extends Component {
  render() {
    const { image, title, children } = this.props;

    return (
      <div>
        <section className="welcome">
          {image
            ? !image.right && <img src={image.imageLink} alt={image.name} />
            : ''}
          <div className="about">
            <h2>{title}</h2>
            <div>{children}</div>
          </div>
          {image
            ? image.right && <img src={image.imageLink} alt={image.name} />
            : ''}
        </section>
      </div>
    );
  }
}
