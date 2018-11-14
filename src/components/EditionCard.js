import React, { Component } from 'react';
import { Link } from '@reach/router';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default class EditionCard extends Component {
  render() {
    const {
      id,
      post: {
        title,
        createdAt,
        image: { imageUrl }
      },
      author: { name, link },
      onEdit,
      onRemove
    } = this.props;

    return (
      <div className="edition-card">
        <div className="description">
          <img src={imageUrl} alt="post" />
          <div className="info">
            <Link to={`/post/${id}`}>
              <h2>{title}</h2>
            </Link>
            <h3>
              Feito por: <a href={link}>{name}</a> <br />
              Em:{' '}
              {new firebase.firestore.Timestamp(
                createdAt.seconds,
                createdAt.nanoseconds
              )
                .toDate()
                .toDateString()}
            </h3>
          </div>
        </div>
        <div className="options">
          <a className="option" href="#" onClick={onEdit}>
            <span>⚙</span>
          </a>
          <a className="option" href="#" onClick={onRemove}>
            <span>🗑</span>
          </a>
        </div>
      </div>
    );
  }
}
