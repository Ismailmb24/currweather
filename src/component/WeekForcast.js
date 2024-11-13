import React, { useContext } from "react";
import { WeatherContext } from "../WeatherProvider";
import style from "./WeekForcast.module.css";
import DayForcastDetail from "./DayForcastDetail";

export default function WeekForcast({data}) {
    const {daily} = data;
    const daysForcast = [...Array(7)].map((forcast, i) => ({
        time: daily.time[i],
        temperature_2m_max: daily.temperature_2m_max[i],
        temperature_2m_min: daily.temperature_2m_min[i],
        weather_code: daily.weather_code[i]     
    }))

    return(
        <section id="7-day-frocast">
            <h1 className={style.heading}>7-Days Forcast</h1>
            <table className={style.forcast_table}>
                {
                    daysForcast.map((forcast, i) => (
                        <DayForcastDetail key={i} {...forcast} />
                    ))
                }
            </table>
        </section>
    );
}