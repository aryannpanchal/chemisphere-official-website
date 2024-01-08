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
            <span className="text-red-600">Premium</span> Chemistry lectures for JEE (Mains and Advanced),
         NEET, MHTCET and XI-XII Boards.
        </h1>
        <p className="text-gray-900 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 md:text-left">
        Hi. I am Chandan Biswas. I am a professor of Chemistry, and CEO, Chemisphere and I have mentored over 15000 students in the last decade for JEE Main and Advanced, NEET, MHCET and Class 12th boards and I know inside out of all these exams. I have the honor to be the mentor for over 1000 IITians, and medical professionals.
<br /><span className="font-bold text-chemisphere">We customize classes according to your needs! </span></p>
         <div className="flex pt-0 mt-0 items-center justify-center  md:space-y-0 md:mt-0 md:pb-0 md:justify-start">
                      <Link target="__blank" href=" https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20more%20about%20Chemisphere!"  className="rounded-full transition ease-in-out duration-300">
                      <Image src="/whatsapp chat.svg" width={194} height={194} alt="chat on whatsapp button"  />
                      </Link>
                      </div>
    </div>
    <div className="flex-1 text-center lg:mt-0 lg:ml-3">
        <Image alt="chandan-sir" src="/chandan.gif" width={0} height={0} className="w-full mx-auto sm:w-10/12  lg:w-full" />
    </div>
     
</section><div className="text-center pt-0 mt-0 pb-2 md:hidden ">
  <p>or</p>
  </div>
<div className="flex pt-0 mt-0 items-center justify-center  md:space-y-0 md:mt-0  pb-2 md:pb-0 md:hidden ">
                      <ModalButton />
</div>


</div>
  )
}

export default Hero