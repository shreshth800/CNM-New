import React from "react";
import styles from "./OrderPageDishes.module.css";
import orderDish from "../../assets/icons/orderDish.png";
import { useNavigate } from "react-router-dom";

const OrderPageDishes = ({ dishes }) => {
  const navigate = useNavigate();
  const handleDishClick = (dish) => {
    const id = dish.id;
    navigate(`/order/${id}`);
  };

  return (
    <div className={styles.orderPageDishes}>
      <h3>Provided Dishes</h3>
      <div className={styles.dishes}>
        {dishes.map((dish, index) => (
          <div
            className={styles.dish}
            key={index}
            onClick={() => handleDishClick(dish)}
          >
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={dish.imageUrl || orderDish}
                alt="dish image"
              />
            </div>
            <span className={dish.isVeg ? styles.veg : styles.nonVeg}>
              {dish.isVeg ? "Veg" : "Non-Veg"}
            </span>
            <h3>{dish.price}</h3>
            <p>{dish.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPageDishes;
