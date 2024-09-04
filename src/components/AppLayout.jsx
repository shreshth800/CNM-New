import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";
import AboutUs from "./AboutUs/AboutUs";
import LatestNews from "./LatestNews/LatestNews";
import Footer1 from "./Footer1";

export default function AppLayout(){
    return(
        <main>
          {/* <ToastContainer/>
        <Header />
        <Outlet/>
      <Footer /> */}
      <AboutUs/>
      <LatestNews/>
      <Footer1/>
      </main>
    )
 }