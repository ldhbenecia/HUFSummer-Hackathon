import React from "react";
import SignIn from "../../components/Auth/SignIn";

const SignInPage = ({ loginHandler }) => {
  return (
    <>
      <SignIn loginHandler={loginHandler} />
    </>
  );
};

export default SignInPage;
