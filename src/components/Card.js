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
      <div>
        <a href={postLink}>
          <div className="post">
            <img src={imageLink} alt={imageDescription} />
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
        </a>
      </div>
    );
  }
}
