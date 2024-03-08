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
    <>
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
    {/* <header class="py-8 lg:pt-6 lg:pb-14 bg-pink-200">
            <div 
            class="container mx-auto lg:relative flex flex-col lg:flex-row
            lg:justify-between gap-y-4 lg:gap-y-0">

                <div class="flex justify-center lg:justify-normal">
                    <a href="#">
                        <img src="/chemisphere-logo-white.svg" alt="" />
                    </a>
                </div>
                <div class="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                    <div class="flex justify-center items-center gap-x-2 lg:justify-normal">
                        <i class="ri-map-pin-line text-2xl text-accent"></i>
                        <div class="text-secondary">Andheri, Mumbai</div>
                    </div>
                    <div class="flex justify-center items-center gap-x-2 lg:justify-normal">
                    <i class="ri-phone-fill text-2xl text-accent"></i>
                    <div class="text-secondary">+91 9876543210</div>
                    </div>
                    <button type="button" class="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0"> Call now </button>
                <nav class="mnav bg-white fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl 
                lg:hidden transition-all duration-300 z-20">
            <div class="mnav__close-btn bg-primary w-8 h-8 relative -right -full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all ">btn</div>
            <i class=" mnav__close-btn-icon ri-arrow-right-s-line text-2xl text-white"></i>
            <div>
                <a href="#"> 
                    <img src="/chemisphere-logo-white.svg" />
                </a>
            </div>
        </nav>
                
            </div>
        </div>    
        </header> */}

    </>
   
  );
}

export default NavbarSection
