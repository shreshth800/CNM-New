import React from "react";
import styles from "./Card.module.css";
import orderDish from "../../assets/icons/orderDish.png";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={orderDish} alt="dish image" />
      </div>
      <div className={styles.catererInfo}>
        <h3>Dish Title</h3>
        <p>Dish Description</p>
        <p>Dish Description</p>
      </div>
    </div>
  );
};

export default Card;
