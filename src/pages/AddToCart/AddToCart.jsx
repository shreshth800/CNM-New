// import React from 'react'
// import {Sidebar} from '../../components/SideBar/SideBar'
// import { SelectedItems } from '../../components/SelectedItems/SelectedItems'
// import { DishSelection } from '../../components/DishSelection/DishSelection'
// import styles from './AddToCart.module.css'

// export const AddToCart = () => {
//   return (
//     <>
//         <div className={styles.AddToCart}>
//             <Sidebar />
//             <SelectedItems />
//             <DishSelection />

//         </div>
//     </>
//   )
// }

// export default AddToCart;

import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import DishSelection from "../../components/DishSelection/DishSelection";
import SelectedItems from "../../components/SelectedItems/SelectedItems";
import styles from "./AddToCart.module.css";

const AddToCart = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [allDishes, setAllDishes] = useState([]);

  useEffect(() => {
    // First API call to fetch all categories
    fetch("http://3.6.41.54//api/menus/")
      .then((response) => response.json())
      .then((data) => {
        const categoryNames = data.data.map((section) => section.name);
        setCategories(categoryNames);
        setAllDishes(data.data);

        if (categoryNames.length > 0) {
          setSelectedCategory(categoryNames[0]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Second API call to fetch the specific dish data
    fetch("http://3.6.41.54/api/caterer/666095d61be89c4a23318324")
      .then((response) => response.json())
      .then((data) => {
        // Find the specific dish by ID
        const specificDish = data.dishes.find(
          (dish) => dish.id === "669d1af62082e0d75fc87c13"
        );

        if (specificDish) {
          const availableItems = specificDish.items.map((item) => item.item);
          setCategories(availableItems);
          if (availableItems.length > 0) {
            setSelectedCategory(availableItems[0]);
          }
        }
      })
      .catch((error) => console.error("Error fetching dish data:", error));
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleDishSelect = (dish, isSelected) => {
    setSelectedDishes((prevDishes) => {
      if (isSelected) {
        return [...prevDishes, dish];
      } else {
        return prevDishes.filter((d) => d.name !== dish.name);
      }
    });
  };

  const filteredDishes =
    allDishes
      .find((section) => section.name === selectedCategory)
      ?.items.map((item) => item.items)
      .flat() || [];

  return (
    <div className={styles.addtocartContainer}>
      <div className={styles.addtocart}>
        <SideBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
        <DishSelection
          dishes={filteredDishes}
          onDishSelect={handleDishSelect}
        />
        <SelectedItems selectedDishes={selectedDishes} />
      </div>
      <div className={styles.previewOrderButton}>
        <button>Preview Order</button>
      </div>
    </div>
  );
};

export default AddToCart;
