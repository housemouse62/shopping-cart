import { useState } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Link to="/">Home</Link>
        <br />
        <Link to="/shop">Shop</Link>
        <br />
        <Link to="/cart">Cart</Link>
      </div>
      <div className="main-screen">
        <Outlet />
      </div>
    </div>
  );
};
export default App;
