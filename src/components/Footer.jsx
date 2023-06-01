import React from "react";
import WhiteLogo from "../assets/WhiteLogo.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#5F327C] flex justify-center space-x-56 h-72 max-sm:space-x-0 max-sm:h-auto max-sm:flex-col max-sm:items-center max-sm:justify-center">
      <div className="space-y-8 mt-16 max-sm:text-center  max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
        <img className="cursor-pointer" src={WhiteLogo} alt="Footer-logo" />
        <p className="font-poppins text-white">
          Discover people a new way and
          <br /> gang up a friendship for life.
        </p>
        <div className="flex flex-row items-center justify-start space-x-3 cursor-pointer max-sm:hidden">
          <img className="sm:h-5" src={Instagram} alt="Intagram-Logo" />
          <img src={LinkedIn} alt="LinkedIn-Logo" />
          <img src={Facebook} alt="Facebook-Logo" />
          <img src={Twitter} alt="Twitter-Logo" />
        </div>
      </div>

      <div className="space-y-4 mt-16 max-sm:text-center max-sm:mt-10">
        <h2 className="font-poppins text-xl font-bold text-white">
          Get in touch
        </h2>
        <p className="font-poppins text-white">humans@croxroads.app</p>
        <p className="font-poppins text-white">
          ZenBlock Tower, 3rd Floor
          <br />
          HSR Layout, Sector 2
        </p>
      </div>

      <div className="mt-16 max-sm:hidden">
        <h2 className="font-poppins text-xl font-bold mb-4 text-white">
          Jump To
        </h2>
        <ul className="font-poppins cursor-pointer space-y-1 text-white">
        <Link to="/"><li>Home</li></Link>
          <Link to="/privacypolicy"><li>Privacy Policy</li></Link>
          <Link to="/termsandcondition"><li>Terms & Conditions</li></Link>
          <Link to="/career"><li>Career</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>

      {/* For Mobile */}
      <div className="mt-16 sm:hidden flex flex-col items-center justify-center">
        <h2 className="font-poppins text-lg font-bold mb-4 text-white">
          Jump To
        </h2>
        <ul className="font-poppins cursor-pointer space-y-1 text-white text-center">
          <Link to="/"><li>Home</li></Link>
          <Link to="/privacypolicy"><li>Privacy Policy</li></Link>
          <Link to="/termsandcondition"><li>Terms & Conditions</li></Link>
          <Link to="/career"><li>Career</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>

      <div className="flex cursor-pointer sm:hidden max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-center max-sm:space-x-4 max-sm:mt-10 max-sm:pb-8">
        <img src={Instagram} alt="Intagram-Logo" />
        <img src={LinkedIn} alt="LinkedIn-Logo" />
        <img src={Facebook} alt="Facebook-Logo" />
        <img src={Twitter} alt="Twitter-Logo" />
      </div>
    </div>
  );
};

export default Footer;
