import React from "react";
import FullWDScreen from "./FullWDScreen";
import { useWeather } from "../WeatherProvider";
import { useParams } from "react-router";
import { useCities } from "../CitiesProvider";

export default function SearchedCityFD() {
    const {id} = useParams();
    console.log("params :", id);
    const {cities} = useCities();
    const curr_city = cities.find((city) => city.id === id);
    console.log("Curr_city: ", curr_city);

    return(
       <section>
        <FullWDScreen data={curr_city} />
       </section>
    );
}