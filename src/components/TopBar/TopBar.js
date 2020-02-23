import React from 'react';
import LocationSearch from '../LocationSearch/LocationSearch';
import './TopBar.css';

const Header = ({ onLocationSubmit }) => {

  return (
    <div className="topBar">
      <div className="appTitle">Weather App</div>
      <div className="topBarSearch">
        <LocationSearch onSubmit={onLocationSubmit} />
      </div>

    </div>
  );
}

export default Header;
