// import React, { useState } from 'react';
// import styles from './LoginRegister.module.css';

// const LoginRegisterModal = ({ show, handleClose }) => {
//   const [key, setKey] = useState('login');

//   if (!show) return null;

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modal}>
//         <div className={styles.modalHeader}>
//           <h2>{key === 'login' ? 'Login' : 'Register'}</h2>
//           <button className={styles.closeButton} onClick={handleClose}>
//             &times;
//           </button>
//         </div>
//         <div className={styles.modalBody}>
//           <div className={styles.tabButtons}>
//             <button
//               className={`${styles.tabButton} ${key === 'login' && styles.active}`}
//               onClick={() => setKey('login')}
//             >
//               Login
//             </button>
//             <button
//               className={`${styles.tabButton} ${key === 'register' && styles.active}`}
//               onClick={() => setKey('register')}
//             >
//               Register
//             </button>
//           </div>
//           {key === 'login' ? (
//             <form>
//               <div className={styles.formGroup}>
//                 <label>Email address</label>
//                 <input type="email" placeholder="Enter email" />
//               </div>
//               <div className={styles.formGroup}>
//                 <label>Password</label>
//                 <input type="password" placeholder="Password" />
//               </div>
//               <button type="submit" className={styles.submitButton}>
//                 Login
//               </button>
//             </form>
//           ) : (
//             <form>
//               <div className={styles.formGroup}>
//                 <label>Email address</label>
//                 <input type="email" placeholder="Enter email" />
//               </div>
//               <div className={styles.formGroup}>
//                 <label>Password</label>
//                 <input type="password" placeholder="Password" />
//               </div>
//               <div className={styles.formGroup}>
//                 <label>Confirm Password</label>
//                 <input type="password" placeholder="Confirm Password" />
//               </div>
//               <button type="submit" className={styles.submitButton}>
//                 Register
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginRegisterModal;







// src/components/LoginRegisterModal/LoginRegisterModal.jsx
import React, { useState } from "react";
import styles from "./LoginRegisterModal.module.css";

const LoginRegisterModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <div className={styles.tabButtons}>
          <button
            className={`${styles.tabButton} ${isLogin ? styles.active : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`${styles.tabButton} ${!isLogin ? styles.active : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        {isLogin ? (
          <form>
            <div className={styles.formGroup}>
              <label>Email address</label>
              <input type="email" placeholder="Enter email" required />
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        ) : (
          <form>
            <div className={styles.formGroup}>
              <label>Email address</label>
              <input type="email" placeholder="Enter email" required />
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input type="password" placeholder="Password" required />
            </div>
            <div className={styles.formGroup}>
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <button type="submit" className={styles.submitButton}>
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterModal;
