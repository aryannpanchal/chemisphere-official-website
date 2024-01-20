"use client";
import Image from "next/image";
import React, { useEffect } from "react"
import {useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faLinkedin,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

import Link from 'next/link'


const Navbar = () => {    
    
    const [state, setState]=useState(false)
 // Replace javascript:void(0) path with your path
 const navigation = [
    { title: "About us", path: "/about-us" },
    { title: "Careers", path: "/" },
    { title: "Privacy Policy", path: "/" },
]
useEffect(() => {
    const handleClickOutside = (e) => {
        const target = e.target;

        if (target && !target.closest(".menu-btn")) {
            setState(false);
        }
    };

    document.onclick = handleClickOutside;
    return () => {
        document.onclick = null; // Remove the event listener on component unmount
    };
}, []);
  return (

    <div>

         <nav className={`bg-white md:pb-5 lg:pb-1 items-center md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}`}>
            <div className="gap-x-80 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <a href="https://chemisphere.in">
                        
                    <Image  src="/chemisphere-logo-white.svg"
                            width={200}
                            height={20}
                            alt="Chemisphere-logo"
                        />
                    </a>
                    <div className="md:hidden flex gap-5 items-center ">
                        <button className="menu-btn text-gray-900 hover:text-grey-900"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                       <div>
                       <a href={`tel:${8850436230}`}>
                        <Image src="/call.svg" alt="call-now" width={20} height={20} />
                       </a>
                       </div>
                    </div>
                     
                </div>
                <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'}  `}>
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 pl-86 md:space-y-0 pb-1">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-900 hover:text-red-500">
                                        <a href={item.path} className="block">
                                            {item.title}
                                            
                                        </a>
                                    </li>
                                )
                            })
                        }
                   <div className='space-y-6 md:hidden'>  
                        <Link href='https://www.youtube.com/@Chemisphere' target='__blank'>
                         <FontAwesomeIcon icon={faYoutube} size="1.5x" className='mr-4' />
                        </Link>                
                        <Link href='https://www.instagram.com/chemisphere.in/' target='__blank'>
                         <FontAwesomeIcon icon={faInstagram} size="1.5x" className='mr-4' />
                        </Link> 
                        <Link href='https://www.linkedin.com/company/79804759/admin/feed/posts/' target='__blank'>
                         <FontAwesomeIcon icon={faLinkedin} size="1.5x" className='mr-4' />
                        </Link> 
                        <Link href='https://www.facebook.com/chemisphere.in?mibextid=ZbWKwL' target='__blank'>
                         <FontAwesomeIcon icon={faFacebook} size="1.5x" className='mr-4' />
                        </Link> 
                    </div> 
                    </ul>    
                    
                     

                     <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6  md:space-y-0 md:mt-0 pb-5 md:pb-0 hidden md:flex">  
                    </div>   
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
