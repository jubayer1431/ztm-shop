import React, { Fragment } from "react";
import "./_SignInRoutes.scss";
import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
} from "../../utils/Firebase/firebase";

const SignInRoutes = () => {
  const logGoogleUserIn = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <Fragment>
      <button onClick={logGoogleUserIn}>Sign In</button>
    </Fragment>
  );
};

export default SignInRoutes;
