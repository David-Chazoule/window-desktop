import React, { useEffect, useState } from "react";
import { getFormattedWeatherData } from "../weatherService";
import WeatherDetails from "./WeatherDetails";

function WeatherBar() {
  const [weather, setWeather] = useState(null);
  const [detailWeather, setDetailWeather] = useState(false);
  const [city, setCity] = useState("Paris");

  useEffect(() => {
    const fetchWeaterData = async () => {
      const data = await getFormattedWeatherData(city);
      setWeather(data);
    };
    fetchWeaterData();
  }, [city]);

  const handleDetails = () => {
    setDetailWeather(!detailWeather);
  };

  return (
    <>
      <div className="weatherBar-container" onClick={handleDetails}>
        {weather && (
          <>
            <img src={weather.iconURL} alt="weather.icon" />
            <p>
              {weather.name} {weather.country}
            </p>
            <p>{weather.description}</p>
            <p>{weather.temp.toFixed()}°C</p>
          </>
        )}
      </div>

      {detailWeather && (
        <div className="weatherDetails">
          <WeatherDetails
            weather={weather}
            setWeather={setWeather}
            city={setCity}
            close={handleDetails}
          />
        </div>
      )}
    </>
  );
}

export default WeatherBar;
