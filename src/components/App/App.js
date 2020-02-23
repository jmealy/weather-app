import React, { useState } from 'react';
import { getFiveDayForecast } from '../../services/weatherApiService';
import ForecastList from '../ForecastList/ForecastList';
import TopBar from '../TopBar/TopBar';
import Header from '../Header/Header'
import './App.css';

function App() {
  const [forecast, setForecast] = useState([]);

  const displayForecast = async city => {
    let fiveDayForecast;
    try {
      fiveDayForecast = await getFiveDayForecast(city);
      setForecast(fiveDayForecast);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <TopBar onLocationSubmit={displayForecast} />
      {
        forecast.data && forecast.data.length > 0 ?
          <ForecastList
            forecastData={forecast.data}
            city={forecast.cityName}
          /> :
          <Header onLocationSubmit={displayForecast} />
      }
    </div>
  );
}

export default App;
