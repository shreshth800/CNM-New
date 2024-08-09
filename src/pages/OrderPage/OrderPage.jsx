import React, { useEffect, useState } from "react";
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
  const [catererData, setCatererData] = useState(null);

  useEffect(() => {
    const fetchCatererData = async () => {
      try {
        const response = await fetch(
          "http://3.6.41.54/api/caterer/666095d61be89c4a23318324"
        );
        const data = await response.json();
        setCatererData(data);
      } catch (error) {
        console.error("Error fetching caterer data:", error);
      }
    };

    fetchCatererData();
  }, []);

  if (!catererData) {
    return <div>Loading...</div>;
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
