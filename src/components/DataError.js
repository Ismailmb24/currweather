import React from "react";
import PropTypes from "prop-types";
import styles from "./DataError.module.css";
import no_loc_icon from "../media/caution.png";
import no_internet from "../media/no-wifi.png";

export default function DataError({ errorData }) {
  if (errorData.code === 1)
    return (
      <div className={`${styles.fallback_sec} main`}>
        <div className={styles.icon_wraper}>
          <img
            src={no_loc_icon}
            alt="location not found"
            className={styles.loc_off_icon}
          />
        </div>
        <h1 className={styles.individual}>Allow Location Access</h1>
        <p className={styles.individual}>
          Sorry this site use your current location to provide the weather data
          of your location.
        </p>
        <p className={styles.individual}>
          <b>please reload the page and allow</b>
        </p>
      </div>
    );

  if (errorData.code === 2)
    return (
      <div className={`${styles.fallback_sec} main`}>
        <div className={styles.icon_wraper}>
          <img
            src={no_internet}
            alt="location not found"
            className={styles.loc_off_icon}
          />
        </div>
        <p className={styles.individual}>
          <b>No Internet Connection</b>
        </p>
      </div>
    );
}

DataError.propTypes = {
  errorData: PropTypes.object.isRequired,
};
