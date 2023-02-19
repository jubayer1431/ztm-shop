import { createAction } from '../../utils/Reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cartActionTypes';

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

export const setIsCartOpen = (isOpen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isOpen);

export const updateCartItemsReducer = (newCartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);

export const removeItemFromCart = (productToRemove, cartItems) => {
  const filteredCartItems = cartItems.filter(
    (item) => item.id !== productToRemove.id
  );
  return updateCartItemsReducer(filteredCartItems);
};

export const decreaseItemFromCart = (productToDecrease, cartItems) => {
  if (productToDecrease.quantity > 1) {
    const modifiedCartItems = cartItems.map((item) =>
      item.id === productToDecrease.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    return updateCartItemsReducer(modifiedCartItems);
  } else {
    return removeItemFromCart(productToDecrease);
  }
};

export const addItemToCart = (productToAdd, cartItems) => {
  const newCartItems = addToCart(cartItems, productToAdd);
  return updateCartItemsReducer(newCartItems);
};
