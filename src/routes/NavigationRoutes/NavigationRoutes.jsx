import React, { Fragment, useContext } from "react";
import {useSelector} from 'react-redux';
import {
  LogoContainer,
  NavigationContainer,
  NavLinkContainer,
  NavLinksContainer,
} from "./NavigationRoutes.styles";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { signOutFromFirebaseAuth } from "../../utils/Firebase/firebase";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/cartContext";
import {userSelector} from './../../store/user/userSelector';

const NavigationRoutes = () => {
  const currentUser  = useSelector(userSelector);
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
