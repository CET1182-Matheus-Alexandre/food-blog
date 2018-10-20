import React, { Component } from 'react';
import Page from '../layout/page';
import PostContainer from '../components/PostContainer';
import PostText from '../components/PostText';

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
          <PostText
            card
            post={{
              imageLink: '/assets/images/burguer.jpg',
              imageDescription: 'A burguer',
              postLink: '/post/01',
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
          </PostText>
          <PostText
            card
            post={{
              imageLink: '/assets/images/burguer.jpg',
              imageDescription: 'A burguer',
              postLink: '/post/02',
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
          </PostText>
          <PostText
            card
            post={{
              imageLink: '/assets/images/burguer.jpg',
              imageDescription: 'A burguer',
              postLink: '/post/03',
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
          </PostText>
        </PostContainer>
      </Page>
    );
  }
}
