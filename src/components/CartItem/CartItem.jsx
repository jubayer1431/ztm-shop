import React from "react";
import { CartItemContainer, ItemDetails } from "./CartItem.styles";

const CartItem = ({ product: { imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>{`${quantity} x $${price}`}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
