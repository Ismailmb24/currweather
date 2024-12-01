import React from "react";
import style from "./favLocList.module.css";
import City from "./City";
import Loading from "./Loading";
import fav_icon from "../media/star.png";
import { useFavCities } from "../FavCitiesProvider";
import Fetch from "./Fetch";

export default function FavLocList() {
  const { fav_list, addLoc, search_loading } = useFavCities();
  if (search_loading) return <Loading />;
  if (!fav_list.length)
    return (
      <div className={style.fav_icon}>
        <img className={style.icon} src={fav_icon} alt="favorite" />
        <h1>Favorite Locations Here</h1>
      </div>
    );
  return (
    <section>
      <h1 className={style.fav_head}>Favorite Locations</h1>
      {fav_list.map((fav_loc_data, i) => {
        const { id, name, admin1, country, timezone, longitude, latitude } =
          fav_loc_data;

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
                set_base={addLoc}
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
