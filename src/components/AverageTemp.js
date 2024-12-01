import React from "react";
import PropTypes from "prop-types";

export default function AverageTemp({
  style,
  temperature_2m_max,
  temperature_2m_min,
}) {
  const max_temp = Math.round(temperature_2m_max);
  const min_temp = Math.round(temperature_2m_min);

  return (
    <div className={style.avr_temp}>
      {max_temp}
      <sup>o</sup> / {min_temp}
      <sup>o</sup>
    </div>
  );
}

AverageTemp.propTypes = {
  style: PropTypes.object,
  temperature_2m_max: PropTypes.number,
  temperature_2m_min: PropTypes.number,
};
