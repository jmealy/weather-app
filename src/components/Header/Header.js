import React from 'react';
import LocationSearch from '../LocationSearch/LocationSearch'
import './Header.css';

const Header = ({ onLocationSubmit }) => {
  return (
    <div className="header">
      <div className="search">
        <h1>Enter a City</h1>
        <div className="searchForm">
          <LocationSearch onSubmit={onLocationSubmit} />
        </div>
      </div>

    </div>
  );
}

export default Header;
