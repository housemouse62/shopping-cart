import { useProducts } from "./ProductsContext";
import { Link } from "react-router";
import { Outlet } from "react-router";

const Items = () => {
  const { products, loading } = useProducts();
  console.log(products.products);
  if (loading) return <div>Loading Products...</div>;

  return (
    <div>
      <div className="items-sidebar">
        <h1>Categories:</h1>
        <div>
          <Link to="beauty">Beauty Products</Link>
          <br />
          <Link to="fragrances">Fragrance Products</Link>
          <br />
          <Link to="furniture">Furniture Products</Link>
          <br />
          <Link to="grocery">Grocery Products</Link>
        </div>
      </div>
      <div className="items-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Items;
