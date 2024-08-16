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
import { CatererContext} from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Bill = () => {
  const [cartData, setCartData] = useState([]);
  const [dishDetails, setDishDetails] = useState(null);
  const [dishQuantity, setDishQuantity] = useState(1); // Initial value set to 1
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState(""); // State for coupon code
  const [discount, setDiscount] = useState(0); // State for discount
  const { catererId } = useContext(CatererContext);
  const navigate=useNavigate()

  useEffect(() => {
    // Retrieve cartData and dishDetails from local storage
    const cart = JSON.parse(localStorage.getItem("cartData"));
    const storedDishDetails = JSON.parse(localStorage.getItem("dishDetails"));

    if (cart) {
      setCartData(cart);
    }
    if (storedDishDetails) {
      setDishDetails(storedDishDetails);
    }
  }, []);

  useEffect(() => {
    // Calculate prices whenever dishQuantity or dishDetails or cartData changes
    if (dishDetails && cartData.length > 0) {
      const addOnPrice = cartData.reduce((sum, item) => sum + item.price * item.addon, 0);
      const total = dishDetails.price + addOnPrice;
      setTotalPrice(total * dishQuantity);
    }
  }, [dishQuantity, dishDetails, cartData]);

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) > 0 && Number.isInteger(Number(value)))) {
      setDishQuantity(value); // Allow empty or valid numbers only
    }
  };

  const handleQuantityBlur = () => {
    if (dishQuantity === "" || dishQuantity === "0") {
      setDishQuantity(1); // Set to 1 if the field is left empty or contains 0
    }
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleCouponBlur = () => {
    // Assume "caterer@10" is the valid coupon code for a 10% discount
    if (couponCode === "caterer@10") {
      setDiscount(0.1); // 10% discount
    } else if (couponCode !== "") {
      setDiscount(0); // Invalid coupon, no discount
      alert("Invalid coupon code");
    }
  };

  const handleOrder = async () => {
    try {
      const dish =await JSON.parse(localStorage.getItem("dishDetails"));
      const user =await JSON.parse(localStorage.getItem("user"));
      const cartItems = cartData.map(item => ({
        item: item.name,
        quantity: item.quantity,
        menuItem: item.dishes,
      }));

      const myorder = {
        catererId,
        dishId: dish?.id || "",
        userId: user?.id || "",
        items: cartItems,
        totalAmount: Number(totalPrice),
        dishQuantity: Number(dishQuantity)||1,
        paymentStatus: "Accepted",
        orderDate: new Date().toISOString(),
        deliveryDate: "2022-01-01T00:00:00.000Z",
        status: {
          id: 0
        }
      };
      console.log(myorder)
      await axios.post('http://3.6.41.54/api/orders', myorder);
      navigate('/my-orders')
    } catch (error) {
      console.error("Order submission failed:", error);
    }
  };

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
          <Accordion data={cartData} /> {/* Pass cartData to Accordion */}
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
                onChange={handleQuantityChange}
                min={1} // Prevent entering values less than 1
              />
            </div>
            <div className={styles.addAnItem}>
              <h3>Dish Price: {dishDetails?.price || 0}</h3>
            </div>
            <div className={styles.totalPrice}>
              <h3>Add On Item Price: {cartData.reduce((sum, item) => sum + item.price * item.addon, 0)}</h3>
            </div>
            <div className={styles.totalPrice}>
              <h3>Final Per Dish Price: {dishDetails?.price + cartData.reduce((sum, item) => sum + item.price * item.addon, 0) || 0}</h3>
            </div>
            <div className={styles.totalPrice}>
              <h3>Final Price: {dishDetails ? (dishDetails.price + cartData.reduce((sum, item) => sum + item.price * item.addon, 0)) * dishQuantity : 0}</h3>
            </div>
            <div className={styles.totalPrice}>
              <h3>Total: {totalPrice}</h3>
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