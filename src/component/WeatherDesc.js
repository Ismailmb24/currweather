import React from "react";
import { weather_code_int } from "../data/icons";

export default function WeatherDesc({ style, weather_code }) {
    return <div className={style.weather_desc}>{weather_code_int[weather_code].name}</div>
}