import React from "react";
import PropType from "prop-types";
import { MapPin } from "react-feather";
import DateInfo from "./DateInfo";
import TempInfo from "./TempInfo";
import WeatherDesc from "./WeatherDesc";
import style from "./FullWeatherInfo.module.css";
import CityName from "./CityName";

export default function FullWeatherInfo({ data }) {
  const { current, loc_name } = data;
  return (
    <section className={style.full_weather_info}>
      <CityName style={style} icon={<MapPin />} city={loc_name} />
      <DateInfo style={style} {...current} />
      <TempInfo style={style} {...current} />
      <WeatherDesc style={style} {...current} />
    </section>
  );
}

FullWeatherInfo.propTypes = {
  data: PropType.object.isRequired,
};
