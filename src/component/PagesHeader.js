import React from "react";
import { FaGear, FaLocationPin } from "react-icons/fa6";
import PropTypes from "prop-types";
import { useFixHeader } from "../custom/fix-header";

export default function PagesHeader({ weather }) {
  const status = useFixHeader();
  return (
    <header id="header" className={status ? "active" : ""}>
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
          <span id="curr-temp">{weather}</span>
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
  weather: PropTypes.number,
};
