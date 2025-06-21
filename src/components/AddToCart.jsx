import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product) => {
    const newProduct = {
      ...product,
      price: Number(product.retailprice), // use saleprice as price
      img: product.image,               // use image as img
    };

    
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === newProduct.id);

      if (exists) {
        return prev.map((item) =>
          item.id === newProduct.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...newProduct, qty: 1 }];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease quantity (min 1)
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Cart totals
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.qty * item.retailprice, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
