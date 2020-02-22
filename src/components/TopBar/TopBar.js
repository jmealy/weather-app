import React from 'react';
import LocationSearch from '../LocationSearch/LocationSearch';
import './TopBar.css';

const Header = () => {
  return (
    <div className="TopBar">
      <div className="appTitle">Weather App dawg</div>
      <div className="SearchArea">
        <LocationSearch></LocationSearch>
      </div>

    </div>
  );
}

export default Header;
