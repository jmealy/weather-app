import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

test('renders learn react link', () => {
  const onLocationSubmit = jest.fn();
  const tree = renderer.create(<Header onLocationSubmit={onLocationSubmit} />);
  expect(tree).toMatchSnapshot();
});
