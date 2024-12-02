import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { useCities } from "./CitiesProvider";

const FavCitiesContext = createContext();
export const useFavCities = () => useContext(FavCitiesContext);

export default function FavCitiesProvider({ children }) {
  const { fav_list } = useCities();
  const [fav_list_w_data, setFavListW] = useState([]);
  console.log("fav_list_w_data", fav_list_w_data);

  const addLoc = (new_city) => {
    setFavListW((cities) => [...cities, new_city]);
  };

  return (
    <FavCitiesContext.Provider
      value={{
        fav_list,
        fav_list_w_data,
        addLoc,
      }}
    >
      {" "}
      {children}{" "}
    </FavCitiesContext.Provider>
  );
}

FavCitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
