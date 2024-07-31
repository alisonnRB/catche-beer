"use client"; // Adicione esta linha no início do arquivo

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const changeCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    changeCart();
    console.log(cart)
  };

  const removeItemFromCart = (name) => {
    setCart((prevCart) => prevCart.filter(item => item.name !== name));
    changeCart();
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);