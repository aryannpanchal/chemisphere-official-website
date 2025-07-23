'use client';
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import { UserButton } from "@clerk/nextjs";

const HeaderMobileDashboard: React.FC = () => {
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
          <p className='text-center'>Click on profile icon to logout</p>
           <Link href="https://wa.me/918850436230?text=I%20wish%20to%20go%20ahead%20with%20the%20admissions%20at%20Chemisphere" target='__blank' className="px-4 py-2 text-sm font-medium text-white  rounded-md hover:bg-green hover:text-white transition-colors">
           <div className="flex w-full justify-end">
                     <UserButton afterSignOutUrl="/" />
            </div>
         
                 </Link>
         
        </ul>
      </div>
    </header>
  );
};

export default HeaderMobileDashboard;
