import React, { useContext } from "react";
import { MapPin, Lock, Moon } from "react-feather";
import PropTypes from "prop-types";
import TempInfo from "./TempInfo";
import { WeatherContext } from "../WeatherProvider";

export default function PagesHeader({ status }) {
  const {data} = useContext(WeatherContext);
  const {current} = data;
  console.log("data-current:", data);
  
  return (
    <header id="header" className={status ? "active" : "reserve"}>
        <div id="curr-location">
          <MapPin id="curr-loc-icon" />
          <span id="current-location">Kano</span>
        </div>
        <TempInfo {...current} />
        <div id="settings">
          <Moon />
        </div>
    </header>
  );
}

PagesHeader.propTypes = {
  temperature_2m: PropTypes.number,
  status: PropTypes.bool.isRequired,
};
