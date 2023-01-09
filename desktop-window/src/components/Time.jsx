import React, { useEffect, useState } from "react";
import CalendarBox from "./CalendarBox";

function Time() {
  const hours = new Date().toLocaleTimeString().substring(0, 5);
  const date = new Date().toLocaleDateString();
  const [currentTime, setCurrentTime] = useState(hours);
  const [currentDate, setCurrentDate] = useState(date);
  const [dateDetails, SetDateDetails] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const newTime = time.substring(0, 5);

      setCurrentTime(newTime);
    }, 1000);
  }, []);

  const handleDateDetails = () => {
    SetDateDetails(!dateDetails);
  };

  return (
    <>
      <div className="time_container" onClick={handleDateDetails}>
        <p>{currentTime}</p>
        <p>{currentDate}</p>
      </div>
      {dateDetails && (
        <div className="calendar_container">
          <CalendarBox />
        </div>
      )}
    </>
  );
}

export default Time;
