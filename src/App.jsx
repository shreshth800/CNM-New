import React, { createContext, Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
const CatererSearch=React.lazy(()=>import("./pages/CatererSearch/CatererSearch"));
const OrderPage=React.lazy(()=>import("./pages/OrderPage/OrderPage"));
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const AddToCart = React.lazy(() => import('./pages/AddToCart/AddToCart'));
const Bill = React.lazy(() => import('./pages/Bill/Bill'));
const MyOrder = React.lazy(()=> import('./pages/MyOrders/MyOrder'))
const AppLayout = React.lazy(() => import('./components/AppLayout'));

export const CatererContext=createContext()
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading App Layout...</div>}>
          <AppLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading Home Page...</div>}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "/caterer",
          element: (
            <Suspense fallback={<div>Loading Caterer Search...</div>}>
              <CatererSearch />
            </Suspense>
          ),
        },
        {
          path: "/caterer/:id",
          element: (
                <Suspense fallback={<div>Loading Order Page...</div>}>
                <OrderPage />
              </Suspense>
            
          ),
        },
        {
          path: "/add-to-cart",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<div>Loading Add to Cart...</div>}>
                <AddToCart />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "/bill",
          element: (
            <ProtectedRoute>
              <Suspense fallback={<div>Loading Bill...</div>}>
                <Bill />
              </Suspense>
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-orders",
          element: (
            <Suspense fallback={<div>Loading My Orders...</div>}>
              <MyOrder />
            </Suspense>
          ),
        },
      ],
    },
  ]);
const [catererId,setCatererId]=useState('')
  return (
    <>
    <CatererContext.Provider value={{
      catererId,
      setCatererId
    }}>
      <RouterProvider router={router} />
    </CatererContext.Provider>
    </>
  );
}

export default App;
