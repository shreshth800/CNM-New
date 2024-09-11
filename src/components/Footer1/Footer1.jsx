import React from "react";
import styles from "./Footer1.module.css";

export default function Footer1() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerRight}>
        <h4>For Orders Call Us On - +91 93212 91563</h4>
        <p>One Stop Solution For All Catering Needs!</p>
      </div>
      <div className={styles.footerLeft}>
        <h4>Socials</h4>
        <p
          onClick={() =>
            window.open(
              "https://www.instagram.com/caterersnearme.in/?igsh=NHNlcnBzOXltajVr"
            )
          }
        >
          Instagram
        </p>
        <p
          onClick={() =>
            window.open("https://www.linkedin.com/company/caterersnearme/")
          }
        >
          LinkedIn
        </p>
      </div>
    </div>
  );
}