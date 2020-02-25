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

let responseBody = {
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

  test('throws error for invalid city name', async () => {
    responseBody.status = 204;
    fetch = jest.fn(() => Promise.resolve(responseBody));
    await expect(getFiveDayForecast('london')).rejects.toThrow('Invalid City Name.');
  });

  test('resolves with the 5 day forecast', async () => {
    responseBody.status = 400;
    fetch = jest.fn(() => Promise.resolve(responseBody));
    await expect(getFiveDayForecast('london')).rejects.toThrow('Unable to fetch weather forecast.');
  });
});
