import React, { useState } from "react";
import styles from "./SideBar.module.css";
import Modal from "../Modal/Modal";
import IncreaseQuantity from "../IncreaseQuantity/IncreaseQuantity";

const SideBar = ({ categories, selectedCategory, onCategorySelect,storageObject,setStorageObject,initialState}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className={styles.sidebar}>
      <Modal isOpen={isModalOpen} onClose={closeModal}><IncreaseQuantity closeModal={closeModal} initialState={initialState} setStorageObject={setStorageObject} storageObject={storageObject}/></Modal>
      <div className={styles.category}>
      <h3>Menu for {JSON.parse(localStorage.getItem('dishDetails')).name}</h3>
      <button className={styles.btn} onClick={openModal}>&#43;</button>
      </div>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            className={selectedCategory === category ? styles.selected : ""}
            onClick={() => onCategorySelect(category)}
          ><div className={styles.category}>
            {category} <span className={styles.quantity}>{storageObject[index].quantity}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
