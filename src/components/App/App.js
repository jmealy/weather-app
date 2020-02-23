import React from 'react';
import TopBar from '../TopBar/TopBar';
import Header from '../Header/Header'
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="Header">
        <Header />
      </div>
    </div>
  );
}

export default App;
