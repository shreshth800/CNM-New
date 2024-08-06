import React from "react";
import styles from "./OrderPage.module.css";
import OrderPageDishes from "../../components/OrderPageDishes/OrderPageDishes";
import Card from "../../components/Card/Card";
import CatererInfo from "../../components/CatererInfo/CatererInfo";
import CuisinesOffered from "../../components/CuisinesOffered/CuisinesOffered";
import Reviews from "../../components/Reviews/Reviews";
import CatererSummary from "../../components/CatererSummary/CatererSummary";
import Map from "../../components/Map/Map";
import CatererDetails from "../../components/OrderPageCatererDetails/CatererDetails";

const OrderPage = () => {
  return (
    <>
      <div className={styles.orderPage}>
        <CatererDetails />
        <div className={styles.mainSection}>
          <div className={styles.mainSectionLeft}>
            <Card />
            <OrderPageDishes />
            <CatererInfo />
            <CuisinesOffered />
            <Reviews />
          </div>
          <div className={styles.mainSectionRight}>
            <CatererSummary />
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
