'use client'
// Import necessary components from React and Next.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarSection() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  const handleUserMenuToggle = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleUserMenuClick = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleDropdown1Toggle = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const handleDropdown2Toggle = () => {
    setDropdown2Open(!dropdown2Open);
  };

  return (
    <nav className="bg-white max-w-screen">
      <div className=" max-w-screen px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          <div className="flex sm:hidden items-center">
            {/* Link the logo to '/' using Next.js Link */}
            <Link href="/">
              <Image
                src="/chemisphere-logo-white.svg"
                alt="Your Company"
                height={50} // Set the height for laptops
                width={200} // Set the width for laptops
              />
            </Link>
          </div>

          <div className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* Link the logo to '/' using Next.js Link */}
              <Link href="/">
                <Image
                  src="/chemisphere-logo-white.svg"
                  alt="Your Company"
                  height={64} // Set the height for laptops
                  width={220} // Set the width for laptops
                />
              </Link>
            </div>
          </div>

         
        </div>
      </div>
    </nav>
  );
}
