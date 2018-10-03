import React from 'react';
import renderer from 'react-test-renderer';
import CardContainer from '../../src/components/CardContainer';

describe('CardContainer', () => {
  it('should render', () => {
    const rendered = renderer
      .create(
        <CardContainer title="oi">
          <h1>oi</h1>
        </CardContainer>
      )
      .toJSON();

    expect(rendered).toBeTruthy();
  });
});
