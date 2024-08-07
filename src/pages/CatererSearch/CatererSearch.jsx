// import React from "react";
// import styles from "./CatererSearch.module.css"; // Add your CSS styles here

// const CatererSearch = () => {
//   return (
    
//     <div className={styles.container}>
//       <div className={styles.searchBar}>
//         <input 
//           type="text" 
//           placeholder="Search nearby caterer" 
//           className={styles.searchInput} 
//         />
//         <button className={styles.searchButton}>
//           <i className="fa fa-search" aria-hidden="true"></i> Search
//         </button>
//       </div>
//       <div className={styles.filters}>
//         <div className={styles.sortBy}>
//           <label htmlFor="sort">Sort By: </label>
//           <select id="sort" className={styles.sortDropdown}>
//             <option value="default">Default</option>
//             <option value="rating">Price: Low-High</option>
//             <option value="popularity">Price: High-Low</option>
//           </select>
//         </div>
//         <div className={styles.foodType}>
//           <label htmlFor="food-type">Food Type: </label>
//           <select id="food-type" className={styles.foodTypeDropdown}>
//             <option value="all">All</option>
//             <option value="north-indian">North Indian</option>
//             <option value="south-indian">South Indian</option>
//             <option value="gujarati">Gujarati</option>
//             <option value="chinese">Chinese</option>
//             <option value="kathiyawadi">Kathiyawadi</option>
//             <option value="punjabi">Punjabi</option>
//             <option value="jain">Jain</option>
//             <option value="kokani">Kokani</option>
//           </select>
//         </div>
//         <div className={styles.resultsCount}>
//           Showing 1 - 10 of 0 results
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CatererSearch;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styles from "./CatererSearch.module.css";

// const CatererSearch = () => {
//   const [caterers, setCaterers] = useState([]);
//   const [filteredCaterers, setFilteredCaterers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOrder, setSortOrder] = useState("default");
//   const [foodType, setFoodType] = useState("all");

//   useEffect(() => {
//     const fetchCaterers = async () => {
//       try {
//         const response = await axios.get("http://3.6.41.54/api/caterer");
//         if (Array.isArray(response.data)) {
//           setCaterers(response.data);
//           setFilteredCaterers(response.data); // Set initial filtered caterers
//         } else {
//           console.error("API response is not an array:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching caterers data:", error);
//       }
//     };
//     fetchCaterers();
//   }, []);

//   useEffect(() => {
//     handleFilterAndSort();
//   }, [searchQuery, sortOrder, foodType, caterers]);

//   const handleFilterAndSort = () => {
//     let filtered = [...caterers];

//     if (searchQuery) {
//       filtered = filtered.filter(caterer =>
//         caterer.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (foodType !== "all") {
//       filtered = filtered.filter(caterer =>
//         caterer.cuisinesOffered.includes(foodType)
//       );
//     }

//     if (sortOrder === "rating") {
//       filtered.sort((a, b) => a.minPrice - b.minPrice);
//     } else if (sortOrder === "popularity") {
//       filtered.sort((a, b) => b.minPrice - a.minPrice);
//     }

//     setFilteredCaterers(filtered);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.searchBar}>
//         <input 
//           type="text" 
//           placeholder="Search nearby caterer" 
//           className={styles.searchInput} 
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className={styles.searchButton} onClick={handleFilterAndSort}>
//           <i className="fa fa-search" aria-hidden="true"></i> Search
//         </button>
//       </div>
//       <div className={styles.filters}>
//         <div className={styles.sortBy}>
//           <label htmlFor="sort">Sort By: </label>
//           <select id="sort" className={styles.sortDropdown} value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
//             <option value="default">Default</option>
//             <option value="rating">Price: Low-High</option>
//             <option value="popularity">Price: High-Low</option>
//           </select>
//         </div>
//         <div className={styles.foodType}>
//           <label htmlFor="food-type">Food Type: </label>
//           <select id="food-type" className={styles.foodTypeDropdown} value={foodType} onChange={(e) => setFoodType(e.target.value)}>
//             <option value="all">All</option>
//             <option value="north-indian">North Indian</option>
//             <option value="south-indian">South Indian</option>
//             <option value="gujarati">Gujarati</option>
//             <option value="chinese">Chinese</option>
//             <option value="kathiyawadi">Kathiyawadi</option>
//             <option value="punjabi">Punjabi</option>
//             <option value="jain">Jain</option>
//             <option value="kokani">Kokani</option>
//           </select>
//         </div>
//         <div className={styles.resultsCount}>
//           Showing 1 - {filteredCaterers.length} of {filteredCaterers.length} results
//         </div>
//       </div>
//       <div className={styles.catererList}>
//         {Array.isArray(filteredCaterers) && filteredCaterers.map((caterer) => (
//           <div key={caterer.id} className={styles.catererCard}>
//             <div className={styles.catererDetails}>
//               <h3>{caterer.name}</h3>
//               <p>Location: {caterer.serviceLocation.map(location => location.location).join(", ")}</p>
//               <p>Specialties: {caterer.specialistIn}</p>
//               <p>Food Types: {caterer.cuisinesOffered.join(", ")}</p>
//               <p>Price: ₹{caterer.minPrice} - ₹{caterer.maxPrice}</p>
//             </div>
//             <button className={styles.detailsButton}>Details</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CatererSearch;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styles from "./CatererSearch.module.css";
// import menuImage from "../../assets/caterer/menu1.jpeg";  // Replace with your image path

