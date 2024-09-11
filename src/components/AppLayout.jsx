import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";

export default function AppLayout() {
  return (
    <main>
      <ToastContainer />
      <Header />
      <Outlet />
    </main>
  );
}
