import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconContainer,
} from "./CartIcon.styles";

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartItemsCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconContainer />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
