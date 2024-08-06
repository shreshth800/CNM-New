import React from "react";
import styles from "./CatererDetails.module.css";

const CatererDetails = () => {
  return (
    <div className={styles.catererDetails}>
      <h2>Caterer Details</h2>
      <ul>
        <li>Home</li>
        <li>Catering List</li>
        <li>Catering Details </li>
      </ul>
    </div>
  );
};

export default CatererDetails;
