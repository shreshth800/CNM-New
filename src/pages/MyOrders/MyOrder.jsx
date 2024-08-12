import React, { useEffect, useState } from 'react';
import styles from './MyOrder.module.css';
import menuImage from "../../assets/caterer/myorder.png";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://3.6.41.54/api/orders')
      .then(response => response.json())
      .then(data => setOrders(data.data))
      .catch(error => console.error('Error fetching orders:', error));

  }, []);

  const handleViewClick = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };


  return (
    <div className={styles.myOrderContainer}>
      {orders.map(order => (
        <div key={order.id} className={styles.orderCard}>
          <div className={styles.orderDetails}>
            <div className={styles.orderUpper}>
              <div className={styles.orderUpperLeft}>
              <img
              src={menuImage} alt={menuImage}
              className={styles.catererImage}
              />

              <div className={styles.catererDetails}>
              <h2 className={styles.catererName}>{order.catererId.name}</h2>
              <p>Dish Items: {order.items.length} | Order Quantity: {order.totalQuantity}</p>

              <div className={styles.paymentStatus}>
              <p>Amount: ₹{order.totalAmount}</p>
              <p>Payment status: {order.paymentStatus}</p>
              </div>
              
            </div>
              </div>
              <button className={styles.viewButton}>View</button>
            </div>
           
            <div className={styles.orderFooter}>
            <b>
              Delivery Date: {new Date(order.deliveryDate).toLocaleDateString()}
            </b>
            <p>Order By : {order.userId.firstName} {order.userId.lastName} | Contact No: {order.userId.phone}</p>
          </div>
          
          </div>

        </div>
      ))}
       
    </div>
  );
};

export default MyOrder;