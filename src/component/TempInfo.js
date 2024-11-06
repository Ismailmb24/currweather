import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "./WeatherIcon";

export default function TempInfo({ style, temperature_2m, weather_code, is_day }) {
  const temp = Math.round(temperature_2m);
  return (
    <div className={style.basic_w_info}>
      <div className={style.temp}>
        {temp}
        <sup>o</sup>
      </div>
      <WeatherIcon style={style} weather_code={weather_code} is_day={is_day} />
    </div>
  );
}

TempInfo.propTypes = {
  style: PropTypes.object,
  temperature_2m: PropTypes.number, 
  weather_code: PropTypes.number, 
  is_day: PropTypes.number,
}