import React, { createContext, useReducer } from "react";
import { createAction } from "../utils/Reducer/reducer.utils";

// Actual Context
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
});

// Helper Functions
const addToCart = (cartItems, productToAdd) => {
  // 1) Check if item exists in cartItems
  const existedItem = cartItems?.find((item) => item.id === productToAdd.id);

  if (existedItem) {
    // 2) if item exists modify item quantity
    const modifiedCartItems = cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    return [...modifiedCartItems];
  }

  // 3) if item not exists add to cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_ITEMS_COUNT: "SET_CART_ITEMS_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    default:
      throw new Error(`Unhandled ${type} in Car Reducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartItemsCount: 0,
  cartTotal: 0,
};

// Provider Component
export const CartContextProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartItemsCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartTotal = newCartItems.reduce(
      (total, currentItem) => total + currentItem.quantity * currentItem.price,
      0
    );

    const newItemsCount = newCartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartItemsCount: newItemsCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const setIsCartOpen = (isOpen) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isOpen));
  };

  const removeItemFromCart = (productToRemove) => {
    const filteredCartItems = cartItems.filter(
      (item) => item.id !== productToRemove.id
    );
    updateCartItemsReducer(filteredCartItems);
  };

  const decreaseItemFromCart = (productToDecrease) => {
    if (productToDecrease.quantity > 1) {
      const modifiedCartItems = cartItems.map((item) =>
        item.id === productToDecrease.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      updateCartItemsReducer(modifiedCartItems);
    } else {
      removeItemFromCart(productToDecrease);
    }
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addToCart(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartItemsCount,
    removeItemFromCart,
    decreaseItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
