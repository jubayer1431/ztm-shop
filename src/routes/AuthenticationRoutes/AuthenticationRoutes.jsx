import React from "react";
// import { getRedirectResult } from "firebase/auth";
import "./_AuthenticationRoutes.scss";
// import {firebaseAuth, createUserDocFromAuth, signInWithGoogleRedirect,} from "../../utils/Firebase/firebase";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";

const AuthenticationRoutes = () => {
  // useEffect(() => {
  //   const redirectResults = async () => {
  //     const { user } = await getRedirectResult(firebaseAuth);
  //     if (user) {
  //       const userDocRef = await createUserDocFromAuth(user);
  //       console.log(userDocRef);
  //     }
  //   };
  //
  //   redirectResults();
  // }, []);

  // const logGoogleUserInWithRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   const userDocRef = await createUserDocFromAuth(user);
  //   console.log(userDocRef);
  // };

  return (
    <div className={"authentication-container"}>
      {/*<button onClick={logGoogleUserInWithRedirect}>*/}
      {/*  Sign In With Google Redirect*/}
      {/*</button>*/}
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthenticationRoutes;
