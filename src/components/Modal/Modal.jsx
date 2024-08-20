import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css"; // Ensure you have this CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target.className === "modaloverlay") {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={Styles.modaloverlay} onClick={handleClickOutside}>
      <div className={Styles.modalcontent}>
        <button className={Styles.modalclose} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
