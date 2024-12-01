import React, { createContext, useContext } from "react";
import { useFindCurrLoc } from "./custom/find-curr-loc";
import { useFetch } from "./custom/usefetch";
import PropTypes from "prop-types";

const WeatherContext = createContext();
export const useWeather = () => useContext(WeatherContext);

export default function WeatherProvider({ children }) {
  const [longitude, latitude, timezone, denied] = useFindCurrLoc();

  const url =
    longitude && latitude
      ? `https://api.open-meteo.com/v1/forecast?timezone=${timezone}&latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration`
      : "";

  const geo_url =
    longitude && latitude
      ? `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=d869cb0a1c894b068be0bc7343714e93`
      : "";

  const [weather_data, loadingFeedback, errorMsg] = useFetch(url);
  const [geocode] = useFetch(geo_url);
  const { results } = geocode || {};
  const { components } = results?.[0] || {};
  const { city: loc_name } = components || {};
  const data = {
    ...weather_data,
    loc_name,
  };

  return (
    <WeatherContext.Provider
      value={{
        data,
        loadingFeedback,
        errorMsg,
        denied,
      }}
    >
      {" "}
      {children}{" "}
    </WeatherContext.Provider>
  );
}

WeatherProvider.propTypes = {
  children: PropTypes.object,
};
