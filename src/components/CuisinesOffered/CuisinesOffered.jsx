import React from "react";
import styles from "./CuisinesOffered.module.css";

const CuisinesOffered = ({ cuisines }) => {
  return (
    <div className={styles.cuisinesOffered}>
      <h3>Cuisines Offered</h3>
      <div className={styles.cuisines}>
        {cuisines.map((cuisine, index) => (
          <div className={styles.cuisine} key={index}>
            <i className="fa-solid fa-utensils"></i>
            <span>{cuisine}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisinesOffered;
