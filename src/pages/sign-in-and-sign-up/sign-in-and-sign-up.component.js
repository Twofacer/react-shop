import React from "react";
import "./sign-in-and-sign-up.style.scss";

import SingIn from "../../components/sign-in/sign-in.componet.js";
import SignUp from "../../components/sign-up/sign-up.component.js";
const SignInAndSignUpPage = () => (
  <div className="sign-in-and-up">
    <SingIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
