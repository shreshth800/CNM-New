import React from "react";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Ourspeciality from "../../components/Ourspeciality/Ourspeciality";
import Gallery from "../../components/Gallery/Gallery";
import useAuth from "../../hooks/useAuth";
import CatererDashboard from "../CatererDashboard/CatererDashboard";
import AboutUsNew from "../../components/AboutUsNew/AboutUsNew";

const HomePage = () => {
  const { user } = useAuth();

  if (user.user) {
    if (user.user.role && user.user.role.id === "3") {
      return <CatererDashboard />;
    }
  }

  console.log(user);

  return (
    <>
      <AboutUsSection />
      <AboutUsNew />
      {/* <Ourspeciality />
      <Gallery />
      <HowItWorks /> */}
    </>
  );
};

export default HomePage;
