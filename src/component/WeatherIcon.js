import React, { useState } from "react";
import { weather_code_int } from "../data/icons";

export default function WeatherIcon({style, code, is_day}) {
  const source = is_day 
  ? weather_code_int[code].icons.day 
  : weather_code_int[code].icons.night;
  
  return (
    <div className={style.w_icon_wraper}>
      <img src={source} alt="weather icon" className={style.weather_icon} />
    </div>
  );
}
