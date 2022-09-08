import "./_CartDropdown.scss";
import Button from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className={"cart-dropdown-container"}>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <Button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
