"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  // Fix: Synchronously read from localStorage on initial run to completely eliminate empty states
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const availableCart = localStorage.getItem("cart");
      return availableCart ? JSON.parse(availableCart) : [];
    }
    return [];
  });

  const [showCart, setShowCart] = useState(false);

  // Sync to localStorage instantly whenever the cart array array updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Combined action handler to guarantee zero UI frame lag on click
  const addToCartAndOpen = useCallback((product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item,
        );
      }
      return [...prev, { ...product }];
    });

    // Forces React to batch both states together so the drawer never opens to an empty cart
    setShowCart(true);
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  }, []);

  const deleteProduct = useCallback((id) => {
    setCart((items) => items.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart: addToCartAndOpen, // Replaces previous decoupled hook references
        showCart,
        setShowCart,
        deleteProduct,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("useCart must be used inside a CartProvider component");
  return context;
}

export { CartProvider, useCart };
