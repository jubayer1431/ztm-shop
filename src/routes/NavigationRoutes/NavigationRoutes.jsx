import React, { Fragment } from "react";
import "./_NavigationRoutes.scss";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/crown.svg";
// import Logo from "./../../assets/crown.svg";

const NavigationRoutes = () => {
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
          <Link className={"nav-link"} to={"/sign-in"}>
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationRoutes;
