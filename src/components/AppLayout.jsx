import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";
import Footer from './Footer/Footer'

export default function AppLayout() {
  return (
    <main>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer/>
    </main>
  );
}