// const CatererSearch = () => {
//   const [caterers, setCaterers] = useState([]);
//   const [filteredCaterers, setFilteredCaterers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOrder, setSortOrder] = useState("default");
//   const [foodType, setFoodType] = useState("all");

//   useEffect(() => {
//     const fetchCaterers = async () => {
//       try {
//         const response = await axios.get("http://3.6.41.54/api/caterer");
//         if (Array.isArray(response.data.data)) {
//           console.log(response.data.data);  // Log the data here
//           setCaterers(response.data.data);
//           setFilteredCaterers(response.data.data); // Set initial filtered caterers
//         } else {
//           console.error("API response is not an array:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching caterers data:", error);
//       }
//     };
//     fetchCaterers();
//   }, []);

//   useEffect(() => {
//     handleFilterAndSort();
//   }, [searchQuery, sortOrder, foodType, caterers]);

//   const handleFilterAndSort = () => {
//     let filtered = [...caterers];

//     if (searchQuery) {
//       filtered = filtered.filter(caterer =>
//         caterer.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (foodType !== "all") {
//       filtered = filtered.filter(caterer =>
//         caterer.cuisinesOffered.some(cuisine => cuisine.toLowerCase() === foodType.toLowerCase())
//       );
//     }

//     if (sortOrder === "rating") {
//       filtered.sort((a, b) => a.minPrice - b.minPrice);
//     } else if (sortOrder === "popularity") {
//       filtered.sort((a, b) => b.minPrice - a.minPrice);
//     }

//     setFilteredCaterers(filtered);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.searchBar}>
//         <input 
//           type="text" 
//           placeholder="Search nearby caterer" 
//           className={styles.searchInput} 
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className={styles.searchButton} onClick={handleFilterAndSort}>
//           <i className="fa fa-search" aria-hidden="true"></i> Search
//         </button>
//       </div>
//       <div className={styles.filters}>
//         <div className={`${styles.filterItem} ${styles.sortBy}`}>
//           <label htmlFor="sort">Sort By: </label>
//           <select id="sort" className={styles.filterDropdown} value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
//             <option value="default">Default</option>
//             <option value="rating">Price: Low-High</option>
//             <option value="popularity">Price: High-Low</option>
//           </select>
//         </div>
//         <div className={`${styles.filterItem} ${styles.foodType}`}>
//           <label htmlFor="food-type">Food Type: </label>
//           <select id="food-type" className={styles.filterDropdown} value={foodType} onChange={(e) => setFoodType(e.target.value)}>
//             <option value="all">All</option>
//             <option value="north-indian">North Indian</option>
//             <option value="south-indian">South Indian</option>
//             <option value="gujarati">Gujarati</option>
//             <option value="chinese">Chinese</option>
//             <option value="kathiyawadi">Kathiyawadi</option>
//             <option value="punjabi">Punjabi</option>
//             <option value="jain">Jain</option>
//             <option value="kokani">Kokani</option>
//           </select>
//         </div>
//         <div className={styles.resultsCount}>
//           Showing 1 - {filteredCaterers.length} of {filteredCaterers.length} results
//         </div>
//       </div>
//       <div className={styles.catererList}>
//         {Array.isArray(filteredCaterers) && filteredCaterers.map((caterer) => {
//           console.log("Rendering caterer:", caterer.name, "Price:", caterer.minPrice, "-", caterer.maxPrice);
//           return (
//             <div key={caterer.id} className={styles.catererCard}>
//               <div className={styles.catererDetails}>
//                 <div className={styles.catererUpper}>
//                   <div className={styles.catererImg}>
//                     <img src={menuImage} alt="Caterer Menu" className={styles.catererImage}/>
//                   </div>  
//                   <div>
//                     <h3>{caterer.name}</h3>
//                     <p>Address: {caterer.address}</p>
//                   </div>
//                 </div>
//                 {caterer.minPrice !== undefined && caterer.maxPrice !== undefined && (
//                   <div className={styles.cardPrice}>
//                     <p>
//                       <b>Price: </b> <i>₹{caterer.minPrice} - ₹{caterer.maxPrice}</i>
//                     </p>
//                   </div>
//                 )}
//               </div>
//               <button className={styles.detailsButton}>Details</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CatererSearch;





