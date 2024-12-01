import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { FaLocationCrosshairs, FaStar } from "react-icons/fa6";
import style from "./City.module.css";
import CityName from "./CityName";
import TempInfo from "./TempInfo";
import WeatherDesc from "./WeatherDesc";
import AverageTemp from "./AverageTemp";
import { useLocation, useNavigate } from "react-router";
import { useCities } from "../CitiesProvider";

function City({ data, id, name, set_base = (f) => f }) {
  const loc = useLocation();
  const loc_data = {
    ...data,
    id,
    loc_name: name,
  };
  const {
    current,
    loc_name,
    daily: { temperature_2m_max, temperature_2m_min },
  } = loc_data;

  const { addFavLoc, isFavLoc } = useCities();
  const navigate = useNavigate();

  useEffect(() => {
    set_base(loc_data);
    console.log("loc_data: ", loc_data);
  }, []);

  const handleClick = () => {
    navigate(`${loc.pathname}/${id}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <section
      className={style.city}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={style.header}>
        <CityName
          style={style}
          icon={<FaLocationCrosshairs />}
          city={loc_name}
        />
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
            color={isFavLoc(id) ? "#ff4810" : "gray"}
            onClick={(e) => {
              e.stopPropagation();
              addFavLoc(id);
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(City);

City.propTypes = {
  data: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  set_base: PropTypes.func,
};
