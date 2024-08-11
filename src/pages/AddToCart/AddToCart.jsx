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
  const [storageObject, setStorageObject] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const menuResponse = await fetch("http://3.6.41.54//api/menus/");
        const menuData = await menuResponse.json();

        const categoryNames = menuData.data.map((section) => section.name);
        setCategories(categoryNames);
        setAllDishes(menuData.data);

        const initialStorageObject = categoryNames.map((category) => ({
          name: category,
          dishes: [],
        }));
        setStorageObject(initialStorageObject);

        if (categoryNames.length > 0) {
          setSelectedCategory(categoryNames[0]);
        }

        const dishResponse = await fetch(
          "http://3.6.41.54/api/caterer/666095d61be89c4a23318324"
        );
        const dishData = await dishResponse.json();

        const specificDish = dishData.dishes.find(
          (dish) => dish.id === "669d1af62082e0d75fc87c13"
        );

        if (specificDish) {
          const availableCategories = specificDish.items.map(
            (item) => item.item
          );

          const filteredStorageObject = initialStorageObject.filter(
            (category) => availableCategories.includes(category.name)
          );
          setStorageObject(filteredStorageObject);

          setCategories(availableCategories);
          if (availableCategories.length > 0) {
            setSelectedCategory(availableCategories[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    const categoryData = storageObject.find((item) => item.name === category);
    setSelectedDishes(categoryData ? categoryData.dishes : []);
  };

  const handleDishSelect = (dish, isSelected) => {
    setStorageObject((prevStorageObject) => {
      return prevStorageObject.map((categoryData) => {
        if (categoryData.name === selectedCategory) {
          const updatedDishes = isSelected
            ? [...categoryData.dishes, dish]
            : categoryData.dishes.filter((d) => d !== dish);

          return { ...categoryData, dishes: updatedDishes };
        }
        return categoryData;
      });
    });
  };

  useEffect(() => {
    const categoryData = storageObject.find(
      (item) => item.name === selectedCategory
    );
    setSelectedDishes(categoryData ? categoryData.dishes : []);

    localStorage.setItem("cartData", JSON.stringify(storageObject));
  }, [storageObject, selectedCategory]);

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
          selectedItems={selectedDishes}
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
