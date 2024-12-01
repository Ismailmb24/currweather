import React from "react";
import PropType from "prop-types";
import style from "./searchResult.module.css";
import City from "./City";
import { useCities } from "../CitiesProvider";
import Loading from "./Loading";
import no_result from "../media/no-result.png";
import search_icon from "../media/search-2.png";
import Fetch from "./Fetch";

export default function SearchResult() {
  const { result_loc, addCity, search_loading, search_query } = useCities();
  console.log("citieeeeeees: ", result_loc);

  if (search_loading) return <Loading />;

  if (!result_loc)
    return (
      //if the search result is undefined, means user has searched but no result found
      <div className={style.search_fallback_sec}>
        <img className={style.s_icon} src={no_result} alt="no result" />
        <h1>No Result Found</h1>
      </div>
    );

  if (!result_loc.length)
    return (
      //if the search result is empty array means user hasn't searched yet
      <div className={style.search_fallback_sec}>
        <img className={style.s_icon} src={search_icon} alt="search" />
        <h1>Search Locations</h1>
      </div>
    );

  return (
    <section>
      <h1 className={style.result_head}>Search Result for {search_query}</h1>
      {result_loc.map((loc, i) => {
        const { id, name, admin1, country, timezone, longitude, latitude } =
          loc;
        const real_timezone = timezone ? timezone : "America/New_York";
        const url = `https://api.open-meteo.com/v1/forecast?timezone=${real_timezone}&latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration`;
        return (
          <Fetch
            key={i}
            url={url}
            renderSuccess={({ data }) => (
              <City
                key={i}
                data={data}
                set_base={addCity}
                id={id}
                name={`${name} ${admin1 || ""} ${country || ""}`}
              />
            )}
          />
        );
      })}
    </section>
  );
}

SearchResult.propTypes = {
  location: PropType.string,
};
