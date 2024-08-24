import React, { useContext, useEffect, useState } from 'react'
import styles from './CreateDish.module.css'
import axios from 'axios'
import { CatererContext } from '../../App'
const category=['veg','nonVeg','jain']

export default function CreateDish() {
    const {catererId,setCatererId}=useContext(CatererContext)
    if(!catererId){
      setCatererId(localStorage.getItem('catererData'))
    }
  const [packages, setPackages] = useState([{ name: '', price:0,dishType:'', items: [{ item: '', price: 0, quantity: '' }] }]);
  const [catererDish,SetCatererDish]=useState([])
  useEffect(function(){
    async function  getMenu(){
        const response=await fetch('http://3.6.41.54/api/Menus?limit=100000')
        const data=await response.json()
        const catererData=data.data.filter(dish=>dish.catererId===catererId)
        SetCatererDish(catererData)
    }
    getMenu()
  },[])

  const handlePackageChange = (index, event) => {
    const updatedPackages = [...packages];
    if(event.target.name=='price'){
        updatedPackages[index][event.target.name] = Number(event.target.value);
    }else{
        updatedPackages[index][event.target.name] = event.target.value;
    }
    setPackages(updatedPackages);
  };
  async function SubmitForm(e){
    e.preventDefault()
    const response=await axios.get(`http://3.6.41.54/api/caterer/${catererId}`)
    const caterer=response.data
    const updatedPackage=packages.map(pkg=>{return({...pkg,catererId:catererId})})
    console.log(updatedPackage)
    updatedPackage.forEach(packages=>
       {
        async function updateDish(){
            const dishes=await axios.post(`http://3.6.41.54/api/dishes`,packages)
            const dishD=dishes.data
            const dishData=[{...dishD,_id:dishD.id,id:undefined}]
            let updatedCaterer;
            if(caterer.dishes){
                updatedCaterer={...caterer,dishes:[{...caterer.dishes,dishes:dishData}]}
            }else{
                updatedCaterer={...caterer,dishes:dishData}
            }
            console.log(updatedCaterer)
            console.log(updatedCaterer.dishes)
            const addDishes=await axios.patch(`http://3.6.41.54/api/caterer/${catererId}`,{dishes:updatedCaterer.dishes})
            console.log(addDishes)
        }
        updateDish()
    }
    )
  }

  const handleDishChange = (packageIndex, dishIndex, event) => {
    const updatedPackages = [...packages];
    if(event.target.name=='price'){
        updatedPackages[packageIndex].items[dishIndex][event.target.name] = Number(event.target.value);
    }else{
        updatedPackages[packageIndex].items[dishIndex][event.target.name] = event.target.value;
    }
    setPackages(updatedPackages);
  };

  const addDish = (packageIndex) => {
    const updatedPackages = [...packages];
    updatedPackages[packageIndex].items.push({ name: '', price: 0, quantity: '' });
    setPackages(updatedPackages);
  };

  const addPackage = () => {
    setPackages([...packages, { name: '', price: 0,dishType:'', items: [{ item: '', price:0, quantity: '' }] }]);
  };

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
                  {category.map((category,index) => (
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
                  {catererDish.map((catererDish,index) => (
                    <option key={index} value={catererDish.name}>
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
    <button type="button" onClick={(e)=>SubmitForm(e)} className={styles.addButton}>
        Submit
    </button>
  </>
  );
};