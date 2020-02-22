import React, { useRef } from 'react';
import './LocationSearch.css';

const LocationSearch = (props) => {
  const inputEl = useRef(null);

  const onTextSubmit = () => {
    // if (!inputEl || !inputEl.current) return;

    // event.preventDefault();
    // const inputText = inputEl.current.value;
  };

  return (
    <form className="formContainer" onSubmit={onTextSubmit}>
      <input className="textInput" ref={inputEl} type="text"></input>
      <input className="submitButton" type="submit" value="Get Weather" />
    </form>
  );
}

export default LocationSearch;