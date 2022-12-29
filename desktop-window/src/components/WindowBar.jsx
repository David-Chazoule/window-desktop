import React from 'react'

import windows from "../styles/img/windowsIcon.png"
import battery from "../styles/img/battery.png"
import wifi from "../styles/img/wifi.png"
import loudspeaker from "../styles/img/loudspeaker.png"

function WindowBar() {
  return (
    
    <div className='windowBar-container'>
      <div className='window-left-part'>
    <div className='btn-window-search-container'>
      <img src={windows} alt="windows-icon" />
    </div>
    <div className='body-bar'></div>
    </div>
    
    <div className='window-right-part'>
    <div className='weather-container'></div>
    <div className='battery-wifi-sound-container'>
      <img src={battery} alt="battery-icon" />
      <img src={wifi} alt="battery-icon" />
      <img src={loudspeaker} alt="battery-icon" />
    </div>
    <div className='time-date-container'>
      <p>18:12</p>
      <p>29/12/2022</p>
    </div>
    </div>


    </div>
  )
}

export default WindowBar