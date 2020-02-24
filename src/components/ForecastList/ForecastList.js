import React, { useState, useEffect } from 'react';
import './ForecastList.css';

const ForecastList = ({ forecastData, city }) => {

  const [detailView, setDetailView] = useState(false);
  const [selectedForecast, setSelectedForecast] = useState(0);

  useEffect(() => setDetailView(false), forecastData);

  const showDetailView = forecast => {
    setDetailView(true);
    setSelectedForecast(forecast);
  }

  const renderForecastPreview = forecast => {
    if (!(forecast && forecast.weather)) return null;

    const date = new Date(forecast.valid_date);
    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

    const iconUrl = `https://www.weatherbit.io/static/img/icons/${forecast.weather.icon}.png`;
    return (
      <>
        <img src={iconUrl} alt="weather icon" />
        <p>{formattedDate}</p>
      </>
    );
  }

  const renderSelectedForecast = forecast => {
    if (!(forecast && forecast.weather)) return null;

    return (
      <div className="forecastDetails">
        {renderForecastPreview(forecast)}
        <ul>
          <li>{city}</li>
          <li>{forecast.weather.description}</li>
          <li>min temp: {forecast.min_temp}</li>
          <li>max temp: {forecast.max_temp}</li>
          <li>humidity: {forecast.rh}</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="forecastContainer">
      {
        detailView ?
          renderSelectedForecast(selectedForecast) :
          <>
            <h1>{city}</h1>
            <ul className="previewList">
              {forecastData.map((forecast, index) => (
                <li key={index} onClick={() => showDetailView(forecast)}>
                  {renderForecastPreview(forecast)}
                </li>
              ))}
            </ul>
          </>
      }
    </div>
  );
}

export default ForecastList;
