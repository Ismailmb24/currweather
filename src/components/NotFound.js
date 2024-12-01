import React from "react";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
