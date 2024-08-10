import React from "react";
import styles from "./DishSelection.module.css";

const DishSelection = ({ dishes, onDishSelect }) => {
  return (
    <div className={styles.dishSelection}>
      <h3>Choose your dish in {dishes.length > 0 ? dishes[0].menuType : ""}</h3>
      {dishes.map((dish, index) => (
        <div key={index} className={styles.dishItem}>
          <input
            type="checkbox"
            id={`dish-${index}`}
            name={dish.name}
            onChange={(e) => onDishSelect(dish, e.target.checked)}
          />
          <label htmlFor={`dish-${index}`}>{dish}</label>
        </div>
      ))}
    </div>
  );
};

export default DishSelection;
