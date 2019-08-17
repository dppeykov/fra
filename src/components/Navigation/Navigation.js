import React from "react";
import Logo from "./Logo/Logo";
import SignIn from "./SignIn/SignIn";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <Logo />
      <SignIn />
    </nav>
  );
};

export default Navigation;
