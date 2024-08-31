// import React, { useEffect, useState } from "react";
// import styles from "./MyOrder.module.css";
// import menuImage from "../../assets/caterer/myorder.png";
// import Modal from "../../components/Modal/Modal";
// import Accordion from "../../components/Accordion/Accordion";

// const MyOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const [isModalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     fetch("http://3.6.41.54/api/orders")
//       .then((response) => response.json())
//       .then((data) => setOrders(data.data))
//       .catch((error) => console.error("Error fetching orders:", error));
//   }, []);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   const cartData = JSON.parse(localStorage.getItem("cartData"));

//   return (
//     <div className={styles.myOrderContainer}>
//       {orders.map((order) => (
//         <div key={order.id} className={styles.orderCard}>
//           <div className={styles.orderDetails}>
//             <div className={styles.orderUpper}>
//               <div className={styles.orderUpperLeft}>
//                 <img
//                   src={menuImage}
//                   alt="Order"
//                   className={styles.catererImage}
//                 />

//                 <div className={styles.catererDetails}>
//                   <h2 className={styles.catererName}>{order.catererId.name}</h2>
//                   <p>
//                     Dish Items: {order.items.length} | Order Quantity:{" "}
//                     {order.dishQuantity}
//                   </p>

//                   <div className={styles.paymentStatus}>
//                     <p>Amount: ₹{order.totalAmount}</p>
//                     <p>Payment status: {order.paymentStatus}</p>
//                   </div>
//                 </div>
//               </div>
//               <button className={styles.viewButton} onClick={openModal}>
//                 View
//               </button>
//               <Modal isOpen={isModalOpen} onClose={closeModal}>
//                 <h2>Order Details: </h2>

//                 <div className={styles.modalUpper}>
//                   <div className={styles.OrderSummary}>
//                     <h3>Order Summary:</h3>
//                     <p>Order Quantity: {order.dishQuantity}</p>
//                     <p>Amount: {order.totalAmount}</p>
//                     <p>Payment Status: {order.paymentStatus}</p>
//                     <p>
//                       Delivery Date:{" "}
//                       {new Date(order.deliveryDate).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <div>
//                     <h3>Ordered By:</h3>
//                     <p>
//                       Order By: {order.userId.firstName} {order.userId.lastName}
//                     </p>
//                     <p>Contact number: {order.userId.phone}</p>
//                   </div>
//                 </div>

//                 <Accordion data={cartData} />
//               </Modal>
//             </div>

//             <div className={styles.orderFooter}>
//               <b>
//                 Delivery Date:{" "}
//                 {new Date(order.deliveryDate).toLocaleDateString()}
//               </b>
//               <p>
//                 Order By : {order.userId.firstName} {order.userId.lastName} |
//                 Contact No: {order.userId.phone}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyOrder;


import React, { useEffect, useState } from "react";
import styles from "./MyOrder.module.css";
import menuImage from "../../assets/caterer/myorder.png";
import Modal from "../../components/Modal/Modal";
import Accordion from "../../components/Accordion/Accordion";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  useEffect(() => {

    const userData = JSON.parse(localStorage.getItem("user"))
    let neededId;
    if(userData.role.id==3){
      neededId = userData.catererId;
    }
    else neededId = userData.id;

    fetch(`http://3.6.41.54/api/orders?filters=[{"${userData.role.id==3 ? "catererId" : "userId"}":"${neededId}"}]`)
      .then((response) => response.json())
      .then((data) => setOrders(data.data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  const openModal = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedOrder(null);
  };

  // Transform the data to fit the Accordion's expected format
  const formatAccordionData = (items) => {
    return items.map((item, index) => ({
      name: item.item,
      dishes: item.menuItem.map((menu, menuIndex) => `${menu}`),
    }));
  };

  return (
    <div className={styles.myOrderContainer}>
      {orders.map((order) => (
        <div key={order.id} className={styles.orderCard}>
          <div className={styles.orderDetails}>
            <div className={styles.orderUpper}>
              <div className={styles.orderUpperLeft}>
                <img
                  src={menuImage}
                  alt="Order"
                  className={styles.catererImage}
                />
                <div className={styles.catererDetails}>
                  <h2 className={styles.catererName}>{order.catererId.name}</h2>
                  <p>
                    Dish Items: {order.items.length} | Order Quantity:{" "}
                    {order.dishQuantity}
                  </p>
                  <div className={styles.paymentStatus}>
                    <p>Amount: ₹{order.totalAmount}</p>
                    <p>Payment status: {order.paymentStatus}</p>
                  </div>
                </div>
              </div>
              <button
                className={styles.viewButton}
                onClick={() => openModal(order)}
              >
                View
              </button>
            </div>
            <div className={styles.orderFooter}>
              <b>
                Delivery Date:{" "}
                {new Date(order.deliveryDate).toLocaleDateString()}
              </b>
              <p>
                Order By : {order.userId.firstName} {order.userId.lastName} |
                Contact No: {order.userId.phone}
              </p>
            </div>
          </div>
        </div>
      ))}

      {selectedOrder && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Order Details: </h2>

          <div className={styles.modalUpper}>
            <div className={styles.OrderSummary}>
              <h3>Order Summary:</h3>
              <p>Order Quantity: {selectedOrder.dishQuantity}</p>
              <p>Amount: ₹{selectedOrder.totalAmount}</p>
              <p>Payment Status: {selectedOrder.paymentStatus}</p>
              <p>
                Delivery Date:{" "}
                {new Date(selectedOrder.deliveryDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <h3>Ordered By:</h3>
              <p>
                Order By: {selectedOrder.userId.firstName}{" "}
                {selectedOrder.userId.lastName}
              </p>
              <p>Contact number: {selectedOrder.userId.phone}</p>
            </div>
          </div>

          
          <Accordion
            data={formatAccordionData(selectedOrder.items)}
          />
        </Modal>
      )}
    </div>
  );
};

export default MyOrder;
