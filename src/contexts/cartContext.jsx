import React, { createContext, useEffect, useState } from "react";

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
  const existedItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existedItem) {
    // 2) if item exists modify item quantity

    //        existedItem.quantity += 1;
    //        setCartItems([...cartItems]);

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

// Provider Component
export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // useEffect Should Have single responsibility. This is the best practice. Otherwise we can use setCartItemsCount and setCartTotal in one useEffect

  useEffect(() => {
    // set cartItemsCount everytime when cartItems value changes or modified
    setCartItemsCount(
      cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    // set cartItems Total Price everytime when cartItems value changes or modified
    setCartTotal(
      cartItems.reduce(
        (total, currentItem) =>
          total + currentItem.quantity * currentItem.price,
        0
      )
    );
  }, [cartItems]);

  const removeItemFromCart = (productToRemove) => {
    const filteredCartItems = cartItems.filter(
      (item) => item.id !== productToRemove.id
    );
    setCartItems([...filteredCartItems]);
  };

  const decreaseItemFromCart = (productToDecrease) => {
    // const existedItem = cartItems.find(
    //   (item) => item.id === productToDecrease.id
    // );

    if (productToDecrease.quantity > 1) {
      const modifiedCartItems = cartItems.map((item) =>
        item.id === productToDecrease.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      setCartItems([...modifiedCartItems]);
    } else {
      removeItemFromCart(productToDecrease);
    }
  };

  const addItemToCart = (productToAdd) =>
    setCartItems(addToCart(cartItems, productToAdd));

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
