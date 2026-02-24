import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import App from "./App";
import MainShop from "./MainShop";
import Home from "./Home";
import Beauty from "./components/beauty";
import Fragrances from "./components/fragrances";
import Grocery from "./components/grocery";
import Furniture from "./components/furniture";
import Shop from "./Shop";
import Cart from "./components/Cart";
import { CartDataProvider } from "./CartContext";
import { ProductsDataProvider } from "./ProductsContext";

const renderWithRouter = (component, initialRoute = "/") => {
  const router = createMemoryRouter(
    [
      {
        path: "/",
        element: component,
        children: [
          { index: true, element: <Home /> },
          { path: "home", element: <Home /> },
          {
            path: "shop",
            element: <Shop />,
            children: [
              { index: true, element: <MainShop /> },
              { path: "beauty", element: <Beauty /> },
              { path: "fragrances", element: <Fragrances /> },
              { path: "grocery", element: <Grocery /> },
              { path: "furniture", element: <Furniture /> },
            ],
          },
          { path: "cart", element: <Cart /> },
        ],
      },
    ],
    {
      initialEntries: [initialRoute], // Start at specific route if needed
    },
  );
  return render(
    <ProductsDataProvider>
      <RouterProvider router={router} />
    </ProductsDataProvider>,
  );
};

describe("Shopping App Component", () => {
  it("Main sidebar renders with all categories", () => {
    renderWithRouter(<App />);

    const shop = screen.getByRole("link", { name: "Shop" });
    const home = screen.getByRole("link", { name: /home/i });
    const cart = screen.getByRole("link", { name: /cart/i });

    expect(home, shop, cart).toBeVisible();
  });

  it("main nav bar still visible when user clicks 'shop'", () => {
    const user = userEvent.setup();
    renderWithRouter(<App />);

    const shop = screen.getByRole("link", { name: "Shop" });

    user.click(shop);

    expect(shop).toBeVisible();
  });

  it("cart page renders when user clicks 'cart' ", async () => {
    const user = userEvent.setup();
    renderWithRouter(<App />);

    const cart = screen.getByRole("link", { name: /cart/i });

    await user.click(cart);

    const empty = screen.getByText(/your cart is empty/i);
    expect(empty).toBeVisible();
  });

  it("item added to cart when user clicks 'add to cart'", async () => {
    const user = userEvent.setup();
    renderWithRouter(<App />);

    const shop = screen.getByRole("link", { name: "Shop" });
    await user.click(shop);

    // Wait for Beauty link to appear (products loaded)
    const beauty = await screen.findByRole("link", { name: /Beauty/i });
    await user.click(beauty);

    // Wait for mascara product to appear
    const mascara = await screen.findByText(/by: essence/i);

    // Find the product card, then find button within it
    const productCard = mascara.closest(".product-card");
    const addButton = within(productCard).getByRole("button", {
      name: /add to cart/i,
    });
    await user.click(addButton);

    const cart = screen.getByRole("link", { name: /cart/i });
    await user.click(cart);

    // Wait for mascara to appear in cart
    const mascaraCart = await screen.findByText(/mascara/i);
    expect(mascaraCart).toBeVisible();
  });
});
