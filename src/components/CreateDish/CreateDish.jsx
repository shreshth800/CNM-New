// import React, { useContext, useEffect, useState } from 'react';
// import styles from './CreateDish.module.css';
// import axios from 'axios';
// import { CatererContext } from '../../App';

// export default function CreateDish() {
//   const { catererId } = useContext(CatererContext);
//   const [packages, setPackages] = useState([{ name: '', price: 0, dishType: '', items: [{ id: '', item: '', price: 0, quantity: '' }] }]);
//   const [catererDish, setCatererDish] = useState([]);
//   const [categoryType, setCategoryType] = useState([]); // To store fetched catering types

//   // Fetch the menu data based on catererId
//   useEffect(() => {
//     async function getMenu() {
//       try {
//         const response = await fetch('http://3.6.41.54/api/Menus?limit=100000');
//         const data = await response.json();
//         const catererData = data.data.filter(dish => dish.catererId === catererId);
//         setCatererDish(catererData);
//       } catch (error) {
//         console.error('Error fetching menu data:', error);
//       }
//     }
//     getMenu();
//   }, [catererId]);

//   // Fetch the catering types based on catererId
//   useEffect(() => {
//     async function fetchCateringTypes() {
//       try {
//         const response = await axios.get(`http://3.6.41.54/api/caterer/${catererId}`);
//         const cateringData = response.data;
//         setCategoryType(cateringData.cateringType || []);
//       } catch (error) {
//         console.error('Error fetching catering types:', error);
//       }
//     }
//     fetchCateringTypes();
//   }, [catererId]);

//   const handlePackageChange = (index, event) => {
//     const updatedPackages = [...packages];
//     if (event.target.name === 'price') {
//       updatedPackages[index][event.target.name] = Number(event.target.value);
//     } else {
//       updatedPackages[index][event.target.name] = event.target.value;
//     }
//     setPackages(updatedPackages);
//   };

//   const handleDishChange = (packageIndex, dishIndex, event) => {
//     const updatedPackages = [...packages];
//     const selectedDish = catererDish.find(dish => dish.name === event.target.value);
    
//     if (event.target.name === 'price') {
//       updatedPackages[packageIndex].items[dishIndex][event.target.name] = Number(event.target.value);
//     } else {
//       updatedPackages[packageIndex].items[dishIndex][event.target.name] = event.target.value;
//     }

//     if (event.target.name === 'item' && selectedDish) {
//       updatedPackages[packageIndex].items[dishIndex].id = selectedDish.id; // Store the dish's ID
//     }

//     setPackages(updatedPackages);
//   };

//   const addDish = (packageIndex) => {
//     const updatedPackages = [...packages];
//     updatedPackages[packageIndex].items.push({ id: '', item: '', price: 0, quantity: '' });
//     setPackages(updatedPackages);
//   };

//   const addPackage = () => {
//     setPackages([...packages, { name: '', price: 0, dishType: '', items: [{ id: '', item: '', price: 0, quantity: '' }] }]);
//   };

//   async function SubmitForm(e) {
//     e.preventDefault();
  
//     try {
//       const response = await axios.get(`http://3.6.41.54/api/caterer/${catererId}`);
//       const caterersdish = response.data;
//       let caterer;
//       if(caterersdish.dishes){
//         caterer={...caterersdish,dishes:caterersdish.dishes.map(dish=>{return({...dish,_id:dish.id})})}
//       }

      
//       const updatedPackage = packages.map(pkg => ({ ...pkg,catererId:catererId}));
  

//       const results = await Promise.all(
//         updatedPackage.map(async pkg => {
//           const dishes = await axios.post(`http://3.6.41.54/api/dishes`, pkg);
//           const dishD = dishes.data;
//           return { ...dishD, _id: dishD.id };
//         })
//       );
//       let newCaterer
//       if(caterer?.dishes){
//         newCaterer={dishes:[...caterer.dishes,...results]}
//       }else{
//         newCaterer={dishes:[...results]}
//       }
//       console.log(newCaterer)

//       const updateCaterer=await axios.patch(`http://3.6.41.54/api/caterer/${catererId}`,newCaterer)
//       console.log(updateCaterer)
  
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   }

