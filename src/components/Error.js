import React from "react";
import styles from "./Error.module.css";
import error from "../media/cross.png";
export default function ErrorFeedback() {
  return (
    <div className={`${styles.error} main`}>
      <div className={styles.icon_wraper}>
        <img src={error} alt="Error" className={styles.error_icon} />
      </div>

      <h1 className={styles.individual}>Something goes wrong</h1>
      <p className={styles.individual}>
        sorry, we can not retrieve the weather data
      </p>
      <p className={styles.individual}>
        <b>Please reload the page</b>
      </p>
    </div>
  );
}
