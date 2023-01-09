import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

function CalendarBox() {
  const hours = new Date().toLocaleTimeString();
  const [date, setDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(hours);

  //make date in french

  const mois = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  function frenchTodayDate() {
    let today = new Date();
    let year = today.getFullYear();
    let dayNumber = today.getDate();
    let month = mois[today.getMonth("")];
    let weekday = today.toLocaleDateString("fr-FR", { weekday: "long" });

    return { weekday, dayNumber, month, year };
  }

  const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("").toLowerCase();
  const { weekday, dayNumber, month, year } = frenchTodayDate();
  const today = `${capitalize(weekday)} ${dayNumber} ${month} ${year}`;

  //update time

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();

      setCurrentTime(time);
    }, 1000);
  }, []);

  return (
    <div className="calendarDetails_container">
      <div className="date-hours-details">
        <p className="time">{currentTime}</p>
        <p className="date">{today}</p>
      </div>
      <Calendar typecalendrier="FR" onChange={setDate} value={date} />
    </div>
  );
}

export default CalendarBox;
