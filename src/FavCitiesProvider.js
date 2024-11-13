import React, { createContext, useContext, useState } from "react";
import { useCities } from "./CitiesProvider";

const FavCitiesContext = createContext();
export const useFavCities = () => useContext(FavCitiesContext);

export default function FavCitiesProvider({children}) {
    const [fav_cities, setFavCities] = useState([]);
    
    const {cities} = useCities();
    const addFavorite = (id) => {
        const new_fav = cities.filter(city => city.id === id);
        const new_cities = [
            ...cities,
            {
                ...new_fav,
                favorite: true
            }
        ];
        setFavCities(new_cities);
    }

    const removeFavorite = (id) => {
        new_cities_list = fav_cities.filter(city => city.id !== id);
        setFavCities(new_cities_list);
    }

    console.log(fav_cities);

    return(
        <FavCitiesContext.Provider
        value={{
            fav_cities,
            addFavorite,
            removeFavorite,
        }}
        > { children } </FavCitiesContext.Provider>
    );
}