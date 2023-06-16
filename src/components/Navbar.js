import React from "react";
import logo from "../Assets/Logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="flex space-x-6">
        <img src={logo} alt="logo" />
        <div className="hidden lg:block">
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline lg:mr-8">
            Pricing
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
