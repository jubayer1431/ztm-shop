import React, { useContext } from "react";
import "./_CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cartContext";

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartItemsCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={"cart-icon-container"} onClick={toggleIsCartOpen}>
      <ShoppingIcon className={"shopping-icon"} />
      <span className={"item-count"}>{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
