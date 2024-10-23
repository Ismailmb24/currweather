import React, { useContext } from "react";
import { MapPin } from "react-feather";
import { WeatherContext } from "../WeatherProvider";
import DateInfo from "./DateInfo";
import TempInfo from "./TempInfo";
import WeatherDesc from "./WeatherDesc";
import style from "./FullWeatherInfo.module.css";

export default function FullWeatherInfo() {
    const {data, results} = useContext(WeatherContext);
    const {current} = data;
    return (
        <section className={style.full_weather_info}>
            <div className={style.loc_info}>
                <MapPin className={style.loc_pin} />
                <span className={style.city_name}>{results[0].components.city}</span>
            </div>
            <DateInfo style={style} {...current} />
            <TempInfo style={style} {...current} />
            <WeatherDesc style={style} {...current} />
        </section>
    );
}
