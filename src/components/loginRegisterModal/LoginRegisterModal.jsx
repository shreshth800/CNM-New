// // import React, { useState } from 'react';
// // import styles from './LoginRegister.module.css';

// // const LoginRegisterModal = ({ show, handleClose }) => {
// //   const [key, setKey] = useState('login');

// //   if (!show) return null;

// //   return (
// //     <div className={styles.modalOverlay}>
// //       <div className={styles.modal}>
// //         <div className={styles.modalHeader}>
// //           <h2>{key === 'login' ? 'Login' : 'Register'}</h2>
// //           <button className={styles.closeButton} onClick={handleClose}>
// //             &times;
// //           </button>
// //         </div>
// //         <div className={styles.modalBody}>
// //           <div className={styles.tabButtons}>
// //             <button
// //               className={`${styles.tabButton} ${key === 'login' && styles.active}`}
// //               onClick={() => setKey('login')}
// //             >
// //               Login
// //             </button>
// //             <button
// //               className={`${styles.tabButton} ${key === 'register' && styles.active}`}
// //               onClick={() => setKey('register')}
// //             >
// //               Register
// //             </button>
// //           </div>
// //           {key === 'login' ? (
// //             <form>
// //               <div className={styles.formGroup}>
// //                 <label>Email address</label>
// //                 <input type="email" placeholder="Enter email" />
// //               </div>
// //               <div className={styles.formGroup}>
// //                 <label>Password</label>
// //                 <input type="password" placeholder="Password" />
// //               </div>
// //               <button type="submit" className={styles.submitButton}>
// //                 Login
// //               </button>
// //             </form>
// //           ) : (
// //             <form>
// //               <div className={styles.formGroup}>
// //                 <label>Email address</label>
// //                 <input type="email" placeholder="Enter email" />
// //               </div>
// //               <div className={styles.formGroup}>
// //                 <label>Password</label>
// //                 <input type="password" placeholder="Password" />
// //               </div>
// //               <div className={styles.formGroup}>
// //                 <label>Confirm Password</label>
// //                 <input type="password" placeholder="Confirm Password" />
// //               </div>
// //               <button type="submit" className={styles.submitButton}>
// //                 Register
// //               </button>
// //             </form>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginRegisterModal;

// import React, { useState } from "react";
// import styles from "./LoginRegisterModal.module.css";

// const LoginRegisterModal = ({ isOpen, onClose }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [role, setRole] = useState('USER'); // State for role

//   if (!isOpen) return null;

//   const handleRoleChange = (event) => {
//     setRole(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const roleValue = role === 'USER' ? 2 : 3; // Convert role to backend values
//     formData.set('role', roleValue);
//     // Submit the form data to the backend here
//     console.log('Form data:', Object.fromEntries(formData));
//   };

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeButton} onClick={onClose}>
//           &times;
//         </button>
//         <h2>{isLogin ? "Login" : "Register"}</h2>
//         <div className={styles.tabButtons}>
//           <button
//             className={`${styles.tabButton} ${isLogin ? styles.active : ""}`}
//             onClick={() => setIsLogin(true)}
//           >
//             Login
//           </button>
//           <button
//             className={`${styles.tabButton} ${!isLogin ? styles.active : ""}`}
//             onClick={() => setIsLogin(false)}
//           >
//             Register
//           </button>
//         </div>
//         {isLogin ? (
//           <form onSubmit={handleSubmit}>
//             <div className={styles.formGroup}>
//               <label>Email address</label>
//               <input type="email" name="email" placeholder="Enter email" required />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Password</label>
//               <input type="password" name="password" placeholder="Password" required />
//             </div>
//             <button type="submit" className={styles.submitButton}>
//               Login
//             </button>
//           </form>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <div className={styles.formGroup}>
//               <label>First Name</label>
//               <input type="text" name="firstName" placeholder="Enter First Name" required />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Last Name</label>
//               <input type="text" name="lastName" placeholder="Enter Last Name" required />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Email address</label>
//               <input type="email" name="email" placeholder="Enter email" required />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Password</label>
//               <input type="password" name="password" placeholder="Password" required />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Confirm Password</label>
//               <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Role</label>
//               <div className={styles.radioButton}>
//                 <div>
//                   <input
//                     type="radio"
//                     id="roleUser"
//                     name="role"
//                     value="USER"
//                     checked={role === 'USER'}
//                     onChange={handleRoleChange}
//                   />
//                   <label htmlFor="roleUser">User</label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     id="roleCaterer"
//                     name="role"
//                     value="CATERER"
//                     checked={role === 'CATERER'}
//                     onChange={handleRoleChange}
//                   />
//                   <label htmlFor="roleCaterer">Caterer</label>
//                 </div>
//               </div>
//             </div>
//             <button type="submit" className={styles.submitButton}>
//               Register
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginRegisterModal;

// import React, { useState } from "react";
// import styles from "./LoginRegisterModal.module.css";

// const LoginRegisterModal = ({ isOpen, onClose }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('USER'); // State for role

//   if (!isOpen) return null;

//   const handleRoleChange = (event) => {
//     setRole(event.target.value);
//   };

