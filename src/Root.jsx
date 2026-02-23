import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ProductsDataProvider } from "./ProductsContext.jsx";
import ErrorPage from "./ErrorPage.jsx";
import App from "./App.jsx";
import Shop from "./Shop.jsx";
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
      {
        path: "shop",
        element: <Shop />,
        errorElement: <ErrorPage />,
        children: [
          { path: "beauty", element: <Beauty /> },
          { path: "fragrances", element: <Fragrances /> },
          { path: "grocery", element: <Grocery /> },
          { path: "furniture", element: <Furniture /> },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsDataProvider>
      <RouterProvider router={router} />
    </ProductsDataProvider>
  </StrictMode>,
);
