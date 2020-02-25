import React from 'react';
import { mount } from 'enzyme';
import ForecastList from './ForecastList';


describe('<ForecastList />', () => {
  test('renders component', () => {
    const city = 'London';
    const forecastData = [
      { valid_date: '23-04-2020', min_temp: 5 },
      { valid_date: '24-04-2020', min_temp: 6 },
      { valid_date: '25-04-2020', min_temp: 5 },
      { valid_date: '26-04-2020', min_temp: 3 },
      { valid_date: '27-04-2020', min_temp: 4 },
    ];
    const component = mount(<ForecastList forecastData={forecastData} city={city} />);
    expect(component.find('div').length).toBeGreaterThan(0);
    expect(component.find('li').length).toBe(5);
  });
})
