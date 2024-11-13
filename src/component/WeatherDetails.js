import React, { useContext } from "react";
import Detail from "./Detail";
import style from "./WeatherDetails.module.css";
import { Droplet, Wind, Sunrise, Sunset } from "react-feather";
import { useReadableTime } from "../custom/useReadableTime";

export default function WeatherDetails({data}) {
    const {current, daily} = data;
    const {relative_humidity_2m, wind_speed_10m} = current;
    const {sunrise, sunset} = daily;
    const {
        hours_12: rise_hours, 
        minute_0: rise_minutes, 
        format: rise_format
    } = useReadableTime(sunrise[0]);
    const {
        hours_12: set_hours, 
        minute_0: set_minutes, 
        format: set_format
    } = useReadableTime(sunset[0]);

    return (
        <section className={style.more_detail}>
            <Detail 
            icon={
                <Droplet size={35} className={style.icon} />
            }
            icon2={
                <Droplet size={45}  className={style.icon2}/>
            }
            title={"Humidity"}
            value={relative_humidity_2m}
            unit="%"
            />
            <Detail 
            icon={<Sunrise size={35} className={style.icon} />}
            icon2={
                <Sunrise size={45}  className={style.icon2}/>
            }
            title={"Sunrise"}
            value={`${rise_hours}:${rise_minutes}`}
            unit={rise_format}
            />
            <Detail 
            icon={<Sunset size={35} className={style.icon} />}
            icon2={
                <Sunset size={45}  className={style.icon2}/>
            }
            title={"Sunset"}
            value={`${set_hours}:${set_minutes}`}
            unit={set_format}
            />  
            <Detail 
            icon={<Wind size={35} className={style.icon} />}
            icon2={
                <Wind size={45}  className={style.icon2}/>
            }
            title={"Wind"}
            value={wind_speed_10m}
            unit="Km/h"
            />
        </section>
    );
}