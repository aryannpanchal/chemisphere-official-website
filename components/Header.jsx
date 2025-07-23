'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Header = () => {
  const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
  const [navigationMenu, setNavigationMenu] = useState('');
  const [navigationMenuCloseTimeout, setNavigationMenuCloseTimeout] = useState(null);

  const navigationMenuLeave = () => {
    setNavigationMenuCloseTimeout(
      setTimeout(() => {
        setNavigationMenuOpen(false);
        setNavigationMenu('');
      }, 200)
    );
  };

  const navigationMenuReposition = (navElement) => {
    clearTimeout(navigationMenuCloseTimeout);
    const dropdown = document.querySelector('#navigationDropdown');
    dropdown.style.left = `${navElement.offsetLeft}px`;
    dropdown.style.marginLeft = `${navElement.offsetWidth / 2}px`;
  };

  return (
    <nav className="z-30 laptop:flex fixed pb-8  items-center top-0 justify-between w-full mobile:hidden px-6 pt-8 mt-0 bg-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/chemisphere-logo-white.svg"
            alt="Logo"
            className="h-10 cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-12">
        <li>
          <a
            href="#about"
            className="text-sm font-medium text-gray-900 hover:text-chemisphere transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#classes"
            className="text-sm font-medium text-gray-700 hover:text-chemisphere transition-colors"
          >
            Classes 
          </a>
        </li>
        {/* <li>
          <a
            href="#stats"
            className="text-sm font-medium text-gray-700 hover:text-chemisphere transition-colors"
          >
            Stats
          </a>
        </li> */}
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
        {/* <li>
          <button
            className="text-sm font-medium text-gray-700 hover:text-chemisphere transition-colors flex items-center"
            onMouseOver={(e) => {
              setNavigationMenuOpen(true);
              navigationMenuReposition(e.target);
              setNavigationMenu('getting-started');
            }}
            onMouseLeave={navigationMenuLeave}
          >
            <span>JEE</span>
          </button>
        </li>
        <li>
          <button
            className="text-sm font-medium text-gray-700 hover:text-chemisphere transition-colors flex items-center"
            onMouseOver={(e) => {
              setNavigationMenuOpen(true);
              navigationMenuReposition(e.target);
              setNavigationMenu('learn-more');
            }}
            onMouseLeave={navigationMenuLeave}
          >
            <span>NEET</span>
          </button>
        </li> */}
        <li>
          <a
            href="/sign-up"
            className="text-sm font-medium text-gray-700 hover:text-chemisphere transition-colors"
          >
            Contact
          </a>
        </li>
        {/* <li>
          <a
            href="privacy-policy"
            className="text-sm font-medium text-gray-700 hover:text-chemisphere transition-colors"
          >
            Privacy Policy
          </a>
        </li> */}
      </ul>

      {/* Social Media & Button Section */}
         {/* LinkedIn */}

         
          
      <div className="flex items-center space-x-8 mobile:hidden laptop:block text-gray-500">
      <Link href="https://www.youtube.com/@Chemisphere" target="__blank">
                <FaYoutube size={24} className="hover:text-red-500 " />
              </Link>
              <Link
                href="https://www.linkedin.com/company/79804759/admin/feed/posts/"
                target="__blank"
              >
                <FaLinkedin size={24} className="hover:text-blue-700" />
              </Link>
              <Link href="https://www.instagram.com/chemisphere.in/" target="__blank">
                <FaInstagram size={24} className="hover:text-pink-500" />
              </Link>
        <Link href="https://wa.me/918850436230?text=I%20wish%20to%20go%20ahead%20with%20the%20admissions%20at%20Chemisphere" target='__blank' className="px-4 py-2 text-sm font-medium text-white  rounded-md hover:bg-green hover:text-black transition-colors">
<button
  type="submit"
  class="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-blue-700 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#25D366] hover:text-gray-900 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group  "
>
  ENROLL
  <svg
    class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-100 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      class="fill-white group-hover:fill-gray-800"
    ></path>
  </svg>
</button>

        </Link>
        
      </div>

      {/* Dropdown Section */}
      <div
        id="navigationDropdown"
        className={`absolute top-0 mt-6 transition ease-in-out duration-200  -translate-x-1/2 translate-y-11 ${
          navigationMenuOpen ? 'block' : 'hidden'
        }`}
        onMouseOver={() => clearTimeout(navigationMenuCloseTimeout)}
        onMouseLeave={navigationMenuLeave}
      >
        <div className="flex justify-center w-auto h-auto overflow-hidden bg-chemisphere rounded-md  ">
          {navigationMenu === 'getting-started' && (
            <div className="flex items-stretch justify-center w-full max-w-2xl p-6 gap-x-3">
              <div className="w-72">
                <a href="#projects" className="block px-3.5 py-3 text-white text-sm rounded">
                  Projects
                </a>
                <a href="#patents" className="block px-3.5 py-3 text-white text-sm rounded">
                  Patents
                </a>
              </div>
            </div>
          )}
          {navigationMenu === 'learn-more' && (
            <div className="flex items-stretch justify-center w-full p-6">
              <div className="w-72">
                <a href="#bodies" className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                  Professional Bodies
                </a>
                <a href="#committees" className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                  Committees
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
