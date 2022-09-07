import React, { useState } from "react";
import "./_SignUp.scss";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/Firebase/firebase";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const SignUp = () => {
  const defaultSignupFormFieldsData = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [signupFormFieldsData, setSignupFormFieldsData] = useState(
    defaultSignupFormFieldsData
  );
  const { displayName, email, password, confirmPassword } =
    signupFormFieldsData;

  const clearInputs = () =>
    setSignupFormFieldsData(defaultSignupFormFieldsData);

  const handleChange = (e) => {
    setSignupFormFieldsData({
      ...signupFormFieldsData,
      [e.target.name]: e.target.value,
    });
    // console.log(signupFormFieldsData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not matched");
      return;
    }

    try {
      const { user } = await createAuthUserFromEmailAndPassword(
        email,
        password
      );
      if (user) {
        await createUserDocFromAuth(user, { displayName });
        // Clear inputs if user creation is successful
        clearInputs();
      }
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Auth/Email Already in Use.");
      } else {
        console.log("User Creation Failed => ", e);
      }
    }
  };

  return (
    <div className={"sign-up-container"}>
      <h2>Don't Have An Account</h2>
      <span>Sign Up With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          name={"displayName"}
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label={"Email"}
          type="email"
          required
          name={"email"}
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label={"Password"}
          type="password"
          required
          name={"password"}
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label={"Confirm Password"}
          type="password"
          required
          name={"confirmPassword"}
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type={"submit"}>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
