import React, { useState, useEffect, useContext } from "react";
import SideBar from "../../components/SideBar/SideBar";
import DishSelection from "../../components/DishSelection/DishSelection";
import Accordion from "../../components/Accordion/Accordion";
import styles from "./AddToCart.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { CatererContext } from "../../App";

const AddToCart = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [allDishes, setAllDishes] = useState([]);
  const [storageObject, setStorageObject] = useState([]);
  const [initialState, setInitialState] = useState();
  const { catererId } = useContext(CatererContext);
  const { dishId } = useParams();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const menuResponse = await fetch("http://3.6.41.54//api/menus/");
        const menuData = await menuResponse.json();
        console.log(menuData);

        const categoryNames = menuData.data.map((section) => section.name);
        setAllDishes(menuData.data);

        const initialStorageObject = categoryNames.map((category) => ({
          name: category,
          dishes: [],
        }));

        const dishResponse = await fetch(
          `http://3.6.41.54/api/caterer/${catererId}`
        );
        const dishData = await dishResponse.json();
        console.log(dishData);
        const specificDish = dishData.dishes.find((dish) => dish.id === dishId);
        console.log(specificDish);

        if (specificDish) {
          const availableCategories = specificDish.items.map(
            (item) => item.item
          );
          const finalStorageObject = specificDish.items.map((item) => {
            const newItem = { ...item, addon: 0, name: item.item, dishes: [] };
            delete newItem.item;
            return newItem;
          });
          setInitialState(finalStorageObject);
          setStorageObject(finalStorageObject);

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
          if (
            isSelected &&
            categoryData.dishes.length < categoryData.quantity
          ) {
            const updatedDishes = [...categoryData.dishes, dish];
            return { ...categoryData, dishes: updatedDishes };
          } else if (!isSelected) {
            const updatedDishes = categoryData.dishes.filter((d) => d !== dish);
            return { ...categoryData, dishes: updatedDishes };
          }
        }
        return categoryData;
      });
    });
  };
  function handlePreview() {
    const totalQuantity = storageObject.map((item) => {
      return item.quantity === item.dishes.length ? true : false;
    });
    if (totalQuantity.includes(false)) {
      alert("select the proper number of items");
    } else {
      navigate("/bill");
    }
  }

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
          storageObject={storageObject}
          setStorageObject={setStorageObject}
          initialState={initialState}
        />
        <DishSelection
          dishes={filteredDishes}
          selectedItems={selectedDishes}
          onDishSelect={handleDishSelect}
          storageObject={storageObject}
          selectedCategory={selectedCategory}
        />
        <div className={styles.accordionContainer}>
          <Accordion data={storageObject} />
        </div>
      </div>
      <div className={styles.previewOrderButton}>
        <button
          onClick={() => {
            handlePreview();
          }}
        >
          Preview Order
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
