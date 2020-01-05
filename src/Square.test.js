import React from 'react';
import { render, getByTestId, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Square from './Square';

afterEach(cleanup);

it('renders correctly with X', () => {
  const { getByTestId } = render(<Square value="X" />);
  expect(getByTestId('square')).toHaveTextContent('X');
});

it('renders correctly with O', () => {
  const { getByTestId } = render(<Square value="O" />);
  expect(getByTestId('square')).toHaveTextContent('O');
});
