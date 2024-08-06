import React from "react";
import styles from "./CatererSummary.module.css";

const CatererSummary = () => {
  return (
    <div className={styles.catererSummary}>
      <h3>Caterer Summary</h3>
      <span>In Service Since: 2022</span>
      <span>Capacity: 10000 </span>
      <span>Catering Type: veg,nonVeg </span>
      <span>Experience: At least 5 Year(s) </span>
      <span>Service location: Goregaon, Mumbai, India</span>
    </div>
  );
};

export default CatererSummary;
