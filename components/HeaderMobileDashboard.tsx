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
        <div className="flex w-full justify-end">
                     <UserButton afterSignOutUrl="/" />
            </div>
        {/* Menu Items */}
  
      </div>
    </header>
  );
};

export default HeaderMobileDashboard;
