import React from 'react';
import LocationSearch from '../LocationSearch/LocationSearch'
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <LocationSearch></LocationSearch>
    </div>
  );
}

export default Header;
