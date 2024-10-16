import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";

export default function TempInfo({ temp, weather_code, isday }) {
  return (
    <div id="basic-w-info">
      <div>
        {temp}
        <sup>o</sup>
      </div>
      <Icon code={weather_code} isday={isday} />
    </div>
  );
}

TempInfo.propTypes = {
  temp: PropTypes.number, 
  weather_code: PropTypes.number, 
  isday: PropTypes.number,
}