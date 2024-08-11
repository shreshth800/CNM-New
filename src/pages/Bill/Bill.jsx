// import React, { useState, useRef } from "react";
// import styles from "./Bill.module.css";

// const detailsList = [
//   {
//     name: "Main Course",
//     dishes: ["Mix Veg"],
//   },
//   {
//     name: "Dal",
//     dishes: ["Makhani Dal", "Dal Tadka"],
//   },
//   {
//     name: "Rice",
//     dishes: ["Jeera Rice"],
//   },
//   {
//     name: "Breads",
//     dishes: ["Naan", "Butter Naan", "Garlic Naan"],
//   },
// ];

// const Bill = () => {
//   const [selected, setSelected] = useState(null);
//   const accordionContentRefs = useRef([]);

//   const toggle = (index) => {
//     if (selected === index) {
//       setSelected(null);
//     } else {
//       setSelected(index);
//     }
//   };

//   return (
//     <div className={styles.billContainer}>
//       <div className={styles.mainHeading}>
//         <h2>Order Summary</h2>
//       </div>
//       <div className={styles.mainBill}>
//         <div className={styles.billLeft}>
//           <div className={styles.leftHeading}>
//             <h3>Dish Details:</h3>
//           </div>
//           {detailsList.map((detail, index) => {
//             const isSelected = selected === index;
//             const contentRef = accordionContentRefs.current[index];
//             const contentHeight =
//               isSelected && contentRef ? contentRef.scrollHeight : 0;

//             return (
//               <div
//                 className={styles.detailAccordion}
//                 onClick={() => toggle(index)}
//                 key={index}
//                 style={{
//                   height: isSelected ? `${contentHeight + 110}px` : "90px",
//                   overflow: "hidden",
//                   transition: "height 0.3s ease",
//                 }}
//               >
//                 <div className={styles.accordionHeading}>
//                   <h4>{detail.name}</h4>
//                   <i
//                     className={`fa-solid fa-caret-up ${styles.accordionIcon} ${
//                       isSelected ? "" : styles.flip
//                     }`}
//                   ></i>
//                 </div>
//                 <div
//                   className={styles.accordionContent}
//                   ref={(el) => (accordionContentRefs.current[index] = el)}
//                 >
//                   {detail.dishes.map((dish, index) => (
//                     <p key={index}>{`${index + 1}. ${dish}`}</p>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         <div className={styles.billRight}>
//           <div className={styles.rightHeading}>
//             <h3>Order Summary:</h3>
//             <div className={styles.deliveryDate}>
//               <h3>Delivery Date</h3>
//               <input className={styles.deliveryDateInput} type="date" />
//             </div>
//             <div className={styles.dishQuantity}>
//               <h3>Dish Quantity:</h3>
//               <input className={styles.dishQuantityInput} type="number" />
//             </div>
//             <div className={styles.totalPrice}>
//               <h3>Total Price: 400</h3>
//             </div>
//             <div className={styles.addAnItem}>
//               <h3>Add An Item Price: 200</h3>
//             </div>
//             <div className={styles.addAnItem}>
//               <h3>Final Dish Price: 200</h3>
//             </div>
//             <div className={styles.addAnItem}>
//               <h3>Final Price: 0</h3>
//             </div>
//             <div className={styles.addAnItem}>
//               <h3>Total: 30</h3>
//             </div>
//             <div className={styles.couponCode}>
//               <input
//                 className={styles.couponCodeInput}
//                 type="text"
//                 placeholder="Coupon Code"
//               />
//               <button className={styles.couponButton}>Apply</button>
//             </div>
//             <button className={styles.placeOrder}>Place Order</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bill;

// Bill.jsx

// import React from "react";
// import Accordion from "../../components/Accordion/Accordion";
// import styles from "./Bill.module.css";

// const detailsList = [
//   {
//     name: "Main Course",
//     dishes: ["Mix Veg"],
//   },
//   {
//     name: "Dal",
//     dishes: ["Makhani Dal", "Dal Tadka"],
//   },
//   {
//     name: "Rice",
//     dishes: ["Jeera Rice"],
//   },
//   {
//     name: "Breads",
//     dishes: ["Naan", "Butter Naan", "Garlic Naan"],
//   },
// ];

