import React from "react";
import styles from "./CatererInfo.module.css";

const CatererInfo = ({ info, serviceSpecialist }) => {
  return (
    <div className={styles.catererInfo}>
      <h2>Caterer Info</h2>
      <p>{info}</p>
      <h2>Service Specialist</h2>
      <p>{serviceSpecialist}</p>
    </div>
  );
};

export default CatererInfo;
