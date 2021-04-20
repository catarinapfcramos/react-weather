import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weather, setWeather] = useState({ ready : false });

    function updateCity(event) {
        setCity(event.target.value);    
    }

    function showWeather(response) {
        setWeather({
          ready: true,
          city: response.data.name,
          coordinates: response.data.coord,
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
    function search(){
      let apiKey="4b590c33d87dbad37bb78d97de248093";
      let units="metric";
      let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(showWeather);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();        
    }

    function showPositionWeather(position) {
      let apiKey="4b590c33d87dbad37bb78d97de248093";
      let units="metric";
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
      axios.get(url).then(showWeather);
    }

    function showCurrentLocation(event){
      event.preventDefault();
      navigator.geolocation.getCurrentPosition(showPositionWeather);
    }

    if (weather.ready) {
      return(
        <div className="Weather">
        <p><FormattedDate date={weather.date}/></p>
        <form onSubmit={handleSubmit}>
          <div className="row ">
            <div className="col-7">
              <input
                type="search"
                className="form-control search-bar"
                placeholder="Search city..."
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-secondary search-button" />
           </div>
            <div className="col-2">
              <button className="btn btn-secondary current-button" onClick={showCurrentLocation}>📍</button>
            </div>
            </div>
          </form>
          <WeatherData data={weather} />
          <hr />
          <WeatherForecast coordinates={weather.coordinates} />
        </div>
      ) } else {
          search();
          return ("Loading...");
        }
}
