import { createContext, useEffect, useState, useContext } from "react";

const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) =>
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        const newCart = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return newCart;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
          },
        ];
      }
    });

  const removeFromCart = (id) =>
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === id);

      const newCart = prev.filter((item) => item !== existingItem);

      return newCart;
    });

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
