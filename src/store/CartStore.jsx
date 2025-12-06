import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      // If item already in cart, increase quantity
      const existIndex = state.findIndex((p) => p.id === action.product.id);
      if (existIndex > -1) {
        return state.map((item, idx) =>
          idx === existIndex
            ? { ...item, qty: item.qty + (action.product.qty || 1) }
            : item
        );
      }
      return [...state, { ...action.product, qty: action.product.qty || 1 }];
    }
    case "UPDATE_PRODUCT": {
      return state.map((item) =>
        item.id === action.productId ? { ...item, qty: action.qty } : item
      );
    }
    case "REMOVE_PRODUCT": {
      return state.filter((item) => item.id !== action.productId);
    }
    case "CLEAR_CART": {
      return [];
    }
    default:
      return state;
  }
};

export const CartStore = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => dispatch({ type: "ADD_PRODUCT", product });

  const updateProductQty = (productId, qty) =>
    dispatch({ type: "UPDATE_PRODUCT", productId, qty });

  const removeFromCart = (productId) =>
    dispatch({ type: "REMOVE_PRODUCT", productId });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateProductQty, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
