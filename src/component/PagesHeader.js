import React from "react";
import { FaGear, FaLocationPin } from "react-icons/fa6";
import PropTypes from "prop-types";

export default function PagesHeader({ temperature_2m, status }) {
  return (
    <header id="header" className={status ? "active" : "reserve"}>
      <div id="logo-wraper">
        <img src="img/logo.png" alt="logo" id="logo" />
      </div>
      <section id="more">
        <div id="curr-location">
          <div id="curr-location-icon">
            <FaLocationPin />
          </div>
          <div id="current-location">Kano</div>
        </div>
        <div id="curr-weather-info">
          <span id="curr-temp">{temperature_2m}</span>
          <span id="weather-icon"></span>
        </div>
        <div id="settings">
          <FaGear />
        </div>
      </section>
    </header>
  );
}

PagesHeader.propTypes = {
  temperature_2m: PropTypes.number,
  status: PropTypes.bool.isRequired,
};
