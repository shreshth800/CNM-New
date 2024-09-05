import { Outlet } from "react-router-dom";
import Footer1 from "./Footer/Footer";
import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";
import NewFrontend from "./NewFrontend";


export default function AppLayout(){
    return(
        <main>
        {/* <ToastContainer/> */}
        <Header />
        {/* <Outlet/> */}
      <NewFrontend />
      </main>
    )
 }