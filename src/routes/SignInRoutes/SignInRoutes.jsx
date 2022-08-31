import React, { Fragment } from "react";
import "./_SignInRoutes.scss";
import { signInWithGooglePopUp } from "../../utils/Firebase/firebase";

const SignInRoutes = () => {
  const logGoogleUserIn = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  };

  return (
    <Fragment>
      <button onClick={logGoogleUserIn}>Sign In</button>
    </Fragment>
  );
};

export default SignInRoutes;
