import React from 'react';
import renderer from 'react-test-renderer';
import  CreateRecomendation from '../recomendationsComponent';

it('snapshot recomendations', () => {
    const tree = renderer.create(<CreateRecomendation />).toJSON();
    expect(tree).toMatchSnapshot();
})