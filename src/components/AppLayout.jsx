import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";
import Footer1 from "./Footer1/Footer1"

export default function AppLayout() {
  return (
    <main>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer1 />
    </main>
  );
}
