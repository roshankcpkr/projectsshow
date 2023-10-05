import React from "react";
import "./currentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather-card">
      <div className="card-top">
        <div>
          <p className="city-name">{data.city}</p>
          <p className="city-weather">{data.weather[0].description}</p>
        </div>
        <img
          src={`./icons/${data.weather[0].icon}.png`}
          alt="Weather icon"
          className="weather-icon"
        />
      </div>
      <div className="card-bottom">
        <p className="city-temperature">{Math.round(data.main.temp)}°C</p>
        <div className="temperature-detail">
          {/* First row */}
          <div className="detail-row">
            <span className="detail-heading">Details</span>
          </div>
          {/* Second row */}
          <div className="detail-row">
            <span className="detail-label">Feels like</span>
            <span className="detail-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          {/* Third row */}
          <div className="detail-row">
            <span className="detail-label">Wind</span>
            <span className="detail-value">{data.wind.speed} m/s</span>
          </div>
          {/* Fourth row */}
          <div className="detail-row">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{data.main.humidity} %</span>
          </div>
          {/* Fifth row */}
          <div className="detail-row">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
