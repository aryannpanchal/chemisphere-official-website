// components/NavbarSection.js
'use client'
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white">
        <div className=" py-3 px-4 laptop:flex laptop:justify-between laptop:items-center">
          {/* Logo */}
          <div className="flex justify-between items-center">
            <Link href="/">
              <img
                src="/chemisphere-logo-white.svg"
                alt="Logo"
                className="laptop:h-10 mobile:h-8"
              />
            </Link>

            {/* Hamburger menu for mobile */}
            <div className="laptop:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 focus:outline-none"
              >
                <HiOutlineMenuAlt3 size={30} />
              </button>
            </div>
          </div>

          {/* Links and social icons for large screens */}
          <div className="mobile:hidden laptop:flex laptop:items-center">
            <ul className="flex space-x-6">
              <li>
                <Link href="/about-us" className="hover:text-red-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-red-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-red-500">
                  Pricing
                </Link>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-6 ml-8">
              <Link href="https://www.youtube.com/@Chemisphere" target="__blank">
                <FaYoutube size={24} className="hover:text-red-500" />
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
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="laptop:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            <div className="flex justify-between items-center px-4 py-3 bg-white shadow-lg">
              <Link href="/">
                <img
                  src="/chemisphere-logo-white.svg"
                  alt="Logo"
                  className="h-10"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 focus:outline-none"
              >
                <AiOutlineClose size={30} />
              </button>
            </div>

            <div className="mt-4 space-y-6">
              <Link
                href="/about-us"
                className="block text-white text-lg text-center"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="block text-white text-lg text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="block text-white text-lg text-center"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="block text-white text-lg text-center"
              >
                Pricing
              </Link>

              <div className="flex justify-center space-x-6 mt-8">
                <Link href="https://www.youtube.com/@Chemisphere" target="__blank">
                  <FaYoutube size={30} className="text-white hover:text-red-500" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/79804759/admin/feed/posts/"
                  target="__blank"
                >
                  <FaLinkedin size={30} className="text-white hover:text-blue-700" />
                </Link>
                <Link href="https://www.instagram.com/chemisphere.in/" target="__blank">
                  <FaInstagram size={30} className="text-white hover:text-pink-500" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavbarSection;
