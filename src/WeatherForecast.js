import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded,setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");
  
  useEffect(() => {
      setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);   
  }
  
  function load() {
        let apiKey =`4b590c33d87dbad37bb78d97de248093`;
        let units="metric";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        {forecast.map(function(dailyForecast, index) {
          if(index<5) {
            return (
            <div className="col" key={index} >
             <WeatherForecastDay data={dailyForecast} /> 
            </ div>);} else {
              return (null);
            }
        })} 
      </div>
     );} else {
        load();
        return "Loading...";
  }
}