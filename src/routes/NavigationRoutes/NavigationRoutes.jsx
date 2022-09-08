import React, { Fragment, useContext } from "react";
import "./_NavigationRoutes.scss";
import { Link, Outlet } from "react-router-dom";
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
      {/*// We Use Fragment Component just because we have to use a parent. We can use use div, But, div will create extra parent div in actual HTML and Fragment component will not create anything.*/}
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <Logo className={"logo"} />
        </Link>
        <div className="nav-links-container">
          <Link className={"nav-link"} to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className={"nav-link"} onClick={signOutFromFirebaseAuth}>
              SIGN OUT
            </span>
          ) : (
            <Link className={"nav-link"} to={"/auth"}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationRoutes;
