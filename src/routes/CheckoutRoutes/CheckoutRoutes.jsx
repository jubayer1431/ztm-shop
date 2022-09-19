import React, { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./CheckoutRoutes.styles";

const CheckoutRoutes = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Name</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} product={item} />
      ))}

      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default CheckoutRoutes;
