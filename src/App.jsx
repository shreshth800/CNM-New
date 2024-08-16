import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Spinner from "./components/Spinner/Spinner";
const CatererSearch=React.lazy(()=>import("./pages/CatererSearch/CatererSearch"));
const OrderPage=React.lazy(()=>import("./pages/OrderPage/OrderPage"));
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const AddToCart = React.lazy(() => import('./pages/AddToCart/AddToCart'));
const Bill = React.lazy(() => import('./pages/Bill/Bill'));

const MyOrder = React.lazy(()=> import('./pages/MyOrders/MyOrder'))
const AppLayout = React.lazy(() => import('./components/AppLayout'));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Spinner/>}>
          <AppLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Spinner/>}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "/caterer-search",
          element: (
            <Suspense fallback={<Spinner/>}>
              <CatererSearch />
            </Suspense>
          ),
        },
        {
          path: "/order/:id",
          element: (
                <Suspense fallback={<Spinner/>}>
                <OrderPage />
              </Suspense>
            
          ),
        },
        {
          path: "/add-to-cart/:dishId",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Spinner/>}>
                <AddToCart />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "/bill",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<Spinner/>}>
                <Bill />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-orders",
          element: (
            <Suspense fallback={<Spinner/>}>
              <MyOrder />
            </Suspense>
          ),
        },
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
