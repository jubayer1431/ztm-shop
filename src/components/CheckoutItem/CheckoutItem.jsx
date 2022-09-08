import React, { useContext } from "react";
import "./_CheckoutItem.scss";
import { CartContext } from "../../contexts/cartContext";

const CheckoutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;
  const { addItemToCart, removeItemFromCart, decreaseItemFromCart } =
    useContext(CartContext);

  const handleIncreaseItemQuantity = () => addItemToCart(product);
  const handleDecreaseItemQuantity = () => decreaseItemFromCart(product);
  const handleRemoveItemFromCart = () => removeItemFromCart(product);

  return (
    <div className={"checkout-item-container"}>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className={"name"}>{name}</span>
      <span className="quantity">
        <div className={"arrow"} onClick={handleDecreaseItemQuantity}>
          &#10094;
        </div>
        <span className={"value"}>{quantity}</span>
        <div className={"arrow"} onClick={handleIncreaseItemQuantity}>
          &#10095;
        </div>
      </span>

      <span className={"price"}>{price * quantity}</span>

      <div className={"remove-button"} onClick={handleRemoveItemFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
