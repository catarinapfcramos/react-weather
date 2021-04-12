import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Coder from "./Coder";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="weather-app">
    <Weather />
    <hr />
      <Forecast />
    <hr />
      <Coder />
      </div>
    </div>
  );
}

export default App;
