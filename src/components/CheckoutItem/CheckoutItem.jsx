import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;
  const { addItemToCart, removeItemFromCart, decreaseItemFromCart } =
    useContext(CartContext);

  const handleIncreaseItemQuantity = () => addItemToCart(product);
  const handleDecreaseItemQuantity = () => decreaseItemFromCart(product);
  const handleRemoveItemFromCart = () => removeItemFromCart(product);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={handleDecreaseItemQuantity}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleIncreaseItemQuantity}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={handleRemoveItemFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
