import React from 'react';
import renderer from 'react-test-renderer';
import  Navbar from '../navbar';

it('matches snapshot', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
})