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
        dateTime
      },
      card,
      children
    } = this.props;
    return (
      <React.Fragment>
        <div className={`post${!card ? ' real' : ''}`}>
          <img src={imageLink} alt={imageDescription} />
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
            <div className={`post-${card ? 'resume' : 'text'}`}>{children}</div>
            {card && (
              <a href={postLink} className="see-more">
                Ler Mais...
              </a>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
