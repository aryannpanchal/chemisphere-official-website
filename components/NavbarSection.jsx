import React from 'react'
import Link from 'next/link';

const NavbarSection = () => {
  return (
    <>
    

<nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/chemisphere-logo-white.svg" class="md:h-12" alt="Flowbite Logo" />
    </Link>
    <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div class="hidden w-full" id="navbar-hamburger">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-100 border-gray-700 ">
        <li>
          <Link href="about-us" class="block py-2 px-3 text-gray-900 hover:bg-gray-100 " aria-current="page">About Us</Link>
        </li>
        <li>
          <Link href="" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">JEE Main Portal</Link>
        </li>
        <li>
          <Link href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">JEE Advanced Portal</Link>
        </li>
        <li>
          <Link href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">NEET Portal</Link>
        </li>
        <li>
          <Link href="privacy-policy" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 ">Privacy Policy</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavbarSection