import React from "react";
import styles from "./AboutUsSection.module.css";
import { useNavigate } from "react-router-dom";
import caterer1 from '../../assets/images/caterer1.jpg'

const AboutUsSection = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
    <div className={styles.aboutUsSection}>
      <div className={styles.aboutUsLeft}>
        <h2 className={styles.primaryHeader}>ONE STOP SOLUTION FOR ALL YOUR CATERING NEEDS</h2>
        <p className={styles.description}>Discover the Ultimate Catering Experience for Every Occasion! With Our User-Friendly Platform, Easily Book Expert Caterers Who Tailor Menus to Your Unique Tastes and Dietary Needs.</p>
        <button className={styles.aboutUsBtn} onClick={() => navigate("/caterer")}>Start Now</button>
      </div>
      <div className={styles.aboutUsRight}>
        <div className={styles.aboutUsImageContainer}>
          <img
            className={styles.aboutUsImage1}
            src={caterer1}
            alt="Catering"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsSection;
