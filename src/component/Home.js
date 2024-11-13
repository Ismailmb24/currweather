import React from "react";
import "./Home.css";
import { useWeather } from "../WeatherProvider";
import FullWDScreen from "./FullWDScreen.js";

export default function Home() {
  const {data, results} = useWeather();
  return (
    <section id="home" className="pages">
      <FullWDScreen data={data} loc_data={results} />
    </section>
  );
}
