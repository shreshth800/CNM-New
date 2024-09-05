import React, { useState, useEffect, useContext } from "react";
import styles from "./Header.module.css";
import CNMLogo from "../../assets/CNMLogo-NoBG.png";
import LoginRegisterModal from "../loginRegisterModal/LoginRegisterModal";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { CatererContext } from "../../App";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [isLoggedName, setIsLoggedName] = useState(false);
  const { isCaterer, setIsCaterer } = useContext(CatererContext);
  const navigate = useNavigate();
  const { setUser } = useAuth();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      if (user.role.id == 3) {
        setIsCaterer(true);
      }
    }
  }, []);

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    if (storedFirstName) {
      setFirstName(storedFirstName);
      setIsLoggedName(true);
    }

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

    const handleStorageChange = (event) => {
      if (event.key === "firstName") {
        if (event.newValue) {
          setFirstName(event.newValue);
          setIsLoggedName(true);
        } else {
          setFirstName("");
          setIsLoggedName(false);
          navigate("/");
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate, setIsCaterer]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSignout = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("firstName");
    setIsCaterer(false);
    setUser({});
    setFirstName("");
    setIsLoggedName(false); // Reset isLoggedName on signout
    navigate("/");
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          {/* <div className={styles.imgContainer}>
            <img className={styles.logoImg} src={CNMLogo} alt="CNM" />
          </div> */}
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
                {!isCaterer && (
                  <li
                    className={styles.findCaterers}
                    onClick={() => navigate("caterer")}
                  >
                    Find Caterers
                  </li>
                )}
                {isLoggedName && <li className={styles.booking}>Bookings</li>}
                <li className={styles.navContact}>+91 123456789</li>
                {!isLoggedName && (
                  <li className={styles.navLogin} onClick={openModal}>
                    Login/Register
                  </li>
                )}
                {isLoggedName && (
                  <li className={styles.navProfile}>{firstName}</li>
                )}
                {isLoggedName && (
                  <li onClick={handleSignout} className={styles.signout}>
                    SignOut
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <ul className={`${styles.navLinks} ${styles.rowUl}`}>
          {/* {!isCaterer && (
            <li
              className={styles.findCaterers}
              onClick={() => navigate("caterer")}
            >
              Find Caterers
            </li>
          )} */}
          {/* {isLoggedName && (
            <li
              className={styles.booking}
              onClick={() => navigate("/my-orders")}
            >
              Bookings
            </li>
          )} */}
          {/* <li className={styles.navContact}>+91 123456789</li> */}
          {!isLoggedName && (
            <li className={styles.navLogin} onClick={openModal}>
              Login/Register
            </li>
          )}
          {isLoggedName && (
            <li
              onClick={() => navigate("/create-menu")}
              className={styles.navProfile}
            >
              {firstName}
            </li>
          )}
          {isLoggedName && (
            <li className={styles.signout} onClick={handleSignout}>
              SignOut
            </li>
          )}
        </ul>
      </nav>
      <LoginRegisterModal
        firstName={firstName}
        setFirstName={(name) => {
          setFirstName(name);
          setIsLoggedName(true);
          localStorage.setItem("firstName", name);
        }}
        setIsLoggedName={setIsLoggedName}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Header;
