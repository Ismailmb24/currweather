import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function DateInfo({ style, time }) {
  const [recentTime, setDate] = useState("");
  
  useEffect(() => {
    const week_days = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY"
    ]
    const date = new Date(time);
    const day = week_days[date.getDay()];
    const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes();
    const format = date.getHours() < 12 ? "AM" : "PM";
    const full_time = `${day} ${hour}:${minute} ${format}`
    setDate(full_time);
  }, [time]);
    

  return <div className={style.date_info}>{recentTime}</div>;
}

DateInfo.propTypes = {
  time: PropTypes.string,
}