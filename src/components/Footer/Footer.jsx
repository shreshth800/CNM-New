// Footer/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css'; // Import the CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Caterersnearme. All rights reserved.</p>
      </div>
      <div className={styles.footerIcons}>
          <a href="https://www.linkedin.com/company/caterersnearme/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.facebook.com/people/caterersnearme/61558542239502" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/caterersnearme/?igsh=ZTBieXMzNXJsZXBm" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
