import React from "react";
import styles from "./AboutUsSection.module.css";
import CatererPhoto from "../../assets/caterer_1.png";

const AboutUsSection = () => {
  return (
    <div className={styles.aboutUsSection}>
      <div className={styles.aboutUsLeft}>
        <h1>One Stop Solution For All Your Catering Needs</h1>
        <p>Get Started</p>
        <button className={styles.aboutUsBtn}>Find Caterer</button>
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
