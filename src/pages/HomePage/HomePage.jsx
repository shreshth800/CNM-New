import React from "react";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Ourspeciality from "../../components/Ourspeciality/Ourspeciality";
import Gallery from "../../components/Gallery/Gallery";
import Ourspeciality1 from "../../components/OurSpeciality1/OurSpeciality1";
import useAuth from "../../hooks/useAuth";
import CatererDashboard from "../CatererDashboard/CatererDashboard";
import AboutUsNew from "../../components/AboutUsNew/AboutUsNew";
import Footer1 from "../../components/Footer1/Footer1";

const HomePage = () => {
  const { user } = useAuth();

  if (user.user) {
    if (user.user.role && user.user.role.id === "3") {
      return <CatererDashboard />;
    }
  }

  // console.log(user);

  return (
    <>
      <AboutUsSection />
      <Ourspeciality1 />
      <AboutUsNew />
      {/* <Ourspeciality />
      <Gallery />
      <HowItWorks /> */}
      <Footer1 />
    </>
  );
};

export default HomePage;
