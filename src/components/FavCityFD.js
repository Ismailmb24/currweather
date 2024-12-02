import React from "react";
import NotFound from "./NotFound";
import { useParams } from "react-router";
import { useFavCities } from "../FavCitiesProvider";
import Back from "./Back";
import FullWDScreen from "./FullWDScreen";

export default function FavCityFD() {
  const { id } = useParams();
  const { fav_list_w_data } = useFavCities();

  const curr_fav_city =
    fav_list_w_data && fav_list_w_data.find((city) => city.id == id);

  if (!curr_fav_city) {
    return <NotFound />;
  }

  return (
    <section>
      <Back />
      <FullWDScreen data={curr_fav_city} />
    </section>
  );
}
