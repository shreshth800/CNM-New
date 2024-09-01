import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";

export default function AppLayout(){
    return(
        <main>
          <ToastContainer/>
        <Header />
        <Outlet/>
      <Footer />
      </main>
    )
 }