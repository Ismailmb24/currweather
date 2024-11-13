import React from "react";
import FullWeatherInfo from "./FullWeatherInfo";
import WeatherDetails from "./WeatherDetails";
import HourlyForcast from "./HourlyForcast";
import WeekForcast from "./WeekForcast";

export default function FullWDScreen({data, loc_data}) {
    return(
        <section>
            <FullWeatherInfo data={data} loc_data_result={loc_data} />
            <WeatherDetails data={data} />
            <HourlyForcast data={data} />
            <WeekForcast data={data} />
        </section>
    )
}