import { Link } from "react-router";
import { Outlet } from "react-router";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="nav-left">
          <Link to="/home">Home</Link>
          <Link to="/Shop">Shop</Link>
        </div>
        <div className="nav-right">
          <h3># Items</h3>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="main-screen">
        <Outlet />
      </div>
    </div>
  );
};
export default App;
