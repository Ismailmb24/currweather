import React from "react";
import { weather_code_int } from "../data/icons";
import PropTypes from "prop-types";

export default function WeatherDesc({ style, weather_code }) {
  return (
    <div className={style.weather_desc}>
      {weather_code_int[weather_code].name}
    </div>
  );
}

WeatherDesc.propTypes = {
  style: PropTypes.object,
  weather_code: PropTypes.number,
};
