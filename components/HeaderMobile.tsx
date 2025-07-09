'use client';
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";

const HeaderMobile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-screen bg-white z-20 laptop:hidden rounded-b-3xl top-0 fixed mt-0 pt-0  border-b-darkGold">
      <div className="flex justify-between items-center p-4 ">
        {/* Logo */}
        <img src="/chemisphere-logo.png" className=" w-28 h-auto font-bold text-lg text-neutral-700"></img>

        {/* Mobile Menu Button */}
        <button
          className="text-neutral-700 p-2 rounded-md"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
            <HiXMark className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-30`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-neutral-700 p-2 rounded-md"
            onClick={handleMenuToggle}
          >
            <HiXMark className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-center space-y-8 p-4 pt-8">
           <Link href="https://wa.me/918850436230?text=I%20wish%20to%20go%20ahead%20with%20the%20admissions%20at%20Chemisphere" target='__blank' className="px-4 py-2 text-sm font-medium text-white  rounded-md hover:bg-green hover:text-white transition-colors">
         <button
           type="submit"
           className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-blue-700 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#25D366] hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group  "
         >
           ENROLL
           <svg
             class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-100 group-hover:border-none p-2 rotate-45"
             viewBox="0 0 16 19"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
               className="fill-white group-hover:fill-gray-800"
             ></path>
           </svg>
         </button>
         
                 </Link><li>
            <a
              href="#about"
              className="text-neutral-700 font-medium py-2 w-full text-center hover:bg-neutral-100 rounded-md"
              onClick={handleCloseMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#classes"
              className="text-neutral-700 font-medium py-2 w-full text-center hover:bg-neutral-100 rounded-md"
              onClick={handleCloseMenu}
            >
              Classes
            </a>
          </li>
          <li>
            <a
              href="#stats"
              className="text-neutral-700 font-medium py-2 w-full text-center hover:bg-neutral-100 rounded-md"
              onClick={handleCloseMenu}
            >
              Stats
            </a>
          </li>
          <li>
          <a
            href="#stats"
            className="text-sm font-medium text-gray-700 hover:text-chemisphere transition-colors"
          >
            Physics
          </a>
        </li>
        <li>
          <a
            href="#stats"
            className="text-sm font-medium text-gray-700 hover:text-chemisphere transition-colors"
          >
            Chemistry
          </a>
        </li>
        <li>
          <a
            href="#stats"
            className="text-sm font-medium text-gray-700 hover:text-chemisphere transition-colors"
          >
            Math
          </a>
        </li>
          <li>
            <a
              href="#contact"
              className="text-neutral-700 font-medium py-2 w-full text-center hover:bg-neutral-100 rounded-md"
              onClick={handleCloseMenu}
            >
              Contact Me
            </a>
          </li>
          <li>
            <a
              href="privacy-policy"
              className="text-neutral-700 font-medium py-2 w-full text-center hover:bg-neutral-100 rounded-md"
              onClick={handleCloseMenu}
            >
              Privacy Policy
            </a>
          </li>
         
        </ul>
      </div>
    </header>
  );
};

export default HeaderMobile;