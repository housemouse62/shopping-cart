import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ProductsDataProvider } from "./ProductsContext.jsx";
import { CartDataProvider } from "./CartContext.jsx";
import ErrorPage from "./ErrorPage.jsx";
import App from "./App.jsx";
import Home from "./Home.jsx";
import MainShop from "./MainShop.jsx";
import Shop from "./Shop.jsx";
import Cart from "./components/Cart.jsx";
import Beauty from "./components/beauty.jsx";
import Fragrances from "./components/fragrances.jsx";
import Grocery from "./components/grocery.jsx";
import Furniture from "./components/furniture.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, errorElement: <ErrorPage /> },
      { path: "home", element: <Home />, errorElement: <ErrorPage /> },
      {
        path: "shop",
        element: <Shop />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <MainShop /> },
          { path: "beauty", element: <Beauty /> },
          { path: "fragrances", element: <Fragrances /> },
          { path: "grocery", element: <Grocery /> },
          { path: "furniture", element: <Furniture /> },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsDataProvider>
      <CartDataProvider>
        <RouterProvider router={router} />
      </CartDataProvider>
    </ProductsDataProvider>
  </StrictMode>,
);
