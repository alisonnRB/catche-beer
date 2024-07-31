"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [total, setTotal] = useState(0);

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
      updateTotal();
    }
  }, [cart, isClient]);

  const updateTotal = () => {
    const newTotal = cart.reduce((acc, cartItem) => acc + (parseFloat(cartItem.price) * cartItem.quantity), 0);
    setTotal(newTotal);
  };

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(cartItem => cartItem.nome === item.nome);

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
      const itemIndex = prevCart.findIndex(cartItem => cartItem.nome === item.nome);

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
      const updatedCart = prevCart.filter(cartItem => cartItem.nome !== item.nome);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, total, addItemToCart, removeItemFromCart, removeItemAllFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);