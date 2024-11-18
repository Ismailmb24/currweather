import React, { createContext, useContext, useReducer, useState } from "react";
import weatherData from "./data.json";
import cityData from "./data/geodata.json";
import { useFindCurrLoc } from "./custom/find-curr-loc";
import { useFetch } from "./custom/usefetch";
import PropTypes from "prop-types";

const WeatherContext = createContext();
export const useWeather = () =>  useContext(WeatherContext);

export default function WeatherProvider({ children }) {
  
  const [longitude, latitude, timezone, denied ] = useFindCurrLoc();

  const url =
    longitude && latitude
      ? `https://api.open-meteo.com/v1/forecast?timezone=${timezone}&latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration`
      : "";

  const geo_url =
    longitude && latitude
      ? `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=d869cb0a1c894b068be0bc7343714e93`
      : "";

  const [weather_data, loadingFeedback, errorMsg] = useFetch(url);
  const [{results: [{components: {city}}]}] = useFetch(geo_url);
  // const [data] = useState(weatherData);  //weather testing data
  // const [{results: [curr_loc]}] = useState(cityData); //geolocation testing data
  const data = {
    ...weather_data,
    city
  }

  console.log("geocode: ", geocode);
  console.log("weather: ", weather_data);
  console.log("fake loc: ", curr_loc);
  console.log("fake weather:", weatherData);

  return (
    <WeatherContext.Provider
      value={{
        data,
        loadingFeedback,
        errorMsg,
        denied,
      }}
    > {children} </WeatherContext.Provider>
  );
}

WeatherProvider.propTypes = {
  children: PropTypes.object,
};
