import React, { Component } from 'react';

export default class EditionCard extends Component {
  render() {
    const {
      id,
      post: { title },
      author: { name, link }
    } = this.props;
    return (
      <div>
        <h2>
          {title} - {id}
        </h2>
        <h3>
          Feito por: <a href={link}>{name}</a>
        </h3>
      </div>
    );
  }
}
