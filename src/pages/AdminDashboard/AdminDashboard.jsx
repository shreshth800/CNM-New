import React from "react";
import styles from "./AdminDashboard.module.css";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.catererDashboard}>
        <div className={styles.catererDashLeft}>
          <h1>All Bookings</h1>
          <button onClick={() => navigate("/my-orders")}>View</button>
        </div>
        <div className={styles.catererDashRight}>
          <h1>All Caterers</h1>
          <button onClick={() => navigate("/caterer")}>View</button>
        </div>
        {/* <div className={styles.catererDashRight}>
          <h1>All Users</h1>
          <button onClick={() => navigate("/create-menu")}>View</button>
        </div> */}
      </div>
    </>
  );
};

export default AdminDashboard;
