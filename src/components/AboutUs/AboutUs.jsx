import React from 'react';
import styles from './AboutUs.module.css';
import aboutImage from './../../assets/images/about-img.jpg'; 

function AboutUs(){
  return (
    <section className={`${styles.aboutSection} ${styles.layout_padding}`}>
      <div className={styles.container}>
        <div className={`${styles.col_md_11} ${styles.col_lg_1} ${styles.mx_auto}`}>
          <div className={styles.headingContainer}>
            <h2>About Us</h2>
          </div>
          <div className={styles.box}>
            <div className={`${styles.col_md_7} ${styles.mx_auto}`}>
              <div className={styles.imgBox}>
                <img src={aboutImage} className={styles.boxImg} alt="About Us" />
              </div>
            </div>
            <div className={styles.detailBox}>
              <p>
                Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature, discovered the undoubtable
              </p>
              <a href="">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
