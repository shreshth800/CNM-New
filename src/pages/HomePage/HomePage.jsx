import React from "react";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Ourspeciality from "../../components/Ourspeciality/Ourspeciality";
import Gallery from "../../components/Gallery/Gallery";
import useAuth from "../../hooks/useAuth";
const HomePage = () => {
  const { user, setUser } = useAuth();
  console.log(user);
  return (
    <>
      <AboutUsSection />
      <Ourspeciality />
      <Gallery />
      <HowItWorks />
    </>
  );
};

export default HomePage;
