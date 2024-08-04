import React from "react";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Ourspeciality from "../../components/Ourspeciality/Ourspeciality";
import Gallery from "../../components/Gallery/Gallery";
const HomePage = () => {
  return (
    <>
      <AboutUsSection />
      <Ourspeciality/>
      <Gallery/>
      <HowItWorks />
    </>
  );
};

export default HomePage;
