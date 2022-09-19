import React, { Fragment, useContext } from "react";
import {
  LogoContainer,
  NavigationContainer,
  NavLinkContainer,
  NavLinksContainer,
} from "./NavigationRoutes.styles";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { signOutFromFirebaseAuth } from "../../utils/Firebase/firebase";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/cartContext";

const NavigationRoutes = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <Logo className={"logo"} />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinkContainer to={"/shop"}>SHOP</NavLinkContainer>
          {currentUser ? (
            <NavLinkContainer as={"span"} onClick={signOutFromFirebaseAuth}>
              SIGN OUT
            </NavLinkContainer>
          ) : (
            <NavLinkContainer to={"/auth"}>SIGN IN</NavLinkContainer>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationRoutes;
