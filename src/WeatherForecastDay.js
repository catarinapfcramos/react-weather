import React from "react";

export default function WeatherForecastDay(props) {

function maxTemperature() {
     let temperature = Math.round(props.data.temp.max);
     return `${temperature}°`;
 }
 function minTemperature() {
     let temperature = Math.round(props.data.temp.min);
     return `${temperature}°`;
 }
 function day() {
     let date = new Date(props.data.dt * 1000);
     let day = date.getDay();
     let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
     return days[day];
 }

let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

    return(
        <div>
           <p className="WeatherForecast-day">
            {day()}
            </p>
            <img src= {icon} alt={props.data.weather[0].description} className="other-weather-icons" />
            <p>
            <span className="WeatherForecast-max"> {maxTemperature()}</span>
            / {" "}
            <span className="WeatherForecast-min">{minTemperature()}</span>
            </p>
         </div>
    )
}