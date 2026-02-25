import { Link } from "react-router";
import { Outlet } from "react-router";
import { useCart } from "./CartContext";
import "./App.css";
import shop_cart from "./assets/cart-outline.svg";

const App = () => {
  const { cart, totalItems } = useCart();
  return (
    <div className="container">
      <div className="navbar">
        <div className="nav-left">
          <Link to="/home">Home</Link>
          <Link to="/Shop">Shop</Link>
        </div>
        <div className="nav-right cart-link">
          <h3 className="cart-badge">{totalItems(cart)}</h3>
          <Link to="/cart">
            <img src={shop_cart} alt="cart" />
          </Link>
        </div>
      </div>
      <div className="main-screen">
        <Outlet />
      </div>
    </div>
  );
};
export default App;
