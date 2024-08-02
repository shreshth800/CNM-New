import React from 'react';
import styles from './HowItWorks.module.css';
import searchIcon from '../../assets/icons/search.png';
import discoverIcon from '../../assets/icons/discover.png';
import menuIcon from '../../assets/icons/menu.png';
import checkoutIcon from '../../assets/icons/checkout.png';
import deliveryIcon from '../../assets/icons/delivery.png';
import rightArrow from '../../assets/icons/right-arrow.png';
import leftArrow from '../../assets/icons/right-arrow.png';

const HowItWorks = () => {
  const steps = [
    { id: 1, title: 'Search', icon: searchIcon },
    { id: 2, title: 'Discover', icon: discoverIcon },
    { id: 3, title: 'Choose food', icon: menuIcon },
    { id: 4, title: 'Submit Order', icon: checkoutIcon },
    { id: 5, title: 'Receive Order', icon: deliveryIcon }
  ];

  return (
    <div className={styles.howItWorks}>
      <h2>How Caterer Near Me Works</h2>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div key={step.id} className={styles.step}>
            <div className={styles.stepIcon}>
              <img src={step.icon} alt={`${step.title} icon`} />
              <div className={styles.stepNumber}>{step.id}</div>
            </div>
            <h3>{step.title}</h3>
            {index < steps.length - 1 && (
              <div className={styles.connector}>
                <img src={index % 2 === 0 ? rightArrow : leftArrow} alt="arrow" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;