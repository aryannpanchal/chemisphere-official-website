'use client'
// Import necessary components from React and Next.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarSection() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleUserMenuToggle = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const handleUserMenuEnter = () => {
    setUserMenuOpen(true);
  };

  const handleUserMenuLeave = () => {
    setUserMenuOpen(false);
  };

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              onMouseEnter={handleUserMenuEnter}
              onMouseLeave={handleUserMenuLeave}
              className="relative rounded-full p-1 bg-white text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>

            <div
              className={`${
                userMenuOpen ? 'block' : 'hidden'
              } transform origin-top-right transition-transform ease-out duration-300`}
            >

              <div
                className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-100 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
                onMouseEnter={handleUserMenuEnter}
                onMouseLeave={handleUserMenuLeave}
              >
                <Link href="/jee-main-portal">
                  <p className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-200 hover:text-chemisphere" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                    JEE Main Portal
                  </p>
                </Link>
                <Link href="/jee-advanced-portal">
                  <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-chemisphere" role="menuitem" tabIndex="-1" id="user-menu-item-1">
                    JEE Advanced Portal
                  </p>
                </Link>
                <Link href="/neet-portal">
                  <p className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-200 hover:text-chemisphere" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                    NEET Portal
                  </p>
                </Link>
                <Link href="/about-us">
                  <p className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-200 hover:text-chemisphere" role="menuitem" tabIndex="-1" id="user-menu-item-3">
                    About Us
                  </p>
                </Link>
                <Link href="/privacy-policy">
                  <p className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-200 hover:text-chemisphere" role="menuitem" tabIndex="-1" id="user-menu-item-4">
                    Privacy Policy
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
