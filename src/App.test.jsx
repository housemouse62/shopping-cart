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

    const shop = screen.findByText("shop", { name: /shop/i });
    const home = screen.findByRole("home", { name: /home/i });
    const cart = screen.findByRole("cart", { name: /cart/i });

    expect(shop, home, cart).toBeVisible();
  });
});
