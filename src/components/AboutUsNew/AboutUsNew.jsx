import React from "react";
import styles from "./AboutUsNew.module.css";
import SangeetDish from "../../assets/images/SangeetDish.jpeg";
import { useNavigate } from "react-router-dom";

const AboutUsNew = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>About Caterersnearme</h1>
      <div className={styles.aboutUsSection}>
      <div className={styles.aboutUsLeft}>
        <h1>About Us</h1>
        <p>
          Caterersnearme.in is an online platform where consumers can fulfill
          their catering requirements for events, birthday parties, functions,
          weddings, etc. We aim to become a one stop solution for all the
          catering needs of the consumers by uplifting their catering
          experience. At Caterersnearme, you can explore numerous caterers which
          could cater to your personalized expectations.
        </p>
        <button
          onClick={() => navigate("/caterer")}
          className={styles.aboutUsBtn}
        >
          Find Caterer
        </button>
      </div>
      <div className={styles.aboutUsRight}>
        <div className={styles.aboutUsImageContainer}>
          <img
            className={styles.aboutUsImage}
            src={SangeetDish}
            alt="Catering"
          />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default AboutUsNew;
