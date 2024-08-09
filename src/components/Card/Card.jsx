import React from "react";
import styles from "./Card.module.css";
import orderDish from "../../assets/icons/orderDish.png";

const Card = ({ catererName, tagline, serviceStartYear }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={orderDish} alt="dish image" />
      </div>
      <div className={styles.catererInfo}>
        <h3>{catererName}</h3>
        <p>{tagline}</p>
        <p>Been in Service Since: {serviceStartYear}</p>
      </div>
    </div>
  );
};

export default Card;
