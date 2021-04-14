import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function convertToFahrenheit(celsiusTemp) {
        return (Math.round((celsiusTemp * 9 / 5) + 32));
    }

    if (unit === "celsius") {
    return(
    <div className="WeatherTemperature">   
        <div className="weather-temperature">
            <span className="currentTemperature">{props.celsiusTemperature}</span>
            <span className="units">
              °C  | <a href="/" onClick={showFahrenheit}>°F</a>
            </span>
        </div>
        <p>
            <span className="max-temp">{props.maxTemp}°</span>
            /<span className="min-temp">{props.minTemp}°</span>
        </p>
    </div>)
    } else {
        return(
            <div className="WeatherTemperature">   
                <div className="weather-temperature">
                    <span className="currentTemperature">{convertToFahrenheit(props.celsiusTemperature)}</span>
                    <span className="units">
                    <a href="/" onClick={showCelsius}>°C</a>|°F
                    </span>
                </div>
                <p>
                    <span className="max-temp">{convertToFahrenheit(props.maxTemp)}°</span>
                    /<span className="min-temp">{convertToFahrenheit(props.minTemp)}°</span>
                </p>
            </div>)
    }
}