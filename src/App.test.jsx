import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router";
import App from "./App";

const renderWithRouter = (component) => {
  const router = createMemoryRouter([
    {
      path: "/",
      element: component,
    },
  ]);
  return render(<RouterProvider router={router} />);
};

describe("Shopping App Component", () => {
  it("Main sidebar renders with all categories", () => {
    renderWithRouter(<App />);

    const shop = screen.getByRole("link", { name: /shop/i });
    const home = screen.getByRole("link", { name: /home/i });
    const cart = screen.getByRole("link", { name: /cart/i });

    expect(home, shop, cart).toBeVisible();
  });

  it("main nav bar still visible when user clicks 'shop'", () => {
    const user = userEvent.setup();
    renderWithRouter(<App />);

    const shop = screen.getByRole("link", { name: /shop/i });

    user.click(shop);

    expect(shop).toBeVisible();
  });
});
