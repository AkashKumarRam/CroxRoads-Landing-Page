import React from "react";
import CroxLogo from "../assets/croxlogo.png";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between pl-8 pr-8 h-[4rem] bg-[#F5F0F8] max-sm:hidden">
        <div className="max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center">
          <img src={CroxLogo} alt="croxLogo" />
        </div>
        <div className="space-x-5">
          <Link className="font-cutom font-medium max-sm:hidden" to="/">
            Home
          </Link>
          <Link className="font-cutom font-medium max-sm:hidden" to="/faq">
            FAQ
          </Link>
          <Link className="font-cutom font-medium max-sm:hidden" to="/blog">
            Blog
          </Link>
        </div>
      </div>
      <MobileMenu />
    </>
  );
};

export default Navbar;
