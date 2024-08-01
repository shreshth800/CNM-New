// import React from "react";
// import styles from "./Header.module.css";
// import CNMLogo from "../../assets/CNMLogo-NoBG.png";

// const Header = () => {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <img className={styles.logoImg} src={CNMLogo} alt="CNM" />
//         <h1>Caterersnearme</h1>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React from "react";
import styles from "./Header.module.css";
import CNMLogo from "../../assets/CNMLogo-NoBG.png";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.imgContainer}>
          <img className={styles.logoImg} src={CNMLogo} alt="CNM" />
        </div>
        <h1 className={styles.logoText}>Caterersnearme</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
