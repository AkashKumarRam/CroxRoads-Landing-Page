import React from "react";
import CroxLogo from "../assets/croxlogo.png";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 flex items-center justify-between pl-8 pr-8 h-[4rem] bg-[#F5F0F8] max-sm:hidden pt-6 pb-6">
        <div className="max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center">
          <img src={CroxLogo} alt="croxLogo" />
        </div>
        <div className="space-x-5">
          <Link className="font-raleway font-semibold text-[#787479] hover:text-slate-900 max-sm:hidden pb-2 hover:border-b-2 hover:border-b-slate-800" to="/">
            Home
          </Link>
          <Link className="font-raleway font-semibold text-[#787479] hover:text-slate-900 max-sm:hidden pb-2 hover:border-b-2 hover:border-b-slate-800" to="/faq">
            FAQ
          </Link>
          <Link className="font-raleway font-semibold text-[#787479] hover:text-slate-900 max-sm:hidden pb-2 hover:border-b-2 hover:border-b-slate-800" to="/blog">
            Blog
          </Link>
          <Link className="font-raleway font-semibold text-[#787479] hover:text-slate-900 max-sm:hidden pb-2 hover:border-b-2 hover:border-b-slate-800" to="/thefuncorner">
          The Fun Corner
          </Link>
        </div>
      </div>
      <MobileMenu />
    </>
  );
};

export default Navbar;
