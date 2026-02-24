import { createContext, useEffect, useState, useContext } from "react";

const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log(product);
    setCart((prev) => {
      [...prev, { product }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