import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CatererSearch.module.css";
import menuImage from "../../assets/caterer/menu1.jpeg";  // Replace with your image path

const CatererSearch = () => {
  const [caterers, setCaterers] = useState([]);
  const [filteredCaterers, setFilteredCaterers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [foodType, setFoodType] = useState("all");

  useEffect(() => {
    const fetchCaterers = async () => {
      try {
        const response = await axios.get("http://3.6.41.54/api/caterer");
        if (Array.isArray(response.data.data)) {
          console.log(response.data.data);  // Log the data here
          setCaterers(response.data.data);
          setFilteredCaterers(response.data.data); // Set initial filtered caterers
        } else {
          console.error("API response is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching caterers data:", error);
      }
    };
    fetchCaterers();
  }, []);

  useEffect(() => {
    handleFilterAndSort();
  }, [searchQuery, sortOrder, foodType, caterers]);

  const handleFilterAndSort = () => {
    let filtered = [...caterers];

    if (searchQuery) {
      filtered = filtered.filter(caterer =>
        caterer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caterer.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (foodType !== "all") {
      filtered = filtered.filter(caterer =>
        caterer.cuisinesOffered.some(cuisine => cuisine.toLowerCase() === foodType.toLowerCase())
      );
    }

    if (sortOrder === "rating") {
      filtered.sort((a, b) => a.minPrice - b.minPrice);
    } else if (sortOrder === "popularity") {
      filtered.sort((a, b) => b.minPrice - a.minPrice);
    }

    setFilteredCaterers(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input 
          type="text" 
          placeholder="Search nearby caterer" 
          className={styles.searchInput} 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleFilterAndSort}>
          <i className="fa fa-search" aria-hidden="true"></i> Search
        </button>
      </div>
      <div className={styles.filters}>
        <div className={`${styles.filterItem} ${styles.sortBy}`}>
          <label htmlFor="sort">Sort By: </label>
          <select id="sort" className={styles.filterDropdown} value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="default">Default</option>
            <option value="rating">Price: Low-High</option>
            <option value="popularity">Price: High-Low</option>
          </select>
        </div>
        <div className={`${styles.filterItem} ${styles.foodType}`}>
          <label htmlFor="food-type">Food Type: </label>
          <select id="food-type" className={styles.filterDropdown} value={foodType} onChange={(e) => setFoodType(e.target.value)}>
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
          Showing 1 - {filteredCaterers.length} of {filteredCaterers.length} results
        </div>
      </div>
      <div className={styles.catererList}>
        {Array.isArray(filteredCaterers) && filteredCaterers.map((caterer) => {
          console.log("Rendering caterer:", caterer.name, "Price:", caterer.minPrice, "-", caterer.maxPrice);
          return (
            <div key={caterer.id} className={styles.catererCard}>
              <div className={styles.catererDetails}>
                <div className={styles.catererUpper}>
                  <div className={styles.catererImg}>
                    <img src={menuImage} alt="Caterer Menu" className={styles.catererImage}/>
                  </div>  
                  <div>
                    <h3>{caterer.name}</h3>
                    <p>{caterer.address}</p>
                    <p>{caterer.cateringType.join(", ").toUpperCase()}</p>
                  </div>
                </div>
                {caterer.minPrice !== undefined && caterer.maxPrice !== undefined && (
                  <div className={styles.cardPrice}>
                    <p>
                      <b>Price: </b> <i>₹{caterer.minPrice} - ₹{caterer.maxPrice}</i>
                    </p>
                  </div>
                )}
              </div>
              <button className={styles.detailsButton}>Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatererSearch;
