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
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="font-play-au">
      <nav className="flex flex-col justify-center">
        <div className="bg-white text-[#173F5F] flex flex-col sm:flex-row justify-between items-center p-2 max-w-[90%] w-full mx-auto text-sm sm:text-base">
          <div className="flex flex-row justify-center sm:justify-start items-center gap-x-2">
            <FontAwesomeIcon icon={faPhone} />
            <p className="font-bold">+233 4374902234</p>
          </div>
          <div className="flex flex-row justify-center sm:justify-end items-center gap-x-4 mt-2 sm:mt-0">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagramSquare} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>

        <div className="w-[90%] h-[2px] bg-gray-300 mx-auto mt-2"></div>
        <div className="flex flex-wrap items-center justify-between max-w-[90%] w-full mx-auto py-2">
          {/* Logo - Centered */}
          <div className="w-full sm:w-auto text-center sm:text-left text-xl sm:text-2xl font-extrabold text-[#173F5F]">
            DevNovas
          </div>

          {/* Search Input - Fixed Length on Desktop */}
          <div className="relative flex-grow w-full sm:w-[60%] md:w-[40%] max-w-lg mt-2 sm:mt-0">
            <input
              type="search"
              placeholder="Search books"
              className="w-full bg-gray-300 border-2 px-4 py-2 rounded-lg border-[#173F5F] focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#173F5F]"
            />
          </div>

          {/* Icons - Centered */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-end gap-x-4 mt-2 sm:mt-0">
            <UserIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <ShoppingCartIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        <div className="flex justify-center items-center bg-[#173F5F] text-white p-2">
          <nav className="flex flex-wrap justify-center items-center gap-3 md:gap-6 uppercase font-semibold text-sm max-w-[90%] mx-auto">
            <Link
              className="border-r border-white pr-3 md:pr-4 last:border-none"
              to={"/"}
            >
              HOME
            </Link>
            <Link
              className="border-r border-white pr-3 md:pr-4 last:border-none"
              to={"/Books"}
            >
              BOOKS
            </Link>
            <Link
              className="border-r border-white pr-3 md:pr-4 last:border-none"
              to={"/AddBook"}
            >
              ADD BOOK
            </Link>
            <Link className="border-r border-white pr-3 md:pr-4 last:border-none">
              ABOUT US
            </Link>
            <Link className="border-r border-white pr-3 md:pr-4 last:border-none">
              CONTACT US
            </Link>
            <Link className="pr-3 md:pr-4">BLOG</Link>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
