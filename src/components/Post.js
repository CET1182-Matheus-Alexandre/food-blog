import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    const {
      post: {
        imageLink,
        imageDescription,
        postLink,
        postTitle,
        authorLink,
        authorName,
        dateTime,
        text
      },
      card
    } = this.props;
    return (
      <div>
        <div className={`post${!card ? ' real' : ''}`}>
          <a href={postLink}>
            <img src={imageLink} alt={imageDescription} />
          </a>
          <div className="details">
            <div className="info">
              <div className="post-title">
                <a href={postLink}>{postTitle}</a>
              </div>
              <div className="author">
                <address>
                  <a href={authorLink}>{authorName}</a>
                </address>
                <time dateTime={dateTime}>{dateTime}</time>
              </div>
            </div>
            <p className={`post-${card ? 'resume' : 'text'}`}>{text}</p>
            {card && (
              <a href={postLink} className="see-more">
                Ler Mais...
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
