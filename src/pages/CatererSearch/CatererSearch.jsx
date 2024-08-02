import React from "react";
import styles from "./CatererSearch.module.css"; // Add your CSS styles here

const CatererSearch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input 
          type="text" 
          placeholder="Search nearby caterer" 
          className={styles.searchInput} 
        />
        <button className={styles.searchButton}>
          <i className="fa fa-search" aria-hidden="true"></i> Search
        </button>
      </div>
      <div className={styles.filters}>
        <div className={styles.sortBy}>
          <label htmlFor="sort">Sort By: </label>
          <select id="sort" className={styles.sortDropdown}>
            <option value="default">Default</option>
            <option value="rating">Price: Low-High</option>
            <option value="popularity">Price: High-Low</option>
          </select>
        </div>
        <div className={styles.foodType}>
          <label htmlFor="food-type">Food Type: </label>
          <select id="food-type" className={styles.foodTypeDropdown}>
            <option value="all">All</option>
            <option value="north-indian">North Indian</option>
            <option value="south-indian">South Indian</option>
            <option value="gujarati">Gujarati</option>
            <option value="chinese">Chinese</option>
            <option value="kathiyawadi">Kathiyawadi</option>
            <option value="punjabi">Punjabi</option>
            <option value="jain">Jain</option>
            <option value="kokani">Kokani</option>
          </select>
        </div>
        <div className={styles.resultsCount}>
          Showing 1 - 10 of 0 results
        </div>
      </div>
    </div>
  );
};

export default CatererSearch;
