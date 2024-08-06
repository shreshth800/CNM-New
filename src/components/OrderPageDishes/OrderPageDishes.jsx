import React from "react";
import styles from "./OrderPageDishes.module.css";
import orderDish from "../../assets/icons/orderDish.png";

const providedDishes = Array.from({ length: 8 }, (v, i) => ({
  imageUrl: orderDish,
  dishName: `Dish ${i + 1}`,
  cost: Math.floor(Math.random() * 10 + 1) * 100,
}));

const OrderPageDishes = () => {
  return (
    <div className={styles.orderPageDishes}>
      <h3>Provided Dishes</h3>
      <div className={styles.dishes}>
        {providedDishes.map((dish, index) => (
          <div className={styles.dish} key={index}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={dish.imageUrl}
                alt="dish image"
              />
            </div>
            <span className={styles.veg}>Veg</span>
            <span className={styles.nonVeg}>Non-Veg</span>
            <h3>{dish.cost}</h3>
            <p>{dish.dishName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPageDishes;
