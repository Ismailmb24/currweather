import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FaLocationCrosshairs, FaStar } from "react-icons/fa6";
import style from "./City.module.css";
import CityName from "./CityName";
import TempInfo from "./TempInfo";
import WeatherDesc from "./WeatherDesc";
import AverageTemp from "./AverageTemp";
import { useFavCities } from "../FavCitiesProvider";

function City({
    city_data
}) {
    const {
        id,
        current,
        loc_name,
        daily: {temperature_2m_max, temperature_2m_min}
    } = city_data;

    const {addFavorite} = useFavCities();

    return(
        <section className={style.city}>
            <div className={style.header}>
                <CityName style={style} 
                icon={<FaLocationCrosshairs />} 
                city={loc_name} />
            </div>
            <div className={style.city_w_info}>
                <TempInfo style={style} {...current} />
                <WeatherDesc style={style} {...current} />
                <AverageTemp 
                style={style} 
                temperature_2m_max={temperature_2m_max[0]}
                temperature_2m_min={temperature_2m_min[0]}
                />
                <div>
                    <FaStar
                    className={style.fav_icon}
                    onClick={() => addFavorite(id)}
                    />
                </div>
            </div>
        </section>
    );
}

export default City;

City.propTypes = {
    city_data: PropTypes.object,
}