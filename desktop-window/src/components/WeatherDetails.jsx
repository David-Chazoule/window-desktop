import React from "react";

import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

function WeatherDetails({ weather, city, close }) {
  const weatherImg = () => {
    if (weather.icon === "01d") {
      const weatherStyle = "weatherDetails-container clear-day";
      return weatherStyle;
    } else if (weather.icon === "01n") {
      const weatherStyle = "weatherDetails-container clear-night";
      return weatherStyle;
    } else if (weather.icon === "10d" || weather.icon === "09d") {
      const weatherStyle = "weatherDetails-container rain-day";
      return weatherStyle;
    } else if (weather.icon === "10n" || weather.icon === "09n") {
      const weatherStyle = "weatherDetails-container rain-night";
      return weatherStyle;
    } else if (weather.icon === "13d") {
      const weatherStyle = "weatherDetails-container snow-day";
      return weatherStyle;
    } else if (weather.icon === "13n") {
      const weatherStyle = "weatherDetails-container snow-night";
      return weatherStyle;
    } else if (weather.icon === "11d") {
      const weatherStyle = "weatherDetails-container thunderstorm-day";
      return weatherStyle;
    } else if (weather.icon === "11n") {
      const weatherStyle = "weatherDetails-container thunderstorm-night";
      return weatherStyle;
    } else if (weather.icon === "50d") {
      const weatherStyle = "weatherDetails-container mist-day";
      return weatherStyle;
    } else if (weather.icon === "50n") {
      const weatherStyle = "weatherDetails-container mist-night";
      return weatherStyle;
    } else if (
      weather.icon === "09d" ||
      weather.icon === "02d" ||
      weather.icon === "03d" ||
      weather.icon === "04d"
    ) {
      const weatherStyle = "weatherDetails-container cloud-day";
      return weatherStyle;
    } else if (
      weather.icon === "09n" ||
      weather.icon === "02n" ||
      weather.icon === "03n" ||
      weather.icon === "04n"
    ) {
      const weatherStyle = "weatherDetails-container cloud-night";
      return weatherStyle;
    }
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      city(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className={weatherImg()}>
      <div className="close-window" onClick={close}>
        <p>X</p>
      </div>

      <div className="name-weather">
        <h4>{weather.name}</h4>
        <input
          type="text"
          name="city"
          placeholder="entré une ville..."
          onKeyDown={enterKeyPressed}
        />
      </div>
      <div className="weather-city">
        <img src={weather.iconURL} alt="weather.icon" />
        <p>{weather.temp.toFixed()}°C</p>
      </div>
      <div className="details-weather">
        <div className="column-details">
          <h4>
            {" "}
            <FaArrowDown /> min temp
          </h4>
          <p>{weather.temp_min.toFixed()}°C</p>
        </div>
        <div className="column-details">
          <h4>
            {" "}
            <FaArrowUp /> max temp
          </h4>
          <p>{weather.temp_max.toFixed()}°C</p>
        </div>
      </div>
      <div className="details-weather">
        <div className="column-details">
          <h4>
            {" "}
            <BiHappy /> ressenti
          </h4>
          <p>{weather.feels_like.toFixed()}°C</p>
        </div>

        <div className="column-details">
          <h4>
            {" "}
            <MdCompress /> pression
          </h4>
          <p>{weather.pressure} hPa</p>
        </div>
      </div>
      <div className="details-weather">
        <div className="column-details">
          <h4>
            {" "}
            <MdOutlineWaterDrop /> humidité
          </h4>
          <p>{weather.humidity}%</p>
        </div>
        <div className="column-details">
          <h4>
            {" "}
            <FaWind /> vents
          </h4>
          <p>{weather.speed.toFixed() * 3.6} Km/h</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
