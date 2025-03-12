import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagramSquare,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  UserIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="font-play-au">
      <nav className="flex flex-col justify-center">
        <div className="bg-white text-[#173F5F] flex justify-between p-1 max-w-[90%] w-full mx-auto">
          <div className=" flex flex-row justify-between items-center gap-x-[5px]">
            <FontAwesomeIcon icon={faPhone} />
            <p className="font-bold">+233 4374902234</p>
          </div>
          <div className=" flex flex-row justify-evenly items-center gap-x-[30px]">
            <FontAwesomeIcon icon={faFacebookF} />
            {/* <FontAwesomeIcon icon={faPhoneAlt} /> */}
            <FontAwesomeIcon icon={faInstagramSquare} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className="w-[90%] h-[2px] bg-gray-300 mx-auto mt-2"></div>
        <div className="flex justify-between items-center h-[50px] max-w-[90%] w-full mx-auto">
          <div className="text-2xl font-extrabold text-[#173F5F]">DevNovas</div>
          <div className="relative w-full max-w-2xl">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search books"
              className="w-2xl bg-gray-300 border-2 px-4 py-3 rounded-lg border-[#173F5F] h-[35px]"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#173F5F]"
            />
          </div>
          <div className="flex flex-row justify-center gap-x-[30px]">
            <UserIcon className="size-[22px]" />
            <ShoppingCartIcon className="size-[22px]" />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center bg-[#173F5F] text-white p-1 ">
          <nav className="flex space-x-6 uppercase font-semibold text-sm">
            <span className="border-r border-white pr-4 ">HOME</span>
            <span className="border-r border-white pr-4">ABOUT US</span>
            <span className="border-r border-white pr-4">BOOKS</span>
            <span className="border-r border-white pr-4">NEW RELEASE</span>
            <span className="border-r border-white pr-4">CONTACT US</span>
            <span className="pl-1">BLOG</span>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
