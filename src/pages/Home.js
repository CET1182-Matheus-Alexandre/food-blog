import React, { Component } from 'react';
import Page from '../layout/page';
import TextSection from '../components/TextSection';
import PostCard from '../containers/PostCards';

export default class Home extends Component {
  render() {
    return (
      <Page
        pageTitle="Shared Food - Home"
        title="The Best Food"
        subtitle="is the one that you share"
        photo={{
          src: 'assets/images/shared-food.jpg',
          authorName: 'rawpixel'
        }}
      >
        <TextSection
          image={{ imageLink: 'assets/images/fish-plate.jpg' }}
          title="Bem vindo"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            leo egestas quam volutpat molestie non nec massa. Quisque
            sollicitudin sed sem in tempus. Morbi feugiat non sapien class
            laoreet. Vestibulum dictum in dui et congue. Phasellus sed lorem
            consectetur sem placerat pharetra. Aliquam luctus erat massa, vel
            euismod enim iaculis in. Cras ultricies volutpat felis eget
            lobortis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            leo egestas quam volutpat molestie non nec massa. Quisque
            sollicitudin sed sem in tempus. Morbi feugiat non sapien id laoreet.
            Vestibulum dictum in dui et congue. Phasellus sed lorem consectetur
            sem placerat pharetra. Aliquam luctus erat massa, vel euismod enim
            iaculis in. Cras ultricies volutpat felis eget lobortis.
          </p>
        </TextSection>

        <TextSection
          image={{
            imageLink: 'assets/images/pizza-plate.jpg',
            right: true
          }}
          title="Nosso objetivo"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            leo egestas quam volutpat molestie non nec massa. Quisque
            sollicitudin sed sem in tempus. Morbi feugiat non sapien class
            laoreet. Vestibulum dictum in dui et congue. Phasellus sed lorem
            consectetur sem placerat pharetra. Aliquam luctus erat massa, vel
            euismod enim iaculis in. Cras ultricies volutpat felis eget
            lobortis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            leo egestas quam volutpat molestie non nec massa. Quisque
            sollicitudin sed sem in tempus. Morbi feugiat non sapien id laoreet.
            Vestibulum dictum in dui et congue. Phasellus sed lorem consectetur
            sem placerat pharetra. Aliquam luctus erat massa, vel euismod enim
            iaculis in. Cras ultricies volutpat felis eget lobortis.
          </p>
        </TextSection>
        <PostCard />
      </Page>
    );
  }
}
