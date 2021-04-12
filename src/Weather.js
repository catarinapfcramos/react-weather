import React from "react";
import "./Weather.css";

export default function Weather() {

return(
    <div className="Weather">
<p className="date">Last updated at: Saturday 10:35</p>
<form>
      <div className="row g-3 align-items-center">
        <div className="col-8">
          <input
            type="search"
            className="form-control search-bar"
            placeholder="Search city..."
            autoComplete="off"
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