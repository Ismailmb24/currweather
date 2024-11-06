import React, { useContext } from "react";
import Detail from "./Detail";
import style from "./WeatherDetails.module.css";
import { WeatherContext } from "../WeatherProvider";
import { Droplet, Wind, Sunrise, Sunset } from "react-feather";
import { useReadableTime } from "../custom/useReadableTime";

export default function WeatherDetails() {
    const {data} = useContext(WeatherContext);
    const {current, daily} = data;
    const {relative_humidity_2m, wind_speed_10m} = current;
    const {sunrise, sunset} = daily;
    const  int_sunrise = useReadableTime(sunrise[0]);
    const int_sunset = useReadableTime(sunset[0]);

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
            value={`${int_sunrise.hours_12}:${int_sunrise.minute_0}`}
            unit={int_sunrise.format}
            />
            <Detail 
            icon={<Sunset size={35} className={style.icon} />}
            icon2={
                <Sunset size={45}  className={style.icon2}/>
            }
            title={"Sunset"}
            value={`${int_sunset.hours_12}:${int_sunset.minute_0}`}
            unit={int_sunset.format}
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