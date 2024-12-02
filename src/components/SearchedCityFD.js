import React from "react";
import FullWDScreen from "./FullWDScreen";
import { useParams } from "react-router";
import { useCities } from "../CitiesProvider";
import Back from "./Back";
import NotFound from "./NotFound";

export default function SearchedCityFD() {
  const { id } = useParams();
  const { cities } = useCities();

  const curr_city = cities && cities.find((city) => city.id == id);

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
