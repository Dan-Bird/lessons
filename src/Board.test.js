import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Board from './Board';

it('matches snapshot', () => {
  const tree = renderer.create(<Board />).toJSON();
  expect(tree).toMatchSnapshot();
});
