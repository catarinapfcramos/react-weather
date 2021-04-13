import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";


export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weather, setWeather] = useState({ ready : false });

    function updateCity(event) {
        event.preventDefault();
        setCity(event.target.value);    
    }

    function showWeather(response) {
        setWeather({
          ready: true,
          city: response.data.name,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          temperature: Math.round(response.data.main.temp),
          maxTemp: Math.round(response.data.main.temp_max),
          minTemp: Math.round(response.data.main.temp_min),
          humidity: Math.round(response.data.main.humidity),
          windSpeed: Math.round(response.data.wind.speed)
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        showWeather();        
    }

    if (weather.ready) {
      return(
        <div className="Weather">
        <p><FormattedDate date={weather.date}/></p>
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
        <div className="City">{weather.city}</div>
        <div className="Icon">
          <p className="description">{weather.description}</p>
          <img
            src={weather.icon}
            alt={weather.description}
            className="main-icon"
          />
        </div>
        <div className="temperature">
          <div className="weather-temperature">
            <span className="currentTemperature">{weather.temperature}</span>
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
            <span className="max-temp">{weather.maxTemp}</span>
            <span>°</span>/<span className="min-temp">{weather.minTemp}</span>
            <span>°</span>
          </p>
        </div>
        <div className="Details">
          <p>
            Humidity: {weather.humidity} %
            <br />
            Wind: {weather.windSpeed} m/s
          </p>
        </div>
        </div>
) } else {
    let apiKey="4b590c33d87dbad37bb78d97de248093";
    let units="metric";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  return ("Loading...");
  }
}
