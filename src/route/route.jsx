import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Homepage from "../pages/Homepage";
import Comments from "../pages/Comments";
import ErrorPage from "../pages/ErrorPage";
import ImagePage from "../pages/ImagePage";
import Contact from "../pages/Contact/Contact";
import { lazy, Suspense } from "react";
import ComponentA from "../pages/Prop/ComponentA";
import { ProductSection } from "../components/ProductSection";
import Cart from "../pages/Cart";
import Expensive from "../pages/Expensive";

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
        path: "/comments",
        element: <Comments />, // comments
      },
      {
        path: "/imagepage",
        element: <ImagePage />, // comments
      },
      {
        path: "/contact",
        element: <Contact />, // comments
      },
      {
        path: "/propspattern",
        element: <ComponentA />, // comments
      },
      {
        path: "/ex",
        element: <Expensive />, // comments
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
