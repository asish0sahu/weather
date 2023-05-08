import "./current_weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temprature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parmeter-row">
            <span className="parameter-label">Details</span>
          </div>

          <div className="parmeter-row">
            <span className="parameter-label">Real Feel</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parmeter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parmeter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parmeter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} mbar</span>
          </div>
          <div className="parmeter-row">
            <span className="parameter-label">Chances of rain</span>
            <span className="parameter-value">{data.clouds.all}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
