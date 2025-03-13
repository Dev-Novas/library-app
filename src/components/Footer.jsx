import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    // left
    <div className="bg-[#173F5F] py-10 font-play-au">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between text-white">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <img className="w-[83px] h-[87px]" src={logo} alt="logo" />
          <p>
            Nostrud exercitation ullamco laboris nisi <br /> ut aliquip ex ea
            commodo consequat.
          </p>
          <div>
            <div>
            social links
            </div>
          </div>
        </div>
        {/* middle */}
        <div className="w-full md:w-1/3 text-center md:text-left mt-6 md:mt-0">
          <h3 className="text-white font-semibold">DEV NOVAS</h3>
          <ul className="space-y-2 flex flex-col justify-start gap-x-[20px]">
            <Link to={'/'}>HOME</Link>
            <Link to={'/Books'}>BOOKS</Link>
            <Link to={'/AddBook'}>ADD BOOK</Link>
            <Link>ABOUT US</Link>
            <Link>CONTACT US</Link>
            <Link>BLOG</Link>
          </ul>
        </div>
        {/* right */}
        <div className="w-full md:w-1/3 text-center md:text-left mt-6 md:mt-0 ">
          <h3 className="text-white font-semibold">LATEST NEWS</h3>
          <div className="flex items-center space-x-4">
            <p className="text-lg font-semibold underline text-white">News 1</p>
            </div>
          <div>
            <h4 className="text-sm font-medium">Nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea
            commodo consequat.</h4>
            <p className="text-xs text-white">10 March 2025</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-lg font-semibold underline text-white">News 2</p>
            </div>
            <div>
            <h4 className="text-sm font-medium">Nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea
            commodo consequat.</h4>
            <p className="text-xs text-white">10 March 2025</p>
            </div>
        </div>
      </div>
      {/* bottom */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center text-white text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left w-full md:w-auto">©️ 2025 Dev-Novas. All Rights Reserved</div>
        <div className="flex space-x-4 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          <a className="text-white hover:text-[#ED553B] mx-2 " href="#">Privacy</a> |
          <a className="text-white hover:text-[#ED553B] mx-2" href="#">Terms of Service</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
