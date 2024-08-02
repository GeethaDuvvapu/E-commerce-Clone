import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const incrementCount = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementCount = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.count > 0 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, incrementCount, decrementCount }}>
      {children}
    </CartContext.Provider>
  );
};






