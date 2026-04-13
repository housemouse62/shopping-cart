# Shopping Cart

A React practice project — a multi-category e-commerce shop with a fully functional shopping cart.

![Shopping Cart Preview](src/assets/shopping%20cart%20grab.png)

## Features

- Browse products across four categories: Beauty, Fragrance, Furniture, and Grocery
- Products fetched live from the [DummyJSON API](https://dummyjson.com/products)
- Add items to the cart directly from the shop
- Cart badge in the navbar shows the live item count
- Cart page with quantity controls (+/-), item removal, and a running total
- Empty cart state with a link back to the shop
- Client-side routing via React Router

## Tech Stack

- **React 19** — UI and component logic
- **React Router 7** — client-side routing with nested routes
- **Vite** — dev server and build tool
- **Context API** — shared state for cart and product data (`CartContext`, `ProductsContext`)
- **Vitest + Testing Library** — unit and component testing

## Getting Started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm test      # run tests with Vitest
npm run build # production build
npm run lint  # ESLint
```

## Project Structure

```
src/
├── components/
│   ├── beauty.jsx       # Beauty category products
│   ├── fragrances.jsx   # Fragrance category products
│   ├── furniture.jsx    # Furniture category products
│   ├── grocery.jsx      # Grocery category products
│   └── Cart.jsx         # Cart page
├── CartContext.jsx       # Cart state: add, remove, update quantity, totals
├── ProductsContext.jsx   # Fetches products from DummyJSON API
├── App.jsx              # Navbar with cart icon and badge
├── Shop.jsx             # Shop layout with category sidebar
├── MainShop.jsx         # Default shop view
├── Home.jsx             # Home page
├── Root.jsx             # Route definitions
└── ErrorPage.jsx        # 404 / error boundary page
```
