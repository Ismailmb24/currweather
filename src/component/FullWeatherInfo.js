import React from "react";
import { MapPin } from "react-feather";
import DateInfo from "./DateInfo";
import TempInfo from "./TempInfo";
import WeatherDesc from "./WeatherDesc";
import style from "./FullWeatherInfo.module.css";
import CityName from "./CityName";

export default function FullWeatherInfo({data, loc_data_result}) {
    const {current} = data;
    return (
        <section className={style.full_weather_info}>
            <CityName style={style} 
            icon={<MapPin />} 
            city={loc_data_result[0].components.city} />
            <DateInfo style={style} {...current} />
            <TempInfo style={style} {...current} />
            <WeatherDesc style={style} {...current} />
        </section>
    );
}
