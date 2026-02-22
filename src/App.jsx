import { useState } from "react";
import { Link } from "react-router";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Link to="beauty">Beauty Products</Link>
        <br />
        <Link to="fragrances">Fragrance Products</Link>
        <br />
        <Link to="furniture">Furniture Products</Link>
        <br />
        <Link to="grocery">Grocery Products</Link>
      </div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="items">Items Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default App;
