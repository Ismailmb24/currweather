import React, { createContext, useState } from "react";
import weatherData from "./data.json";
import { useFindCurrLoc } from "./custom/find-curr-loc";
import { useFetch } from "./custom/usefetch";
import PropTypes from "prop-types";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const { longitude, latitude, denied } = useFindCurrLoc();
  const url =
    longitude || latitude
      ? `https://api.open-meteo.com/v1/forecast?timezone=Africa/Lagos&latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration`
      : "";
  const { loadingFeedback, errorMsg } = useFetch(url);
  const [data] = useState(weatherData);
  const { current, current_units, houly, houly_unit, daily, daily_units } =
    data;

  return (
    <WeatherContext.Provider
      value={{
        current,
        current_units,
        houly,
        houly_unit,
        daily,
        daily_units,
        loadingFeedback,
        errorMsg,
        denied,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

WeatherProvider.propTypes = {
  children: PropTypes.object,
};
