import React from "react";
import Logo from "./Logo/Logo";
import SignIn from "./SignIn/SignIn";

const Navigation = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center">
      <Logo />
      <SignIn />
    </nav>
  );
};

export default Navigation;
