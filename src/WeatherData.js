

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
        <div className="temperature">
          <div className="weather-temperature">
            <span className="currentTemperature">{props.data.temperature}</span>
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
            <span className="max-temp">{props.data.maxTemp}</span>
            <span>°</span>/<span className="min-temp">{props.data.minTemp}</span>
            <span>°</span>
          </p>
        </div>
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