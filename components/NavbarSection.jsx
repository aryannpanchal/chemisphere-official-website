import {
  Navbar,
  NavbarBrand,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownDivider
} from 'flowbite-react';

import Link from'next/link'

function NavbarSection() {
  return (
    <Navbar fluid rounded className='mr-5 ml-5'>      

      <NavbarBrand href="/">
        <img src="/chemisphere-logo-white.svg" className="mr-3 md:h-9 h-8" alt="Chemisphere Logo" />
      </NavbarBrand>            

      <div className="flex">      


     
       
    
    <div class=" w-full" id="navbar-dropdown">
      <ul class="flex flex-row font-medium md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
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
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="/bar.svg" className='md:w-fit md:h-fit w-5 h-5'/>
          }
        >
         
          <DropdownItem href='about-us' className='hover:bg-chemisphere'>About Us</DropdownItem>
          <DropdownItem href='jee-main-portal' className='hover:bg-chemisphere'>JEE Main Portal</DropdownItem>
          <DropdownItem href=''className='hover:bg-chemisphere'>JEE Advanced Portal</DropdownItem>
          <DropdownItem href=''className='hover:bg-chemisphere'>NEET Portal</DropdownItem>

          <DropdownDivider />
          <DropdownItem href='privacy-policy'className='hover:bg-chemisphere'>Privacy Policy</DropdownItem>
        </Dropdown>
      </div>
     
        
      
      </ul>
    </div>
</div>
    </Navbar>
  );
}

export default NavbarSection