// const Bill = () => {
//   return (
//     <div className={styles.billContainer}>
//       <div className={styles.mainHeading}>
//         <h2>Order Summary</h2>
//       </div>
//       <div className={styles.mainBill}>
//         <div className={styles.billLeft}>
//           <div className={styles.leftHeading}>
//             <h3>Dish Details:</h3>
//           </div>
//           <Accordion data={detailsList} />
//         </div>
//         <div className={styles.billRight}>
//           <div className={styles.rightHeading}>
//             <h3>Order Summary:</h3>
//             <div className={styles.deliveryDate}>
//               <h3>Delivery Date</h3>
//               <input className={styles.deliveryDateInput} type="date" />
//             </div>
//             <div className={styles.dishQuantity}>
//               <h3>Dish Quantity:</h3>
//               <input className={styles.dishQuantityInput} type="number" />
//             </div>
//             <div className={styles.addAnItem}>
//               <h3>Dish Price: </h3>
//             </div>
//             <div className={styles.addAnItem}>
//               <h3>Add on Item Per Price: </h3>
//             </div>
//             <div className={styles.addAnItem}>
//               <h3>Final Per Dish Price: </h3>
//             </div>
//             <div className={styles.addAnItem}>
//               <h3>Final Price: </h3>
//             </div>
//             <div className={styles.totalPrice}>
//               <h3>Total: </h3>
//             </div>
//             <div className={styles.couponCode}>
//               <input
//                 className={styles.couponCodeInput}
//                 type="text"
//                 placeholder="Coupon Code"
//               />
//               <button className={styles.couponButton}>Apply</button>
//             </div>
//             <button className={styles.placeOrder}>Place Order</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bill;



import React, { useEffect, useState } from "react";
import Accordion from "../../components/Accordion/Accordion";
import styles from "./Bill.module.css";

const Bill = () => {
  const [cartData, setCartData] = useState([]);
  const [dishDetails, setDishDetails] = useState(null);
  const [dishQuantity, setDishQuantity] = useState(1); // Default quantity

  useEffect(() => {
    // Retrieve cartData from local storage
    const storedCartData = JSON.parse(localStorage.getItem("cartData"));
    if (storedCartData) {
      setCartData(storedCartData);
    }

    // Retrieve dishDetails from local storage
    const storedDishDetails = JSON.parse(localStorage.getItem("dishDetails"));
    if (storedDishDetails) {
      setDishDetails(storedDishDetails);
    }
  }, []);

  // Calculating the values based on dishDetails and quantity
  const dishPrice = dishDetails?.price || 0;
  const totalPrice = dishPrice * dishQuantity;

  return (
    <div className={styles.billContainer}>
      <div className={styles.mainHeading}>
        <h2>Order Summary</h2>
      </div>
      <div className={styles.mainBill}>
        <div className={styles.billLeft}>
          <div className={styles.leftHeading}>
            <h3>Dish Details:</h3>
          </div>
          {/* Accordion displaying cartData */}
          <Accordion data={cartData} />
        </div>
        <div className={styles.billRight}>
          <div className={styles.rightHeading}>
            <h3>Order Summary:</h3>
            <div className={styles.deliveryDate}>
              <h3>Delivery Date</h3>
              <input className={styles.deliveryDateInput} type="date" />
            </div>
            <div className={styles.dishQuantity}>
              <h3>Dish Quantity:</h3>
              <input
                className={styles.dishQuantityInput}
                type="number"
                value={dishQuantity}
                onChange={(e) => setDishQuantity(parseInt(e.target.value))}
                min="1"
              />
            </div>
            <div className={styles.addAnItem}>
              <h3>Dish Price: {dishPrice}</h3>
            </div>
            <div className={styles.addAnItem}>
              <h3>Final Price: {totalPrice}</h3>
            </div>
            <div className={styles.couponCode}>
              <input
                className={styles.couponCodeInput}
                type="text"
                placeholder="Coupon Code"
              />
              <button className={styles.couponButton}>Apply</button>
            </div>
            <button className={styles.placeOrder}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
