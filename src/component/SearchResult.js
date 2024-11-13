import React from "react";
import PropType from "prop-types";
import City from "./City";
import { useCities } from "../CitiesProvider";
import { useWeather } from "../WeatherProvider";
import Loading from "./Loading";

export default function SearchResult() {
    const {cities, search_loading} = useCities();
    const {data} = useWeather(); //testing data
    if(search_loading) return <Loading />;
    
    return (
        <section >
            {
                cities.map((city, i) => (
                    <City key={i} city_data={city} />
                ))
            }
        </section>
    );
}

SearchResult.propTypes = {
    location: PropType.string,
}