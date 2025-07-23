'use client';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import Link from 'next/link';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";

const HeaderDashboard = () => {
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
  const { user } = useUser();

  return (
    <nav className="z-30 laptop:flex fixed pb-[20px] items-center top-0 justify-between w-full mobile:hidden px-6 pt-8 mt-0 bg-white">
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
        <h1 className="text-md font-thin text-center">
        Welcome to Chemisphere's Dashboard, {user?.firstName || 'Guest'}
      </h1>
        </li> 
        <li>
          <div className="flex w-full justify-end">
                     <UserButton afterSignOutUrl="/" />
            </div>
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

export default HeaderDashboard;
