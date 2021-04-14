import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
    return(
        <div className="WeatherData">
        <div className="City">{props.data.city}</div>
        <div className="Icon">
          <p className="description">{props.data.description}</p>
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="main-icon"
          />
        </div>
        <WeatherTemperature celsiusTemperature={props.data.temperature} maxTemp={props.data.maxTemp} minTemp={props.data.minTemp} />
        
        <div className="Details">
          <p>
            Humidity: {props.data.humidity} %
            <br />
            Wind: {props.data.windSpeed} m/s
          </p>
        </div>
        </div>
    )
}