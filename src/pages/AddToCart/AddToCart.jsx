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


import React, { useState } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import DishSelection from '../../components/DishSelection/DishSelection';
import SelectedItems from '../../components/SelectedItems/SelectedItems';
import styles from './AddToCart.module.css';

const AddToCart = () => {
  const categories = ['Main Course', 'Dal', 'Rice', 'Breads'];
  const dishes = [
    { name: 'Sada Dosa' },
    { name: 'Naan (Butter and Garlic Option Available)' },
    { name: 'Plain Uttappam' },
    { name: 'Paratha (Aloo, Gobi, Muli, Paneer Available)' },
    { name: 'Puri' },
    { name: 'Chapati (Butter Option Available)' },
    { name: 'Roti (Butter and Garlic Option Available)' },
    { name: 'Neer Dosa' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('Breads');
  const [selectedDishes, setSelectedDishes] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleDishSelect = (dish, isSelected) => {
    setSelectedDishes(prevDishes => {
      if (isSelected) {
        return [...prevDishes, dish];
      } else {
        return prevDishes.filter(d => d.name !== dish.name);
      }
    });
  };

  return (
    <div className={styles.addtocartContainer}>
    <div className={styles.addtocart}>
    <SideBar 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategorySelect={handleCategorySelect} 
      />
      <DishSelection 
        dishes={dishes} 
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
