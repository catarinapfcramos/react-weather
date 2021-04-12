import React, { useState} from "react";
import axios from "axios";

import "./Weather.css";


export default function Weather() {
const [city, setCity] = useState("");


    function updateCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }
    function showWeather(response) {
        console.log(response.data);
    }

    function handleSubmit(event){
        event.preventDefault();
        let apiKey="4b590c33d87dbad37bb78d97de248093";
        let units="metric";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(showWeather);
    }
return(
    <div className="Weather">
<p className="date">Last updated at: Saturday 10:35</p>
<form onSubmit={handleSubmit}>
      <div className="row g-3 align-items-center">
        <div className="col-8">
          <input
            type="search"
            className="form-control search-bar"
            placeholder="Search city..."
            onChange={updateCity}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-secondary search-button">
            Search
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-secondary current-button">Current</button>
        </div>
      </div>
    </form>
    <div className="City">Porto</div>
    <div className="Icon">
      <p className="description">Sunny</p>
      <img
        src="http://openweathermap.org/img/wn/01d@2x.png"
        alt="weather icon"
        className="main-icon"
      />
    </div>
     <div className="temperature">
      <div className="weather-temperature">
        <span className="currentTemperature">16</span>
        <span className="units">
          <a href="/" className="active">
            °C
          </a>
          |
          <a href="/" className="inactive">
            °F
          </a>
        </span>
      </div>
      <p>
        <span className="max-temp">16</span>
        <span>°</span>/<span className="min-temp">10</span>
        <span>°</span>
      </p>
    </div>
    <div className="Details">
      <p>
        Humidity: 70%
        <br />
        Wind: 3km/h
      </p>
    </div>
    </div>
)

}