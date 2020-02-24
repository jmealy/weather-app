import React from 'react';
import renderer from 'react-test-renderer';
import ForecastList from './ForecastList';

test('renders learn react link', () => {
  const city = 'London';
  const forecastData = [
    { valid_date: '23-04-2020', min_temp: 5 },
    { valid_date: '24-04-2020', min_temp: 6 },
    { valid_date: '25-04-2020', min_temp: 5 },
    { valid_date: '26-04-2020', min_temp: 3 },
    { valid_date: '27-04-2020', min_temp: 4 },
  ];
  const tree = renderer.create(<ForecastList forecastData={forecastData} city={city} />);
  expect(tree).toMatchSnapshot();
});
