import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HourlyDetail from "./HourlyDetail";
import style from "./HourlyForcast.module.css";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

export default function HourlyForcast({ data }) {
  const [scrlX, setScrollX] = useState(0);
  const { current, hourly } = data;
  const hourlyDetails = [...Array(24)].map((detail, i) => ({
    time: hourly.time[i],
    temp: hourly.temperature_2m[i],
    weather_code: hourly.weather_code[i],
    is_day: hourly.is_day[i],
  }));
  useEffect(() => {
    const hourlies = document.getElementById("hourly-forcast");
    const hourlies_width_org = hourlies.scrollWidth; //the entire width of houlies node
    const hourlies_width_view = hourlies.offsetWidth; //the width of houlies node into view
    const d_s_left = hourlies_width_org - hourlies_width_view; //distace scroll left

    if (scrlX < d_s_left) {
      hourlies.scrollLeft = scrlX;
    }
    if (scrlX > d_s_left) {
      hourlies.scrollLeft = d_s_left;
      setScrollX(d_s_left);
    }
    if (scrlX < 0) {
      hourlies.scrollLeft = 0;
      setScrollX(0);
    }
  }, [scrlX]);

  const scroll_left = () => {
    setScrollX((distance) => distance - 100);
  };
  const scroll_right = () => {
    setScrollX((distance) => distance + 100);
  };

  return (
    <section id="full-day-forcast" className={style.full_day_forcast}>
      <h1 className={style.heading}>Full-Day Forcast</h1>
      <section className={style.h_f_section}>
        <FaLessThan onClick={scroll_left} className={style.controls} />
        <section id="hourly-forcast" className={style.hourly_forcast}>
          {hourlyDetails.map((detail, i) => (
            <HourlyDetail key={i} curr_time={current.time} {...detail} />
          ))}
        </section>
        <FaGreaterThan onClick={scroll_right} className={style.controls} />
      </section>
    </section>
  );
}

HourlyForcast.propTypes = {
  data: PropTypes.shape({
    current: PropTypes.object.isRequired,
    hourly: PropTypes.object.isRequired,
  }).isRequired,
};
