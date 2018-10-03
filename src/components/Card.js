import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const {
      lastPost: {
        postLink,
        imageLink,
        imageDescription,
        authorName,
        authorLink,
        dateTime,
        postTitle
      }
    } = this.props;
    return (
      <div className="post">
        <a href={postLink}>
          <img src={imageLink} alt={imageDescription} />
        </a>
        <div className="info">
          <div className="author">
            <address>
              <a href={authorLink}>{authorName}</a>
            </address>
            <time dateTime={dateTime}>{dateTime}</time>
          </div>
          <div className="post-title">
            <a href={postLink}>{postTitle}</a>
          </div>
        </div>
      </div>
    );
  }
}
