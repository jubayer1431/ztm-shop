import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";
import { AuthenticationContainer } from "./AuthenticationRoutes.styles";

// import { getRedirectResult } from "firebase/auth";
// import {firebaseAuth, createUserDocFromAuth, signInWithGoogleRedirect,} from "../../utils/Firebase/firebase";

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
    <AuthenticationContainer>
      {/*<button onClick={logGoogleUserInWithRedirect}>*/}
      {/*  Sign In With Google Redirect*/}
      {/*</button>*/}
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default AuthenticationRoutes;
