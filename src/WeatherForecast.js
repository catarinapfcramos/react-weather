import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast row">
      <div className="col-2">
        <p className="WeatherForecast-day">
          Thu
        </p>
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="cloudy" className="other-weather-icons" />
        <p>
        <span className="WeatherForecast-max"> 19</span>°
        / {" "}
        <span className="WeatherForecast-min">10</span>°
        </p>
      </ div>
    </div>
  );
}