import React from "react";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Ourspeciality1 from "../../components/OurSpeciality1/OurSpeciality1";
import useAuth from "../../hooks/useAuth";
import CatererDashboard from "../CatererDashboard/CatererDashboard";
import AboutUsNew from "../../components/AboutUsNew/AboutUsNew";
import ArtGallery from "../../components/ArtGallery/ArtGallery";

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
      <ArtGallery/>
    </>
  );
};

export default HomePage;
