import React from "react";

import "./signin.style.scss";
import SignIn from "../../components/sign-in/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInOut = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInOut;
