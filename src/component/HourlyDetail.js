import React from "react";
import PropTypes from "prop-types";
import style from "./HourlyDetail.module.css";
import { useReadableTime } from "../custom/useReadableTime";
import TempInfo from "./TempInfo";

export default function HourlyDetail({temp, curr_time, time, weather_code, is_day}) {
    const {hours, hours_12, minute_0, format} = useReadableTime(time);
    const {hours: curr_hours} = useReadableTime(curr_time);

    return(
        <div className={style.hourly}>
            <div className={style.time}>
                {
                    curr_hours == hours
                    ? "Now"
                    : `${hours_12}:${minute_0}${format.toLowerCase()}`
                }
            </div>
            <TempInfo 
            style={style} 
            temperature_2m={temp}
            weather_code={weather_code} 
            is_day={is_day} />
        </div>
    );
}

HourlyDetail.propTypes = {
    temp: PropTypes.number,
    time: PropTypes.string,
    weather_code: PropTypes.number,
    is_day: PropTypes.number,
}
