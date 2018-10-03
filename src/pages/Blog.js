import React, { Component } from 'react';
import Page from '../layout/page';
import PostContainer from '../components/PostContainer';
import Post from '../components/Post';

export default class Blog extends Component {
  render() {
    return (
      <Page
        pageTitle="Shared Food - Blog"
        title="Blog"
        subtitle="sweet posts here"
        photo={{
          src: 'assets/images/notebook-food.jpg',
          authorName: 'rawpixel'
        }}
      >
        <PostContainer title="Posts">
          <Post
            card
            post={{
              imageLink: '/assets/images/burguer.jpg',
              imageDescription: 'A burguer',
              postLink: '/posts/01',
              postTitle:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              authorLink: 'https://twitter.com/pedr3cal',
              authorName: 'Alexandre Pedrecal',
              dateTime: '2018-08-19 16:05'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            leo egestas quam volutpat molestie non nec massa. Quisque
            sollicitudin sed sem in tempus. Morbi feugiat non sapien id laoreet.
            Vestibulum dictum in dui et congue. Phasellus sed lorem consectetur
            sem placerat pharetra. Aliquam luctus erat massa, vel euismod enim
            iaculis in. Cras ultricies volutpat felis eget lobortis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Cras vel leo egestas
            quam volutpat molestie non nec massa. Quisque sollicitudin sed sem
            in tempus. Morbi feugiat non sapien id laoreet. Vestibulum dictum in
            dui et congue. Phasellus sed lorem consectetur sem placerat
            pharetra. Aliquam luctus erat massa, vel euismod enim iaculis in.
            Cras ultricies volutpat felis eget lobortis.
          </Post>
          <Post
            card
            post={{
              imageLink: '/assets/images/burguer.jpg',
              imageDescription: 'A burguer',
              postLink: '/posts/01',
              postTitle:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              authorLink: 'https://twitter.com/pedr3cal',
              authorName: 'Alexandre Pedrecal',
              dateTime: '2018-08-19 16:05'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            leo egestas quam volutpat molestie non nec massa. Quisque
            sollicitudin sed sem in tempus. Morbi feugiat non sapien id laoreet.
            Vestibulum dictum in dui et congue. Phasellus sed lorem consectetur
            sem placerat pharetra. Aliquam luctus erat massa, vel euismod enim
            iaculis in. Cras ultricies volutpat felis eget lobortis.
          </Post>
          <Post
            card
            post={{
              imageLink: '/assets/images/burguer.jpg',
              imageDescription: 'A burguer',
              postLink: '/posts/01',
              postTitle:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              authorLink: 'https://twitter.com/pedr3cal',
              authorName: 'Alexandre Pedrecal',
              dateTime: '2018-08-19 16:05'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            leo egestas quam volutpat molestie non nec massa. Quisque
            sollicitudin sed sem in tempus. Morbi feugiat non sapien id laoreet.
            Vestibulum dictum in dui et congue. Phasellus sed lorem consectetur
            sem placerat pharetra. Aliquam luctus erat massa, vel euismod enim
            iaculis in. Cras ultricies volutpat felis eget lobortis.
          </Post>
        </PostContainer>
      </Page>
    );
  }
}
