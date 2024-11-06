import React from "react";
import "./Home.css";
import FullWeatherInfo from "./FullWeatherInfo.js";
import WeatherDetails from "./WeatherDetails.js";
import HourlyForcast from "./HourlyForcast.js";
import WeekForcast from "./WeekForcast.js";

export default function Home() {
  return (
    <section id="home" className="pages">
      <FullWeatherInfo />
      <WeatherDetails />
      <HourlyForcast />
      <WeekForcast />
    </section>
  );
}
