import React from "react";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Ourspeciality from "../../components/Ourspeciality/Ourspeciality";
const HomePage = () => {
  return (
    <>
      <AboutUsSection />
      <Ourspeciality/>
      <HowItWorks />
    </>
  );
};

export default HomePage;
