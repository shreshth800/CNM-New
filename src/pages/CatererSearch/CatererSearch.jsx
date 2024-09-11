import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import styles from "./CatererSearch.module.css";
import menuImage from "../../assets/caterer/menu1.jpeg";

const CatererSearch = () => {
  const [caterers, setCaterers] = useState([]);
  const [filteredCaterers, setFilteredCaterers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [foodType, setFoodType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const axiosPrivate = useAxiosPrivate();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCaterers = async () => {
      try {
        const response = await axiosPrivate.get("/caterer");
        // console.log(response)
        if (Array.isArray(response.data.data)) {
          // console.log(response.data.data);
          setCaterers(response.data.data);
          setFilteredCaterers(response.data.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching caterers data:", error);
      }
    };
    fetchCaterers();
  }, []);

  const handleDetailClick = (id) => {
    navigate(`/caterer/${id}`);
  };

  const handleFilterAndSort = () => {
    let filtered = [...caterers];

    if (searchQuery) {
      filtered = filtered.filter(
        (caterer) =>
          caterer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          caterer.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (foodType !== "all") {
      filtered = filtered.filter((caterer) =>
        caterer.cuisinesOffered.some(
          (cuisine) => cuisine.toLowerCase() === foodType.toLowerCase()
        )
      );
    }

    if (sortOrder === "rating") {
      filtered.sort((a, b) => a.minPrice - b.minPrice);
    } else if (sortOrder === "popularity") {
      filtered.sort((a, b) => b.minPrice - a.minPrice);
    }

    setFilteredCaterers(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    handleFilterAndSort();
  }, [searchQuery, sortOrder, foodType, caterers]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCaterers = filteredCaterers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredCaterers.length / itemsPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>There are {filteredCaterers.length} caterers for you!</h5>
      </div>
      <div className={styles.afterHeader}>
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
        <div className={styles.options}>
          <div className={styles.filters}>
            <div className={`${styles.filterItem} ${styles.sortBy}`}>
              <label htmlFor="sort">Sort By: </label>
              <select
                id="sort"
                className={styles.filterDropdown}
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="rating">Price: Low-High</option>
                <option value="popularity">Price: High-Low</option>
              </select>
            </div>
            <div className={`${styles.filterItem} ${styles.foodType}`}>
              <label htmlFor="food-type">Food Type: </label>
              <select
                id="food-type"
                className={styles.filterDropdown}
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
              >
                <option value="all">All</option>
                <option value="north-indian">North Indian</option>
                <option value="south-indian">South Indian</option>
                <option value="gujarati">Gujarati</option>
                <option value="chinese">Chinese</option>
                <option value="kathiyawadi">Kathiyawadi</option>
                <option value="punjabi">Punjabi</option>
                <option value="jain">Jain</option>
                <option value="kokani">Kokani</option>
                <option value="Mexican">Mexican</option>
                <option value="Italian">Italian</option>
              </select>
            </div>
          </div>
          <div className={styles.resultsCount}>
            Showing {indexOfFirstItem + 1} -{" "}
            {Math.min(indexOfLastItem, filteredCaterers.length)} of{" "}
            {filteredCaterers.length} results
          </div>
        </div>
        <div className={styles.catererList}>
          {Array.isArray(currentCaterers) &&
            currentCaterers.map((caterer) => {
              return (
                <div key={caterer.id} className={styles.catererCard}>
                  <div className={styles.catererDetails}>
                    <div className={styles.catererUpper}>
                      <div className={styles.catererUpperLeft}>
                        <img
                          src={menuImage}
                          alt="Caterer Menu"
                          className={styles.catererImage}
                        />
                        <div className={styles.catererText}>
                          <h3>{caterer.name}</h3>
                          <p>{caterer.address}</p>
                          <p>{caterer.cateringType.join(", ").toUpperCase()}</p>
                        </div>
                      </div>
                      <div className={styles.catererUpperRight}>
                        <button
                          className={styles.detailsButton}
                          onClick={() => handleDetailClick(caterer.id)}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                    {caterer.minPrice !== undefined &&
                      caterer.maxPrice !== undefined && (
                        <div className={styles.cardPrice}>
                          <p>
                            <b>Price: </b>
                            <i>
                              ₹{caterer.minPrice} - ₹{caterer.maxPrice}
                            </i>
                          </p>
                        </div>
                      )}
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.pagination}>
          <button
            className={`${styles.pageButton} ${styles.arrowButton} ${
              currentPage === 1 ? styles.disabled : ""
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo; Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`${styles.pageButton} ${
                currentPage === i + 1 ? styles.active : ""
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`${styles.pageButton} ${styles.arrowButton} ${
              currentPage === totalPages ? styles.disabled : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatererSearch;
