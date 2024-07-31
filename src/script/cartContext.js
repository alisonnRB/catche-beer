"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true); 
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);

      if (itemIndex > -1) {
        const updatedCart = prevCart.map((cartItem, index) => {
          if (index === itemIndex) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);

      if (itemIndex > -1) {
        const updatedCart = prevCart.map((cartItem, index) => {
          if (index === itemIndex) {
            if (cartItem.quantity > 1) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else {
              return null;
            }
          }
          return cartItem;
        }).filter(cartItem => cartItem !== null);
        return updatedCart;
      }
      return prevCart;
    });
  };

  const removeItemAllFromCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(cartItem => cartItem.id !== item.id);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, removeItemAllFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
