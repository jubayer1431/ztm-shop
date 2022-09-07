import React, { useState } from "react";
import "./_SignIn.scss";
import {
  createSignInWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../utils/Firebase/firebase";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

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
    <div className={"sign-up-container"}>
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
        <div className="buttons-container">
          <Button type={"submit"}>Sign In</Button>
          <Button buttonType={"google"} onClick={logGoogleUserInWithPopup}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
