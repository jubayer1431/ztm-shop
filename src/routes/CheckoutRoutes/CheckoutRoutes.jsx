import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import "./_CheckoutRoutes.scss";

const CheckoutRoutes = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className={"checkout-container"}>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} product={item} />
      ))}

      <span className={"total"}>Total: ${cartTotal}</span>
    </div>
  );
};

export default CheckoutRoutes;
