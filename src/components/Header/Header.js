import React from 'react';
import LocationSearch from '../LocationSearch/LocationSearch'
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="search">
        <LocationSearch />
      </div>

    </div>
  );
}

export default Header;
