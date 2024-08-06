import React from "react";
import styles from "./CuisinesOffered.module.css";

const cuisinesArray = Array.from({ length: 8 }, (v, i) => ({
  name: `Cuisine ${i + 1}`,
}));

const CuisinesOffered = () => {
  return (
    <div className={styles.cuisinesOffered}>
      <h3>Cuisines Offered</h3>
      <div className={styles.cuisines}>
        {cuisinesArray.map((cuisine, index) => (
          <div className={styles.cuisine} key={index}>
            <i className="fa-solid fa-utensils"></i>
            <span>{cuisine.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisinesOffered;
