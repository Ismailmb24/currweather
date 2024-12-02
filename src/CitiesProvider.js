import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CitiesContext = createContext();
export const useCities = () => useContext(CitiesContext);

const setFavList = (data = []) => {
  localStorage.setItem("fav_list", JSON.stringify(data));
};
const getFavList = () => JSON.parse(localStorage.getItem("fav_list"));

export default function CitiesProvider({ children }) {
  const [cities, setCities] = useState(); //list of fetched result locations weather datas
  const [fav_list, setFavLoc] = useState(getFavList() ? getFavList() : []);
  const [result_loc, setResultLoc] = useState([]); //list of fetch result locations
  const [search_loading, setSearchL] = useState(false);
  const [search_query, setSearchQ] = useState(); //search text

  const addCity = (new_city) => {
    setCities((cities) => [...cities, new_city]);
  };

  const resetCities = () => {
    setCities([]);
  }; //resetting previous fetch result cities

  const addFavLoc = (id) => {
    const fav_loc_list = fav_list;
    const target_loc = fav_loc_list.findIndex((loc) => loc.id === id);

    //if the location is not in the favorite list
    if (target_loc === -1) {
      //this block of code add the location to favorite list if it is not in the list
      const new_fav_loc = result_loc.filter((loc) => loc.id === id);
      const new_fav_loc_list = [...fav_loc_list, ...new_fav_loc];
      setFavList(new_fav_loc_list); //store favorite location list locally
      setFavLoc((favs) => [...favs, ...new_fav_loc]); //set favorite location list in state
    } else {
      //this block of code remove the location that is already in the favorite list
      const new_fav_loc_list = fav_loc_list.filter((loc) => loc.id !== id);
      setFavList(new_fav_loc_list);
      setFavLoc(new_fav_loc_list);
    }
  };

  const isFavLoc = (id) => fav_list.some((loc) => loc.id === id);

  const fetchData = async (url) => {
    try {
      if (!url) return;
      setSearchL(true);
      const res = await fetch(url);
      const data = await res.json();
      setSearchL(false);
      return data;
    } catch (error) {
      console.log("ERROR: ", error);
      setSearchL(false);
    }
  };

  const onSearch = async (search_query) => {
    try {
      resetCities();
      setSearchQ(search_query);
      const url = search_query
        ? `https://geocoding-api.open-meteo.com/v1/search?name=${search_query}&count=10&language=en&format=json`
        : "";
      const data = await fetchData(url);
      const { results } = data;
      setResultLoc(results);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        addCity,
        result_loc,
        onSearch,
        search_loading,
        fav_list,
        addFavLoc,
        search_query,
        isFavLoc,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

CitiesProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
