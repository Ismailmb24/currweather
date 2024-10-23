import React from "react";
import "./Home.js"
import FullWeatherInfo from "./FullWeatherInfo.js";

export default function Home() {
  return (
    <section id="home" className="pages">
      <FullWeatherInfo />
    </section>
  );
}
