import React from "react";
import PropTypes from "prop-types";
export default function CityName({ style, icon, city }) {
  return (
    <div className={style.location}>
      <div className={style.loc_icon}>{icon}</div>
      <div className={style.loc_name}>{city}</div>
    </div>
  );
}

CityName.propTypes = {
  style: PropTypes.object.isRequired,
  icon: PropTypes.node.isRequired,
  city: PropTypes.string,
};
