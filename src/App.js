import React from "react";
import Weather from "./Weather";
import Coder from "./Coder";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather defaultCity="Porto" />      
          <hr />
          <Coder />
        </div>
      </div>
    </div>
  );
}

export default App;
