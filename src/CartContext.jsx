import { createContext, useEffect, useState, useContext } from "react";

const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
