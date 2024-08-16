import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import styles from "./OrderPage.module.css";
import OrderPageDishes from "../../components/OrderPageDishes/OrderPageDishes";
import Card from "../../components/Card/Card";
import CatererInfo from "../../components/CatererInfo/CatererInfo";
import CuisinesOffered from "../../components/CuisinesOffered/CuisinesOffered";
import Reviews from "../../components/Reviews/Reviews";
import CatererSummary from "../../components/CatererSummary/CatererSummary";
import Map from "../../components/Map/Map";
import CatererDetails from "../../components/OrderPageCatererDetails/CatererDetails";
import {  CatererContext, } from "../../App";
import Spinner from "../../components/Spinner/Spinner";

const OrderPage = () => {
  const { id } = useParams();
  const {setCatererId}=useContext(CatererContext)

  const [catererData, setCatererData] = useState(null);

  useEffect(() => {
    const fetchCatererData = async () => {
      try {
        const response = await fetch(`http://3.6.41.54/api/caterer/${id}`);
        const data = await response.json();
        setCatererData(data);
      } catch (error) {
        console.error("Error fetching caterer data:", error);
      }
    };

    if (id) {
      fetchCatererData();
    }
  }, [id]);
  setCatererId(id)

  if (!catererData) {
    return <Spinner/>;
  }

  const catererName = catererData.name;
  const serviceStartYear = new Date(
    catererData.dishes[0].createdAt
  ).getFullYear();
  const catererInfo = catererData.extraInformation;
  const serviceSpecialist = catererData.specialistIn;
  const cuisines = catererData.cuisinesOffered;
  const serviceStartDate = new Date(catererData.inServiceFrom).getFullYear();
  const capacity = catererData.maximumServingCapacity;
  const cateringType = catererData.cateringType.join(", ");
  const serviceLocation = catererData.address;
  const reviews = catererData.review;

  return (
    <div className={styles.orderPage}>
      <CatererDetails />
      <div className={styles.mainSection}>
        <div className={styles.mainSectionLeft}>
          <Card
            catererName={catererName}
            tagline="Tag Line of the Caterer"
            serviceStartYear={serviceStartYear}
          />
          <OrderPageDishes dishes={catererData.dishes} />
          <CatererInfo
            info={catererInfo}
            serviceSpecialist={serviceSpecialist}
          />
          <CuisinesOffered cuisines={cuisines} />
          <Reviews reviews={reviews} />
        </div>
        <div className={styles.mainSectionRight}>
          <CatererSummary
            serviceStartDate={serviceStartDate}
            capacity={capacity}
            cateringType={cateringType}
            serviceLocation={serviceLocation}
          />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
