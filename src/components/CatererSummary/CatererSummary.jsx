import React from "react";
import styles from "./CatererSummary.module.css";

const CatererSummary = ({
  serviceStartDate,
  capacity,
  cateringType,
  serviceLocation,
}) => {
  return (
    <div className={styles.catererSummary}>
      <h3>Caterer Summary</h3>
      <span>In Service Since: {serviceStartDate}</span>
      <span>Capacity: {capacity}</span>
      <span>Catering Type: {cateringType}</span>
      <span>
        Experience: At least {new Date().getFullYear() - serviceStartDate}{" "}
        Year(s)
      </span>
      <span>Service Location: {serviceLocation}</span>
    </div>
  );
};

export default CatererSummary;
