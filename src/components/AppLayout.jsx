import { Outlet } from "react-router-dom";
import Footer1 from "./Footer/Footer";
import OurSpeciality1 from "./OurSpeciality1/OurSpeciality1";
import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";


export default function AppLayout(){
    return(
        <main>
        <ToastContainer/>
        <Header />
        <Outlet />
        <OurSpeciality1 />
      {/* <NewFrontend /> */}
      </main>
    )
 }