import React from "react";
import styles from "./AboutUsSection.module.css";
import CatererPhoto from "../../assets/caterer_1.png";
import { useNavigate } from "react-router-dom";


const AboutUsSection = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.aboutUsSection}>
      <div className={styles.aboutUsLeft}>
        <h1>ONE STOP SOLUTION FOR ALL YOUR CATERING NEEDS</h1>
        <p>Get Started</p>
        <button className={styles.aboutUsBtn} onClick={() => navigate("/caterer")}>Find Caterer</button>
      </div>
      <div className={styles.aboutUsRight}>
        <div className={styles.aboutUsImageContainer}>
          <img
            className={styles.aboutUsImage}
            src={CatererPhoto}
            alt="Catering"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
