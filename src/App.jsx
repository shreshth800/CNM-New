import HomePage from "./pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CatererSearch from "./pages/CatererSearch/CatererSearch";
import AppLayout from "../src/components/AppLayout";
import OrderPage from "./pages/OrderPage/OrderPage";
import AddToCart from "./pages/AddToCart/AddToCart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/caterer-search",
          element: <CatererSearch />,
        },
        {
          path: "/order",
          element: <OrderPage />,
        },
        {
          path:"/add-to-cart",
          element:<AddToCart />
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
