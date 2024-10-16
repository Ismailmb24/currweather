import React from "react";
import styles from "./Error.module.css";
export default function ErrorFeedback() {
  return (
    <div className={styles.error}>
      <div className={styles.svg_wraper}>
        <img src="svg/error.svg" alt="Error" className={styles.error_svg} />
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
