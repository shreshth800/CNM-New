import React from "react";
import styles from "./CatererDashboard.module.css";
import { useNavigate } from "react-router-dom";

const CatererDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.catererDashboard}>
        <div className={styles.catererDashLeft}>
          <h1>My Bookings</h1>
          <button onClick={() => navigate("/my-orders")}>View</button>
        </div>
        <div className={styles.catererDashRight}>
          <h1>Edit Menu</h1>
          <button onClick={() => navigate("/create-menu")}>Edit</button>
        </div>
      </div>
    </>
  );
};

export default CatererDashboard;
