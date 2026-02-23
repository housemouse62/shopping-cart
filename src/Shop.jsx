import { useProducts } from "./ProductsContext";
import { Link } from "react-router";
import { Outlet } from "react-router";
import MainShop from "./MainShop";

const Shop = () => {
  const { products, loading } = useProducts();

  if (loading) return <div>Loading Products...</div>;
  console.log(products.products);
  return (
    <div className="shop-container">
      <div className="items-sidebar">
        <Link to="beauty">Beauty</Link>
        <br />
        <Link to="fragrances">Fragrance</Link>
        <br />
        <Link to="furniture">Furniture</Link>
        <br />
        <Link to="grocery">Grocery</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Shop;
