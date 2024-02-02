
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

function NavbarSection() {
  return (
    <Navbar fluid rounded className='mr-5 ml-5'>
      <NavbarBrand href="/">
        <img src="/chemisphere-logo-white.svg" className="mr-3 md:h-9 h-12" alt="Chemisphere Logo" />
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="/bar.svg" className='w-6 h-6'/>
          }
        >
         
          <DropdownItem href='about-us'>About Us</DropdownItem>
          <DropdownItem href=''>JEE Main Portal</DropdownItem>
          <DropdownItem href=''>JEE Advanced Portal</DropdownItem>
          <DropdownItem href=''>NEET Portal</DropdownItem>

          <DropdownDivider />
          <DropdownItem href='privacy-policy'>Privacy Policy</DropdownItem>
        </Dropdown>
      </div>
  
    </Navbar>
  );
}

export default NavbarSection
