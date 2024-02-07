import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';

import Link from'next/link'

function NavbarSection() {
  return (
    <Navbar fluid rounded className='mr-5 ml-5'>      

      <NavbarBrand href="/">
        <img src="/chemisphere-logo-white.svg" className="mr-3 md:h-9 h-12" alt="Chemisphere Logo" />
      </NavbarBrand>            

      <div className="flex md:order-2">      

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
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="/bar.svg" className='w-6 h-6'/>
          }
        >
          <DropdownItem href='about-us' className='hover:bg-chemisphere' >About Us</DropdownItem>
          <DropdownItem href='' className='hover:bg-chemisphere' >JEE Main Portal</DropdownItem>
          <DropdownItem href='' className='hover:bg-chemisphere' >JEE Advanced Portal</DropdownItem>
          <DropdownItem href='' className='hover:bg-chemisphere' >NEET Portal</DropdownItem>

          <DropdownDivider />
          <DropdownItem href='privacy-policy'  className='hover:bg-chemisphere' >Privacy Policy</DropdownItem>
        </Dropdown>
      </div>
  
    </Navbar>
  );
}

export default NavbarSection
