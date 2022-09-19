import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdown.styles";
import Button from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <EmptyMessage>Your Cart Is Empty.</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
