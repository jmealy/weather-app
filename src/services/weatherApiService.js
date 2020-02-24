import config from './config';

const getFiveDayForecast = async city => {
  const parameters = `?city=${city}&key=${config.apiKey}`;

  let response;
  try {
    response = await fetch(config.baseUrl + parameters);
  } catch (error) {
    throw new Error('Unable to fetch weather forecast.');
  }

  if (response.status === 200) {
    const responseBody = await response.json();
    const fiveDayForecast = {
      cityName: responseBody.city_name,
      data: responseBody.data.slice(0, 5)
    }
    return Promise.resolve(fiveDayForecast);
  } else if (response.status === 204) {
    // When an invalid city name is sent, a 204 is returned from the API. 
    throw new Error('Invalid City Name.');
  } else {
    throw new Error('Unable to fetch weather forecast.');
  }
};

export { getFiveDayForecast };
