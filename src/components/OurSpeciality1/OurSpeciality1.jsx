// import React from 'react';
// import styles from './OurSpeciality1.module.css';

// const Ourspeciality1 = () => {
//   const recipes = [
//         {
//           title: "Breakfast",
//           imageUrl:
//             "https://themewagon.github.io/delfood/images/r1.jpg",
//         },
//         {
//           title: "Lunch",
//           imageUrl:
//             "https://themewagon.github.io/delfood/images/r2.jpg",
//         },
//         {
//           title: "Dinner",
//           imageUrl:
//             "https://themewagon.github.io/delfood/images/r3.jpg",
//         },
//       ];

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Our Best Popular Recipes</h2>
//       <div className={styles.recipesContainer}>
//         {recipes.map((recipe, index) => (
//           <div key={index} className={styles.recipeCard}>
//             <img src={recipe.imageUrl} alt={recipe.title} className={styles.recipeImage} />
//             <div className={styles.recipeFooter}>
//               <h3 className={styles.recipeTitle}>{recipe.title}</h3>
//               <div className={styles.arrow}>
//                 <span className={`fas fa-arrow-right ${styles.arrowIcon}`}></span> {/* Font Awesome arrow icon */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className={styles.orderButton}>Order Now</button>
//     </div>
//   );
// };

// export default Ourspeciality1;


import styles from './OurSpeciality1.module.css';

const OurSpeciality1 = () => {
  return (
    <section className={styles.specialitySection}>
      <div className={styles.container}>
        <h2>Our Best Popular Recipes</h2>
        <div className={styles.recipesContainer}>
          <div className={styles.recipeCard}>
            <img src="https://themewagon.github.io/delfood/images/r1.jpg" alt="Breakfast" className={styles.recipeImage} />
            <div className={styles.recipeTitle}>
              <h3>Breakfast</h3>
              <a href="" className={styles.arrowButton}><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
          <div className={styles.recipeCard}>
            <img src="https://themewagon.github.io/delfood/images/r2.jpg" alt="Lunch" className={styles.recipeImage} />
            <div className={styles.recipeTitle}>
              <h3>Lunch</h3>
              <a href="" className={styles.arrowButton}><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
          <div className={styles.recipeCard}>
            <img src="https://themewagon.github.io/delfood/images/r3.jpg" alt="Dinner" className={styles.recipeImage} />
            <div className={styles.recipeTitle}>
              <h3>Dinner</h3>
              <a href="" className={styles.arrowButton}><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSpeciality1;
