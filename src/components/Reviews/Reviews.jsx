import React from "react";
import styles from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <div className={styles.review} key={index}>
          <p>{review}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
