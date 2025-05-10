import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/Error/Error-page';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard'
import ProductDetails from './Components/Main/ProductDetails';
import { CartProvider } from './Context/Cart&WishlistContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../public/Products.json'),
      },
      {
        path: "/productdetails",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/statistics",
        element: <Statistics> </Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../public/Products.json'),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <StrictMode>
     <RouterProvider router={router} />
    </StrictMode>,
  </CartProvider>
)
