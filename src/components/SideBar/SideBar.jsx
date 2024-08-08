import React from 'react';
import styles from './SideBar.module.css';

const Sidebar = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className={styles.sidebar}>
      <h3>Menu for 200 Dish</h3>
      <ul>
        {categories.map((category, index) => (
          <li 
            key={index} 
            className={selectedCategory === category ? styles.selected : ''} 
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
