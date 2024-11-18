import React from "react";
import { useReadableTime } from "../custom/useReadableTime";
import style from "./DayForcastDetail.module.css";
import WeatherIcon from "./WeatherIcon";
import WeatherDesc from "./WeatherDesc";
import AverageTemp from "./AverageTemp";
import { useWeather } from "../WeatherProvider";

export default function DayForcastDetail({
    curr_time,
    time,
    weather_code,
    temperature_2m_max, 
    temperature_2m_min
}) {
    const {day: curr_day} = useReadableTime(curr_time);
    const {day_name, day} = useReadableTime(time);

    return(
        <tr className={style.day_forcast_detail}>
            <td>{curr_day === day ? "Today" : day_name}</td>
            <td className={style.weather_code_desc}>
                <WeatherIcon style={style} weather_code={weather_code} is_day={1} />
                <WeatherDesc style={style} weather_code={weather_code} />
            </td>
            <td>
                <AverageTemp 
                style={style}
                temperature_2m_max={temperature_2m_max}
                temperature_2m_min={temperature_2m_min}
                />
            </td>
        </tr>
    );
}