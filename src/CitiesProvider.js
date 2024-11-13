import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const CitiesContext = createContext();
export const useCities =() => useContext(CitiesContext);

export default function CitiesProvider({children}) {
    const [cities, setCities] = useState([]);
    const [search_loading, setSearchL] = useState(false);
    console.log("cities: ", cities);

    const addCity = new_city => {
        setCities(cities => ([
            ...cities,
            {
                ...new_city,
                id: v4(), 
            }
        ]));
    };
    const resetCities = () => {setCities([])};

    const fetchData = async url => {
        try {
            if (!url) return;
            setSearchL(true);
            const res = await fetch(url);
            const data = await res.json();
            setSearchL(false);
            console.log("fetched data: ", data);
            
            return data;
        } catch(error) {
            console.log("ERROR: ", error);
        }
    };

    const onSearch = async search_query => {
        resetCities();

        const url = search_query
        ? `https://api.opencagedata.com/geocode/v1/json?q=${search_query}&key=d869cb0a1c894b068be0bc7343714e93`
        : "";
        const data = await fetchData(url);
        console.log(data);
        const {results} = data
        console.log(results);
        
        results.map(async result => {
            const {annotations: {timezone}, formatted, geometry: {lat, lng}} = result;
            const url = `https://api.open-meteo.com/v1/forecast?timezone=${timezone.name}&latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration`;
            const data = await fetchData(url);
            const new_city = {
                ...data,
                loc_name: formatted,
            }
            addCity(new_city);
        });
    }
    
    return(
        <CitiesContext.Provider 
        value = {{
            cities,
            onSearch,
            search_loading
        }}
        > { children } </CitiesContext.Provider>
    );
}

CitiesProvider.propTypes = {
    children: PropTypes.object.isRequired,
}