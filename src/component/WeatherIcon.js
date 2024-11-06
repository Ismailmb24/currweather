import React from "react";
import PropTypes from "prop-types";
import { weather_code_int } from "../data/icons";

export default function WeatherIcon({style, weather_code, is_day}) {
  const source = is_day 
  ? weather_code_int[weather_code].icons.day 
  : weather_code_int[weather_code].icons.night;
  
  return (
    <div className={style.w_icon_wraper}>
      <img src={source} alt="weather icon" className={style.weather_icon} />
    </div>
  );
}

WeatherIcon.propTypes = {
  style: PropTypes.object,
  weather_code: PropTypes.number,
  is_day: PropTypes.number,
}