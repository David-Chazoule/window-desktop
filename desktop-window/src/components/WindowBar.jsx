import React from "react";
import Time from "../components/Time";

import battery from "../styles/img/battery.png";
import wifi from "../styles/img/wifi.png";
import loudspeaker from "../styles/img/loudspeaker.png";
import WeatherBar from "./WeatherBar";
import WindowMenu from "./WindowMenu";

function WindowBar() {
  return (
    <div className="windowBar-container">
      <div className="window-left-part">
        <div className="btn-window-search-container" title="Démarrer">
          <WindowMenu />
        </div>
        <div className="body-bar"></div>
      </div>

      <div className="window-right-part">
        <div className="weather-container">
          <WeatherBar />
        </div>
        <div className="battery-wifi-sound-container">
          <img src={battery} alt="battery-icon" />
          <img src={wifi} alt="battery-icon" />
          <img src={loudspeaker} alt="battery-icon" />
        </div>
        <div className="time-date-container">
          <Time />
        </div>
      </div>
    </div>
  );
}

export default WindowBar;
