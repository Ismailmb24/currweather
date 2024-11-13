import React from "react";
import { useReadableTime } from "../custom/useReadableTime";
import style from "./DayForcastDetail.module.css";
import WeatherIcon from "./WeatherIcon";
import WeatherDesc from "./WeatherDesc";
import AverageTemp from "./AverageTemp";

export default function DayForcastDetail({
    time,
    weather_code,
    temperature_2m_max, 
    temperature_2m_min
}) {
    const curr_date = new Date();
    const {day_name, day} = useReadableTime(time);
    const max_temp = Math.round(temperature_2m_max);
    const min_temp = Math.round(temperature_2m_min);

    return(
        <tr className={style.day_forcast_detail}>
            <td>{curr_date.getDay() === day ? "Today" : day_name}</td>
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