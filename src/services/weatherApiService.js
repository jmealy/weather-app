import config from '../config';

const getForecast = async (searchTerm) => {

  let responseBody;
  try {
    const response = await fetch('url');
    responseBody = await response.json();

  } catch (error) {
    console.log(`An error occured while fetching weather: ${error}`);
  }
};

export default getForecast;
