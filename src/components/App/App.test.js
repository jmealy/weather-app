import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});
