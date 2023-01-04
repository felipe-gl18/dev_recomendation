import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../footerComponent';

it('snapshot footer', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
})