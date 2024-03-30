"use client";
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button} from 'flowbite-react';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import { Pagination , Navigation} from 'swiper/modules';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Hero = () => {
  
  return (
   
    <div>
       <div>
        
           
    <section className="lg:pt-6 mt-4 lg:mt-0 lg:pb-24 gap-14 lg:gap-0 pb-10 items-center flex-col flex md:px-8 md:flex-row text-left m-2 md:text-center lg:bg-none bg-cover bg-center lg:mr-14 ">
        
    <div className="space-x-xl flex-1   ">
       <h1 className="text-slate-800 font-extrabold lg:text-6xl text-4xl mb-3 tracking-tight ">
            Chemisphere by Chandan Biswas
        </h1>
        <h2 className='text-slate-800 font-normal lg:text-5xl text-3xl mb-6 tracking-tight '> Premium chemistry coaching for JEE (Main & Advanced),<br /> NEET & Boards.</h2>
        <p className='lg:text-6xl text-4xl font-extrabold text-chemisphere tracking-tighter'>ADMISSIONS OPEN</p>
        {/* <p className="text-gray-900 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 md:text-left">
        Hi. I am Chandan Biswas. I am a professor of Chemistry, and CEO, Chemisphere and I have mentored over 15000 students in the last decade for JEE Main and Advanced, NEET, MHCET and Class 12th boards and I know inside out of all these exams. I have the honor to be the mentor for over 1000 IITians, and medical professionals.
<br /></p> */}
         <div className="flex pt-1 mt-0 items-center justify-left md:space-y-0 md:mt-0 md:pb-0 md:justify-start ">
     <Link target="__blank" href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20classes%20of%20Chemisphere!" className="flex items-center rounded-full">
 <div className='justify-center flex '>
  <Button className=' bg-chemisphere transition hover:bg-gray-100 hover:text-gray smooth border-chemisphere border-2 shadow px-4 '>
      <Image src="/whatsapp-logo.svg" width={34} height={24} alt="chat on whatsapp button"/>
      <p className='text-black font-bold lg:text-2xl pl-4 px-42'>Connect now to get more class info</p>
  </Button>
 </div>
  </Link>

</div>

    </div>   
    <div className='lg:mr-24'> 
        <img width="480px" src="/chandan.svg" alt="" />

       </div>
  
    </section>
    
</div>
</div>

  )
}

export default Hero
