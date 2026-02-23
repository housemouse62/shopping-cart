import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import App from "./App";
import Home from "./Home";
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
          { path: "shop", element: <Shop /> },
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
});
