import React from 'react'
import styles from './Steps.module.css'

export default function Steps({currentStep}) {
  return (
    <div className={styles.stepperContainer}>
      <div className={`${styles.step} ${currentStep >= 1 ? styles.completed : ''}`}>
        <div className={styles.stepCircle}>
          {currentStep > 1 ? <span className={styles.checkmark}>✓</span> : '1'}
        </div>
        <div className={styles.stepLabel}>
          <strong>First Step</strong>
          <p>Basic Details</p>
        </div>
        </div>
      
      <div className={`${styles.step} ${currentStep >= 2 ? styles.completed : ''}`}>
        <div className={styles.stepCircle}>
          {currentStep > 2 ? <span className={styles.checkmark}>✓</span> : '2'}
        </div>
        <div className={styles.stepLabel}>
          <strong>Second step</strong>
          <p>Add Menu Item</p>
        </div>
        </div>
      
      
      <div className={`${styles.step} ${currentStep >= 3 ? styles.completed : ''}`}>
        <div className={styles.stepCircle}>{currentStep === 3 ? '3' : '3'}</div>
        <div className={styles.stepLabel}>
          <strong>Final step</strong>
          <p>Add Custom Pricing</p>
        </div>
        </div>
      
    </div>
  )
}
