import React, { useState } from "react";
import "./_SignUp.scss";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/Firebase/firebase";
import FormInput from "../FormInput/FormInput";

const SignUp = () => {
  const defaultFormFieldsData = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFieldsData, setFormFieldsData] = useState(defaultFormFieldsData);
  const { displayName, email, password, confirmPassword } = formFieldsData;

  const clearInputs = () => setFormFieldsData(defaultFormFieldsData);

  const handleChange = (e) => {
    setFormFieldsData({ ...formFieldsData, [e.target.name]: e.target.value });
    // console.log(formFieldsData);
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
    <div>
      <h1>Sign Up With Your Email and Password</h1>
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
        <button type={"submit"}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
