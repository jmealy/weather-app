import config from '../config';

const getFiveDayForecast = async city => {
  const parameters = `?city=${city}&key=${config.weatherApiKey}`;

  let response;
  try {
    response = await fetch(config.weatherApiBaseUrl + parameters);
  } catch (error) {
    throw new Error('Unable to fetch weather forecast. Please try again.');
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
    return Promise.reject(new Error('No weather data found. Please enter a valid city name.'));
  } else {
    return Promise.reject(new Error('Unable to fetch weather forecast. Please try again.'));
  }
};

export { getFiveDayForecast };