//   return (
//     <>
//       <form className={styles.formContainer}>
//         {packages.map((pkg, pkgIndex) => (
//           <div key={pkgIndex} className={styles.package}>
//             <h3>Package {pkgIndex + 1}</h3>
//             <div className={styles.inputGroup}>
//               <label>Package Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={pkg.name}
//                 onChange={(event) => handlePackageChange(pkgIndex, event)}
//               />
//             </div>
//             <div className={styles.inputGroup}>
//               <label>Package Price:</label>
//               <input
//                 type="text"
//                 name="price"
//                 value={pkg.price}
//                 onChange={(event) => handlePackageChange(pkgIndex, event)}
//               />
//             </div>
//             <div className={styles.inputGroup}>
//               <label>Category:</label>
//               <select
//                 name="dishType"
//                 value={pkg.dishType}
//                 onChange={(event) => handlePackageChange(pkgIndex, event)}
//               >
//                 <option value="" disabled>Select type</option>
//                 {categoryType.map((category, index) => (
//                   <option key={index} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <h4>Dishes</h4>
//             {pkg.items.map((dish, dishIndex) => (
//               <div key={dishIndex} className={styles.dish}>
//                 <div className={styles.inputGroup}>
//                   <label>Menu Dish:</label>
//                   <select
//                     name="item"
//                     value={dish.item}
//                     onChange={(event) => handleDishChange(pkgIndex, dishIndex, event)}
//                   >
//                     <option value="" disabled>Select a dish</option>
//                     {catererDish.map((catererDish) => (
//                       <option key={catererDish.id} value={catererDish.name}>
//                         {catererDish.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className={styles.inputGroup}>
//                   <label>Dish Price:</label>
//                   <input
//                     type="text"
//                     name="price"
//                     value={dish.price}
//                     onChange={(event) => handleDishChange(pkgIndex, dishIndex, event)}
//                   />
//                 </div>
//                 <div className={styles.inputGroup}>
//                   <label>Dish Quantity:</label>
//                   <input
//                     type="text"
//                     name="quantity"
//                     value={dish.quantity}
//                     onChange={(event) => handleDishChange(pkgIndex, dishIndex, event)}
//                   />
//                 </div>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => addDish(pkgIndex)}
//               className={`${styles.addButton} ${styles.blueButton}`}
//             >
//               Add Dish
//             </button>
//           </div>
//         ))}
//         <button type="button" onClick={addPackage} className={styles.addButton}>
//           Add Package
//         </button>
//       </form>
//       <button type="button" onClick={(e) => SubmitForm(e)} className={styles.addButton}>
//         Submit
//       </button>
//     </>
//   );
// }


import React, { useContext, useEffect, useState } from 'react';
import styles from './CreateDish.module.css';
import axios from 'axios';
import { CatererContext } from '../../App';

