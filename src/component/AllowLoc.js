import React from "react";
import styles from "./AllowLoc.module.css";
export default function AllowLoc() {
  return (
    <div className={styles.allow_loc}>
      <div className={styles.svg_wraper}>
        <img
          src="svg/location-off.svg"
          alt="location not found"
          className={styles.loc_off_svg}
        />
      </div>
      <h1 className={styles.individual}>Allow Location Access</h1>
      <p className={styles.individual}>
        Sorry this site use your current location to provide the weather data of
        your location.
      </p>
      <p className={styles.individual}>
        <b>please reload the page and allow</b>
      </p>
    </div>
  );
}
