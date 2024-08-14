import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import CNMLogo from "../../assets/CNMLogo-NoBG.png";
import LoginRegisterModal from "../loginRegisterModal/LoginRegisterModal";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();
  console.log(firstName);

  useEffect(() => {
    const handleClick = (e) => {
      const isDropDownButton = e.target.matches("[data-dropdown-button]");
      if (!isDropDownButton && e.target.closest("[data-dropdown]") != null)
        return;

      let currentDropdown;

      if (isDropDownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle(styles.active);
      }

      document
        .querySelectorAll(`[data-dropdown].${styles.active}`)
        .forEach((dropdown) => {
          if (dropdown === currentDropdown) return;
          dropdown.classList.remove(styles.active);
        });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSignout = () => {
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setFirstName("");
    navigate("/");
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.imgContainer}>
            <img className={styles.logoImg} src={CNMLogo} alt="CNM" />
          </div>
          <h1 className={styles.logoText} onClick={() => navigate("/")}>
            CATERERSNEARME
          </h1>
        </div>
        <div className={styles.hamburger}>
          <div className={styles.dropdown} data-dropdown>
            <button className={styles.hamburgerBtn} data-dropdown-button>
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className={styles.dropdownMenu}>
              <ul className={styles.navLinks}>
                <li
                  className={styles.findCaterers}
                  onClick={() => navigate("caterer-search")}
                >
                  Find Caterers
                </li>
                {firstName && <li className={styles.booking}>Bookings</li>}
                <li className={styles.navContact}>+91 123456789</li>
                {!firstName && (
                  <li className={styles.navLogin} onClick={openModal}>
                    Login/Register
                  </li>
                )}
                {firstName && (
                  <li className={styles.navProfile}>{firstName}</li>
                )}
                {firstName && (
                  <li onClick={handleSignout} className={styles.signout}>
                    SignOut
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <ul className={`${styles.navLinks} ${styles.rowUl}`}>
          <li
            className={styles.findCaterers}
            onClick={() => navigate("caterer-search")}
          >
            Find Caterers
          </li>
          {firstName && <li className={styles.booking} onClick={()=> navigate("/my-orders")}>Bookings</li>}
          <li className={styles.navContact}>+91 123456789</li>
          {!firstName && (
            <li className={styles.navLogin} onClick={openModal}>
              Login/Register
            </li>
          )}
          {firstName && <li className={styles.navProfile}>{firstName}</li>}
          {firstName && <li className={styles.signout}>SignOut</li>}
        </ul>
      </nav>
      <LoginRegisterModal
        firstName={firstName}
        setFirstName={setFirstName}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Header;