export default function CreateDish() {
  const { catererId } = useContext(CatererContext);
  const [packages, setPackages] = useState([{ name: '', price: 0, dishType: '', items: [{ id: '', item: '', price: 0, quantity: '' }] }]);
  const [catererDish, setCatererDish] = useState([]);
  const [categoryType, setCategoryType] = useState([]); // To store fetched catering types

  // Fetch  menu data based on catererId
  useEffect(() => {
    async function getMenu() {
      try {
        const response = await fetch('http://3.6.41.54/api/Menus?limit=100000');
        const data = await response.json();
        const catererData = data.data.filter(dish => dish.catererId === catererId);
        setCatererDish(catererData);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    }
    getMenu();
  }, [catererId]);

  // Fetch catering types based on catererId
  useEffect(() => {
    async function fetchCateringTypes() {
      try {
        const response = await axios.get(`http://3.6.41.54/api/caterer/${catererId}`);
        const cateringData = response.data;
        setCategoryType(cateringData.cateringType || []);
      } catch (error) {
        console.error('Error fetching catering types:', error);
      }
    }
    fetchCateringTypes();
  }, [catererId]);

  const handlePackageChange = (index, event) => {
    const updatedPackages = [...packages];
    if (event.target.name === 'price') {
      updatedPackages[index][event.target.name] = Number(event.target.value);
    } else {
      updatedPackages[index][event.target.name] = event.target.value;
    }
    setPackages(updatedPackages);
  };

  const handleDishChange = (packageIndex, dishIndex, event) => {
    const updatedPackages = [...packages];
    const selectedDish = catererDish.find(dish => dish.name === event.target.value);
    
    if (event.target.name === 'price') {
      updatedPackages[packageIndex].items[dishIndex][event.target.name] = Number(event.target.value);
    } else {
      updatedPackages[packageIndex].items[dishIndex][event.target.name] = event.target.value;
    }

    if (event.target.name === 'item' && selectedDish) {
      updatedPackages[packageIndex].items[dishIndex].id = selectedDish.id; // Store the dish's ID
    }

    setPackages(updatedPackages);
  };

  const addDish = (packageIndex) => {
    const updatedPackages = [...packages];
    updatedPackages[packageIndex].items.push({ id: '', item: '', price: 0, quantity: '' });
    setPackages(updatedPackages);
  };

  const addPackage = () => {
    setPackages([...packages, { name: '', price: 0, dishType: '', items: [{ id: '', item: '', price: 0, quantity: '' }] }]);
  };

  async function SubmitForm(e) {
    e.preventDefault();
  
    try {
      const response = await axios.get(`http://3.6.41.54/api/caterer/${catererId}`);
      const caterersdish = response.data;
      let caterer;
      if(caterersdish.dishes){
        caterer={...caterersdish,dishes:caterersdish.dishes.map(dish=>{return({...dish,_id:dish.id})})}
      }

      const updatedPackage = packages.map(pkg => ({ ...pkg, catererId }));
  
      const results = await Promise.all(
        updatedPackage.map(async pkg => {
          const dishes = await axios.post(`http://3.6.41.54/api/dishes`, pkg);
          const dishD = dishes.data;
          return { ...dishD, _id: dishD.id };
        })
      );
      let newCaterer;
      if(caterer?.dishes){
        newCaterer={dishes:[...caterer.dishes,...results]};
      } else {
        newCaterer={dishes:[...results]};
      }

      await axios.patch(`http://3.6.41.54/api/caterer/${catererId}`, newCaterer);

      // Show alert box on successful submission
      alert('Packages submitted successfully!');
  
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the packages. Please try again.');
    }
  }

  return (
    <>
      <form className={styles.formContainer}>
        {packages.map((pkg, pkgIndex) => (
          <div key={pkgIndex} className={styles.package}>
            <h3>Package {pkgIndex + 1}</h3>
            <div className={styles.inputGroup}>
              <label>Package Name:</label>
              <input
                type="text"
                name="name"
                value={pkg.name}
                onChange={(event) => handlePackageChange(pkgIndex, event)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Package Price:</label>
              <input
                type="text"
                name="price"
                value={pkg.price}
                onChange={(event) => handlePackageChange(pkgIndex, event)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Category:</label>
              <select
                name="dishType"
                value={pkg.dishType}
                onChange={(event) => handlePackageChange(pkgIndex, event)}
              >
                <option value="" disabled>Select type</option>
                {categoryType.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <h4>Dishes</h4>
            {pkg.items.map((dish, dishIndex) => (
              <div key={dishIndex} className={styles.dish}>
                <div className={styles.inputGroup}>
                  <label>Menu Dish:</label>
                  <select
                    name="item"
                    value={dish.item}
                    onChange={(event) => handleDishChange(pkgIndex, dishIndex, event)}
                  >
                    <option value="" disabled>Select a dish</option>
                    {catererDish.map((catererDish) => (
                      <option key={catererDish.id} value={catererDish.name}>
                        {catererDish.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>Dish Price:</label>
                  <input
                    type="text"
                    name="price"
                    value={dish.price}
                    onChange={(event) => handleDishChange(pkgIndex, dishIndex, event)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Dish Quantity:</label>
                  <input
                    type="text"
                    name="quantity"
                    value={dish.quantity}
                    onChange={(event) => handleDishChange(pkgIndex, dishIndex, event)}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addDish(pkgIndex)}
              className={`${styles.addButton} ${styles.blueButton}`}
            >
              Add Dish
            </button>
          </div>
        ))}
        <button type="button" onClick={addPackage} className={styles.addButton}>
          Add Package
        </button>
      </form>
      <button type="button" onClick={(e) => SubmitForm(e)} className={styles.addButton}>
        Submit
      </button>
    </>
  );
}
