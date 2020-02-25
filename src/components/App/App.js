import React, { useState } from 'react';
import { getFiveDayForecast } from '../../services/weatherApiService';
import ForecastList from '../ForecastList/ForecastList';
import TopBar from '../TopBar/TopBar';
import Header from '../Header/Header'
import './App.css';

function App() {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState({});

  const displayForecast = async city => {
    let fiveDayForecast;
    try {
      fiveDayForecast = await getFiveDayForecast(city);
      setForecast(fiveDayForecast);
    } catch (error) {
      setError(error);
    }
  }

  const renderAppContent = () => {
    if (error && error.message) {
      return (<h3>{error.message}</h3>);
    }
    if (forecast.data && forecast.data.length) {
      return (
        <ForecastList
          forecastData={forecast.data}
          city={forecast.cityName}
        />
      );
    }
    return (
      <Header onLocationSubmit={displayForecast} />
    )
  }


  return (
    <div className="App">
      <TopBar onLocationSubmit={displayForecast} />
      { renderAppContent() }
    </div>
  );
}

export default App;
