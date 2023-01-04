import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../homeComponent';

it('snapshot home', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
})