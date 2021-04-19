import React, {useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded,setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);   
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <div className="col-2">
          <WeatherForecastDay data={forecast[0]} />
        </ div>
      </div>
    );} else {
        let apiKey =`4b590c33d87dbad37bb78d97de248093`;
        let units="metric";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading...";
  }
}