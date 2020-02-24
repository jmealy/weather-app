import React from 'react';
import renderer from 'react-test-renderer';
import TopBar from './TopBar';

test('renders learn react link', () => {
  const tree = renderer.create(<TopBar onLocationSubmit={jest.fn()} />);
  expect(tree).toMatchSnapshot();
});
