import React from "react";
import FullWDScreen from "./FullWDScreen";
import { useLocation, useParams } from "react-router";
import { useCities } from "../CitiesProvider";
import { useFavCities } from "../FavCitiesProvider";
import Back from "./Back";
import NotFound from "./NotFound";

export default function SearchedCityFD() {
  let curr_city;
  const { id } = useParams();
  const loc = useLocation();
  const { cities } = useCities();
  const { fav_list_w_data } = useFavCities();

  if (loc.pathname.includes("/search")) {
    curr_city = cities && cities.find((city) => city.id == id);
  } else {
    curr_city = cities && fav_list_w_data.find((city) => city.id == id);
  }

  if (!curr_city) {
    return <NotFound />;
  }

  return (
    <section>
      <Back />
      <FullWDScreen data={curr_city} />
    </section>
  );
}
