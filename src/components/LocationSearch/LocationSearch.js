import React, { useRef } from 'react';
import './LocationSearch.css';

const LocationSearch = ({ onSubmit }) => {
  const inputEl = useRef(null);

  const onTextSubmit = event => {
    if (!inputEl || !inputEl.current) return;

    event.preventDefault();
    const searchTerm = inputEl.current.value;

    // onSubmit(searchTerm);

    onSubmit(searchTerm);

    // Clear the input field manually since default was prevented.
    if (searchTerm.length > 0) {
      inputEl.current.value = '';
    }
  };

  return (
    <form className="formContainer" onSubmit={onTextSubmit}>
      <input className="textInput" ref={inputEl} type="text" placeholder="London"></input>
      <input className="submitButton" type="submit" value="Get Weather" />
    </form>
  );
}

export default LocationSearch;