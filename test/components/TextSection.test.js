import React from 'react';
import renderer from 'react-test-renderer';
import TextSection from '../../src/components/TextSection';

describe('TextSection', () => {
  describe('should render', () => {
    it('with image on left', () => {
      const rendered = renderer
        .create(
          <TextSection
            image={{
              imageLink: 'assets/images/pizza-plate.jpg'
            }}
            title="Nosso objetivo"
          >
            <h2>oi</h2>
          </TextSection>
        )
        .toJSON();

      expect(rendered).toBeTruthy();
    });

    it('with image on right', () => {
      const rendered = renderer
        .create(
          <TextSection
            image={{
              imageLink: 'assets/images/pizza-plate.jpg',
              right: true
            }}
            title="Nosso objetivo"
          >
            <h2>oi</h2>
          </TextSection>
        )
        .toJSON();

      expect(rendered).toBeTruthy();
    });

    it('whitout image', () => {
      const rendered = renderer
        .create(
          <TextSection title="Nosso objetivo">
            <h2>oi</h2>
          </TextSection>
        )
        .toJSON();

      expect(rendered).toBeTruthy();
    });
  });
});
