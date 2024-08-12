import React from 'react'
import styles from './Modal.module.css'

export default function Modal({children,onClose}) {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      };
  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
        <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
            {children}
        </div>
        </div>
  )
}
