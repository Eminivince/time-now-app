import React from "react";
import logo from "../Assets/Logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="flex space-x-6 md:pl-0 pl-8">
        <img src={logo} alt="logo" />
        <div className="hidden lg:block">
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline lg:ml-8">
            Pricing
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
