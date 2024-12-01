import React from "react";
import PropTypes from "prop-types";
import style from "./WeekForcast.module.css";
import DayForcastDetail from "./DayForcastDetail";

export default function WeekForcast({ data }) {
  const { current, daily } = data;
  const daysForcast = [...Array(7)].map((forcast, i) => ({
    time: daily.time[i],
    temperature_2m_max: daily.temperature_2m_max[i],
    temperature_2m_min: daily.temperature_2m_min[i],
    weather_code: daily.weather_code[i],
  }));

  return (
    <section id="7-day-frocast">
      <h1 className={style.heading}>7-Days Forcast</h1>
      <table className={style.forcast_table}>
        <tbody>
          {daysForcast.map((forcast, i) => (
            <DayForcastDetail key={i} curr_time={current.time} {...forcast} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

WeekForcast.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.object.isRequired,
    daily: PropTypes.object.isRequired,
  }),
};
