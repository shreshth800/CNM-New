import React from "react";
import styles from "./CatererInfo.module.css";

const CatererInfo = ({ info, serviceSpecialist }) => {
  return (
    <div className={styles.catererInfo}>
      <h3>Caterer Info</h3>
      <p>{info}</p>
      <h3>Service Specialist</h3>
      <p>{serviceSpecialist}</p>
    </div>
  );
};

export default CatererInfo;
