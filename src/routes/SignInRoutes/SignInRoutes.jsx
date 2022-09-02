import React, { Fragment, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import "./_SignInRoutes.scss";
import {
  firebaseAuth,
  signInWithGooglePopUp,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/Firebase/firebase";

const SignInRoutes = () => {
  useEffect(() => {
    const redirectResults = async () => {
      const { user } = await getRedirectResult(firebaseAuth);
      if (user) {
        const userDocRef = await createUserDocFromAuth(user);
        console.log(userDocRef);
      }
    };

    redirectResults();
  }, []);

  const logGoogleUserInWithPopup = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };
  const logGoogleUserInWithRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <Fragment>
      <button onClick={logGoogleUserInWithPopup}>Sign In With Google</button>
      <button onClick={logGoogleUserInWithRedirect}>
        Sign In With Google Redirect
      </button>
    </Fragment>
  );
};

export default SignInRoutes;
