import React, { useState } from 'react';
import Styles from './IncreaseQuantity.module.css';
import Table from '../table/Table';

export default function IncreaseQuantity({closeModal, storageObject, setStorageObject}) {
  const [updatedQuantities, setUpdatedQuantities] = useState(storageObject.map(item =>item=0));
  const handleQuantityChange = (index, newValue) => {
    const updatedQuantitiesCopy = [...updatedQuantities];
    updatedQuantitiesCopy[index] =Number(newValue);
    setUpdatedQuantities(updatedQuantitiesCopy);
  };

  const handleSubmit = () => {
    const updatedStorageObject = storageObject.map((item, index) => ({
      ...item,
      addon:item.addon+updatedQuantities[index],
      quantity:item.quantity+updatedQuantities[index]
    }));
    setStorageObject(updatedStorageObject);
    setUpdatedQuantities(updatedQuantities=>updatedQuantities=storageObject.map(item =>item=0))
    closeModal()
  };
  return (
    <>
      <h3>Add on Menus</h3>
      <table className={Styles.menutable}>
        <thead>
          <tr>
            <th>#</th>
            <th>Menu Title</th>
            <th>Price</th>
            <th>Add Extra Menu</th>
          </tr>
        </thead>
        <tbody>
          {storageObject.map((item, index) => (
            <Table
              key={item._id}
              index={index}
              item={item}
              value={updatedQuantities[index]}
              onValueChange={(newValue) => handleQuantityChange(index, newValue)}
            />
          ))}
        </tbody>
      </table>
      <button className={Styles.botn} onClick={handleSubmit}>Submit</button>
    </>
  );
}

