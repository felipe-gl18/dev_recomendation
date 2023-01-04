import React from 'react';
import renderer from 'react-test-renderer';
import About from '../aboutComponent';

it('snapshot about', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
})