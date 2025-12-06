import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Homepage from "../pages/Homepage";
import Comments from "../pages/Comments";
import ErrorPage from "../pages/ErrorPage";
import { lazy, Suspense } from "react";
import { ProductSection } from "../components/ProductSection";
import Cart from "../pages/Cart";

const ProductDetails = lazy(() => import("../pages/ProductDetails"));

const Route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // nav , footer
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/products",
        element: <ProductSection />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:product_id",
        element: (
          <Suspense fallback={"<<>Loading...<>>"}>
            <ProductDetails />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default Route;
