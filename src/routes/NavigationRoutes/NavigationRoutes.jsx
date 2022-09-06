import React, { Fragment, useContext } from "react";
import "./_NavigationRoutes.scss";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { signOutFromFirebaseAuth } from "../../utils/Firebase/firebase";

const NavigationRoutes = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await signOutFromFirebaseAuth();
      setCurrentUser(null);
      console.log("signed out");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Fragment>
      {/*// We Use Fragment Component just because we have to use a parent. We can use use div, But, div will create extra parent div in actual HTML and Fragment component will not create anything.*/}
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <Logo className={"logo"} />
        </Link>
        <div className="nav-links-container">
          <Link className={"nav-link"} to={"/shop"}>
            Shop
          </Link>
          {currentUser ? (
            <span className={"nav-link"} onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className={"nav-link"} to={"/auth"}>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationRoutes;