//   const handleLoginSubmit = async (event) => {
//     event.preventDefault();

//     const loginData = {
//       email,
//       password,
//     };

//     try {
//       const response = await fetch('http://3.6.41.54/api/auth/email/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (!response.ok) {
//         alert("Login Failed")
//         throw new Error('Login failed');
//       }

//       const result = await response.json();
//       // Handle successful login (e.g., store tokens, redirect, etc.)
//       console.log('Login successful:', result);
//       alert("login successfull")
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle login error (e.g., show error message)
//     }
//   };

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeButton} onClick={onClose}>
//           &times;
//         </button>
//         <h2>{isLogin ? "Login" : "Register"}</h2>
//         <div className={styles.tabButtons}>
//           <button
//             className={`${styles.tabButton} ${isLogin ? styles.active : ""}`}
//             onClick={() => setIsLogin(true)}
//           >
//             Login
//           </button>
//           <button
//             className={`${styles.tabButton} ${!isLogin ? styles.active : ""}`}
//             onClick={() => setIsLogin(false)}
//           >
//             Register
//           </button>
//         </div>
//         {isLogin ? (
//           <form onSubmit={handleLoginSubmit}>
//             <div className={styles.formGroup}>
//               <label>Email address</label>
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Password</label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button type="submit" className={styles.submitButton}>
//               Login
//             </button>
//           </form>
//         ) : (
//           <form>
//             <div className={styles.formGroup}>
//               <label>First Name</label>
//               <input type="text" placeholder="Enter First Name" required />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Last Name</label>
//               <input type="text" placeholder="Enter Last Name" required />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Email address</label>
//               <input type="email" placeholder="Enter email" required />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Password</label>
//               <input type="password" placeholder="Password" required />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Confirm Password</label>
//               <input type="password" placeholder="Confirm Password" required />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Role</label>
//               <div className={styles.radioButton}>
//                 <div>
//                   <input
//                     type="radio"
//                     id="roleUser"
//                     name="role"
//                     value="USER"
//                     checked={role === 'USER'}
//                     onChange={handleRoleChange}
//                   />
//                   <label htmlFor="roleUser">User</label>
//                 </div>
//                 <div>
//                   <input
//                     type="radio"
//                     id="roleCaterer"
//                     name="role"
//                     value="CATERER"
//                     checked={role === 'CATERER'}
//                     onChange={handleRoleChange}
//                   />
//                   <label htmlFor="roleCaterer">Caterer</label>
//                 </div>
//               </div>
//             </div>
//             <button type="submit" className={styles.submitButton}>
//               Register
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginRegisterModal;

import React, { useState, useEffect, useContext } from "react";
import useAuth from "../../hooks/useAuth";
import styles from "./LoginRegisterModal.module.css";
import { CatererContext } from "../../App";

const LoginRegisterModal = ({
  setIsLoggedName,
  firstName,
  setFirstName,
  isOpen,
  onClose,
}) => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [lastName, setLastName] = useState(""); // State for last name input (registration)
  const [phone, setPhone] = useState(""); // State for phone input (registration)
  const [role, setRole] = useState("USER"); // State to select between User or Caterer role
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password input (registration)
  const {setIsCaterer}=useContext(CatererContext)

  const { setUser } = useAuth();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null; // If modal is not open, return null to prevent rendering

  // Handle role change between User and Caterer
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  // Handle click outside of modal content to close modal
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Handle login form submission
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://3.6.41.54/api/auth/email/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        alert("Login Failed");
        throw new Error("Login failed");
      }

      const result = await response.json();
      setIsLoggedName(true); // Set the logged-in user's first name
      setFirstName(result.user.firstName);
      localStorage.setItem("token", result.token); // Store tokens and user data in localStorage
      localStorage.setItem("refreshToken", result.refreshToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      setUser({ user: result.user, token: result.token }); // Set user state

      alert("Login successful");
      setIsCaterer(true)
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle registration form submission
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const registerData = {
      email,
      password,
      phone,
      firstName,
      lastName,
      role: role === "USER" ? "2" : "3", // Set role based on selection
    };

    try {
      const response = await fetch("http://3.6.41.54/api/auth/email/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        alert("Registration Failed");
        throw new Error("Registration failed");
      }

      alert("Registration successful");
      setIsLogin(true); // Switch to login mode after successful registration
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
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
          <form onSubmit={handleLoginSubmit}>
            <div className={styles.formGroup}>
              <label>Email address</label>
              <input
                type="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        ) : (
          <form
            className={styles.registrationForm}
            onSubmit={handleRegisterSubmit}
          >
            <div className={styles.formGroup}>
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email address</label>
              <input
                type="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Phone</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Role</label>
              <div className={styles.radioButton}>
                <div>
                  <input
                    type="radio"
                    id="roleUser"
                    name="role"
                    value="USER"
                    checked={role === "USER"}
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="roleUser">User</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="roleCaterer"
                    name="role"
                    value="CATERER"
                    checked={role === "CATERER"}
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="roleCaterer">Caterer</label>
                </div>
              </div>
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

