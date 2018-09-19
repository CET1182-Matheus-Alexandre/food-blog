import React, { Component } from 'react'

export default class TextSection extends Component {
  render() {
    const { details: {image, name}, children  } = this.props;
    return (
      <div>
        <section className="welcome">
          <img src={image} alt={name} />
          <div className="about">
            {children}
          </div>
        </section>
      </div>
    )
  }
}
