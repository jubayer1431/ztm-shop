import React, { useState } from "react";
import {
  createSignInWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../utils/Firebase/firebase";
import FormInput from "../FormInput/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { SignInContainer, ButtonsContainer } from "./SignIn.styles";

const SignIn = () => {
  const defaultSignInFormFields = {
    email: "",
    password: "",
  };

  const [signInFormFields, setSignInFormFields] = useState(
    defaultSignInFormFields
  );
  const { email, password } = signInFormFields;

  const clearInputs = () => setSignInFormFields(defaultSignInFormFields);

  const handleChange = (e) => {
    setSignInFormFields({
      ...signInFormFields,
      [e.target.name]: e.target.value,
    });
    // console.log(formFieldsData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createSignInWithEmailAndPassword(email, password);
      clearInputs();
    } catch (err) {
      console.log(err.code);
    }
  };

  const logGoogleUserInWithPopup = async () => {
    await signInWithGooglePopUp();
  };

  return (
    <SignInContainer>
      <h2>Already Have An Account</h2>
      <span>Sign In With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <Button type={"submit"}>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUserInWithPopup}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
