import { getFiveDayForecast } from './weatherApiService';

const forecast = {
  city_name: 'London',
  data: [
    { valid_date: '23-04-2020', min_temp: 5 },
    { valid_date: '24-04-2020', min_temp: 6 },
    { valid_date: '25-04-2020', min_temp: 5 },
    { valid_date: '26-04-2020', min_temp: 3 },
    { valid_date: '27-04-2020', min_temp: 4 },
    { valid_date: '28-04-2020', min_temp: -1 },
    { valid_date: '29-04-2020', min_temp: -4 },
    { valid_date: '30-04-2020', min_temp: 5 },
  ]
}

const responseBody = {
  json: jest.fn(() => forecast),
  status: 200
}

describe('getFiveDayForecast', () => {
  test('resolves with the 5 day forecast', async () => {

    fetch = jest.fn(() => Promise.resolve(responseBody));

    const expectedResult = {
      cityName: 'London',
      data: [
        { valid_date: '23-04-2020', min_temp: 5 },
        { valid_date: '24-04-2020', min_temp: 6 },
        { valid_date: '25-04-2020', min_temp: 5 },
        { valid_date: '26-04-2020', min_temp: 3 },
        { valid_date: '27-04-2020', min_temp: 4 },
      ]
    }

    const result = await getFiveDayForecast('london');

    expect(result).toStrictEqual(expectedResult);
  });
});
