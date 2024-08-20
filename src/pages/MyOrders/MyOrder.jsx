// import React, { useEffect, useState } from 'react';
// import styles from './MyOrder.module.css';
// import menuImage from "../../assets/caterer/myorder.png";
// import Modal from "../../components/Modal/Modal"

// const MyOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const [isModalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     fetch('http://3.6.41.54/api/orders')
//       .then(response => response.json())
//       .then(data => setOrders(data.data))
//       .catch(error => console.error('Error fetching orders:', error));

//   }, []);

// const openModal = () => setModalOpen(true);
// const closeModal = () => setModalOpen(false);

// const fromLocalData = JSON.parse(localStorage.getItem("cartData"));

//   return (
//     <div className={styles.myOrderContainer}>
//       {orders.map(order => (
//         <div key={order.id} className={styles.orderCard}>
//           <div className={styles.orderDetails}>
//             <div className={styles.orderUpper}>
//               <div className={styles.orderUpperLeft}>
//               <img
//               src={menuImage} alt={menuImage}
//               className={styles.catererImage}
//               />

//               <div className={styles.catererDetails}>
//               <h2 className={styles.catererName}>{order.catererId.name}</h2>
//               <p>Dish Items: {order.items.length} | Order Quantity: {order.dishQuantity}</p>

//               <div className={styles.paymentStatus}>
//               <p>Amount: ₹{order.totalAmount}</p>
//               <p>Payment status: {order.paymentStatus}</p>
//               </div>
              
//             </div>
//               </div>
//               <button className={styles.viewButton} onClick={openModal}>View</button>
//               <Modal isOpen={isModalOpen} onClose={closeModal}>
//                 <h2>Order Details: </h2>
                
//                 <div className={styles.modalUpper}>
//                   <div className={styles.OrderSummary}>
//                       <h3>Order Summary:</h3>
//                       <p>Order Quantity: {order.dishQuantity}</p>
//                       <p>Amount: {order.totalAmount}</p>
//                       <p>Payment Status: {order.paymentStatus}</p>
//                       <p>Delivery Date: {new Date(order.deliveryDate).toLocaleDateString()}</p>
//                   </div>
//                   <div>
//                       <h3>Ordered By:</h3>
//                       <p>Order By: {order.userId.firstName} {order.userId.lastName}</p>
//                       <p>Contact number: {order.userId.phone}</p>
//                   </div>
//                 </div>
//               </Modal>
//             </div>
           
//             <div className={styles.orderFooter}>
//             <b>
//               Delivery Date: {new Date(order.deliveryDate).toLocaleDateString()}
//             </b>
//             <p>Order By : {order.userId.firstName} {order.userId.lastName} | Contact No: {order.userId.phone}</p>
//           </div>
          
//           </div>

//         </div>
//       ))}
       
//     </div>
//   );
// };

// export default MyOrder;



import React, { useEffect, useState } from 'react';
import styles from './MyOrder.module.css';
import menuImage from "../../assets/caterer/myorder.png";
import Modal from "../../components/Modal/Modal"
import Accordion from '../../components/Accordion/Accordion';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://3.6.41.54/api/orders')
      .then(response => response.json())
      .then(data => setOrders(data.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Fetch cartData from local storage
  const cartData = JSON.parse(localStorage.getItem("cartData"));

  return (
    <div className={styles.myOrderContainer}>
      {orders.map(order => (
        <div key={order.id} className={styles.orderCard}>
          <div className={styles.orderDetails}>
            <div className={styles.orderUpper}>
              <div className={styles.orderUpperLeft}>
                <img
                  src={menuImage} alt="Order"
                  className={styles.catererImage}
                />

                <div className={styles.catererDetails}>
                  <h2 className={styles.catererName}>{order.catererId.name}</h2>
                  <p>Dish Items: {order.items.length} | Order Quantity: {order.dishQuantity}</p>

                  <div className={styles.paymentStatus}>
                    <p>Amount: ₹{order.totalAmount}</p>
                    <p>Payment status: {order.paymentStatus}</p>
                  </div>
                </div>
              </div>
              <button className={styles.viewButton} onClick={openModal}>View</button>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Order Details: </h2>

                <div className={styles.modalUpper}>
                  <div className={styles.OrderSummary}>
                    <h3>Order Summary:</h3>
                    <p>Order Quantity: {order.dishQuantity}</p>
                    <p>Amount: {order.totalAmount}</p>
                    <p>Payment Status: {order.paymentStatus}</p>
                    <p>Delivery Date: {new Date(order.deliveryDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h3>Ordered By:</h3>
                    <p>Order By: {order.userId.firstName} {order.userId.lastName}</p>
                    <p>Contact number: {order.userId.phone}</p>
                  </div>
                </div>

                {/* Add Accordion here and pass the cartData */}
                <Accordion data={cartData} />
                
              </Modal>
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
