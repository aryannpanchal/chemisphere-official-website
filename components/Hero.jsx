"use client";
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button} from 'flowbite-react';
import Link from "next/link";
import ModalButton from "./ModalButton";
let childProcess;
if (typeof window === 'undefined') {
  childProcess = require('child_process');
}
const Hero = () => {

  return (
   
    <div>
       <div>
        
        </div>  
    <section className="lg:mt-14 mx-auto max-w-screen-xl mb-0 px-4 items-center md:flex-row md:px-8 flex flex-col-reverse ">
        
    <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-slate-800 font-bold text-4xl xl:text-5xl">
            Premium <span className="text-red-600">Chemistry</span> lectures for JEE (Main & Advanced),
         NEET & Boards.
        </h1>
        {/* <p className="text-gray-900 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 md:text-left">
        Hi. I am Chandan Biswas. I am a professor of Chemistry, and CEO, Chemisphere and I have mentored over 15000 students in the last decade for JEE Main and Advanced, NEET, MHCET and Class 12th boards and I know inside out of all these exams. I have the honor to be the mentor for over 1000 IITians, and medical professionals.
<br /></p> */}
         <div className="flex pt-0 mt-0 items-center justify-center md:space-y-0 md:mt-0 md:pb-0 md:justify-start ">
     <Link target="__blank" href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20classes%20of%20Chemisphere!" className="flex items-center rounded-full">
 <Button className=' transition ease-in-out duration-300 hover:bg-gray-900 hover:text-slate-900 focus:outline-none bg-whatsapp-green'>
      <Image src="/whatsapp-logo.svg" width={24} height={24} alt="chat on whatsapp button" />
      <p className='text-white font-semibold pl-2'>Connect now to get more class info</p>
  </Button>    
  </Link>

</div>

    </div>
    <div className="flex-1 text-center lg:mt-0 lg:ml-3">
        <Image alt="chandan-sir" src="/chandan.gif" width={0} height={0} className="w-full mx-auto sm:w-10/12  lg:w-full" />
    </div>
     
</section>


</div>
  )
}

export default Hero
