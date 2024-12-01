import React from "react";
import "./Home.css";
import { useWeather } from "../WeatherProvider";
import FullWDScreen from "./FullWDScreen.js";

export default function Home() {
  const { data } = useWeather();
  return (
    <section id="home" className="pages">
      <FullWDScreen data={data} />
    </section>
  );
}
