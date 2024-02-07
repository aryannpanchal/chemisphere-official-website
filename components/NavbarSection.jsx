'use client'
import {
  Navbar,
  NavbarBrand,
  Avatar,
  Dropdown
} from 'flowbite-react';

import Link from'next/link'

function NavbarSection() {
  return (
    <Navbar fluid rounded className='mr-5 ml-5'>      

      <NavbarBrand href="/">
        <img src="/chemisphere-logo-white.svg" className="mr-3 md:h-9 h-10" alt="Chemisphere Logo" />
      </NavbarBrand>            

      <div className="flex">      


     
       
    
    <div class=" w-full" id="navbar-dropdown">
      <ul class="flex flex-row font-medium  border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
      {/* social links  */}
      <Link href='https://www.youtube.com/@Chemisphere' target="__blank">
        <Avatar alt="youtube-logo" img="/yt.svg" className='w-6 h-6 mr-5'/>
      </Link>
      <Link href='https://www.linkedin.com/company/79804759/admin/feed/posts/' target="__blank">
        <Avatar alt="linkedin-logo" img="/linkedin.svg" className='w-6 h-6 mr-5'/>
      </Link>
      <Link href='https://www.instagram.com/chemisphere.in/' target="__blank">
        <Avatar alt="instagram-logo" img="/instagram.svg" className='w-6 h-6 mr-5'/>
      </Link>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex-row items-center justify-between w-full py-2 pl-3 text-gray-900 rounded md:p-0"><svg className=
            "w-3 h-fit lg:w-5 lg:h-fit" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="about-us" class="block px-4 py-2 hover:bg-gray-100 ">About us</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100  ">JEE Main portal</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100  ">JEE Advanced portal</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100  ">NEET portal</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="privacy-policy" class="block px-4 py-2 text-sm  hover:bg-gray-100">Privacy policy</a>
                </div>
            </div>
     
        
      
      </ul>
    </div>
</div>
    </Navbar>
  );
}

export default NavbarSection
