"use client";
import React, { useState, useEffect, useRef } from "react"
import 'swiper/css/pagination';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Label, TextInput } from "flowbite-react";
import Link from 'next/link'

const Hero = () => {
  return (
   
    <div>
      <section class="  ">
    <div class="grid px-10 py-8 mx-auto gap-8 xl:gap-0 laptop:py-16 lg:grid-cols-12 ">
        <div class="mr-auto place-self-center lg:col-span-7 ">
        <h1 className="text-slate-900 font-extrabold laptop:text-6xl mobile:text-5xl mobile:text-center mb-3 tracking-tight laptop:text-left">
            Chemisphere by Chandan Biswas.
        </h1>
            <p class="mobile:text-center text-slate-800 laptop:text-5xl mobile:text-xl my-6 tracking-tight laptop:text-left font-extrabold">Premium chemistry coaching for JEE (Main & Advanced),<br /> NEET & Boards.</p>
            <p className='mobile:text-center laptop:text-6xl mobile:text-3xl font-extrabold text-chemisphere tracking-tighter laptop:text-left'>ADMISSIONS OPEN</p>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 flex justify-center ">
        <div className='NeoButton shadow-3xl p-10 rounded-xl bg-white'> 

<div className="flex  flex-col gap-4 "
>
  <p className='font-semibold text-center mobile:text-2xl laptop:text-3xl '>Book a free demo class NOW!</p>
  <div className='laptop:mx-20'>
    <img src='/chandan.svg' />
  </div>
         <div className='flex laptop:flex-row mobile:flex-col justify-center item-center laptop:gap-10 mobile:gap-5 mobile:pt-3 mobile:text-center laptop:pt-5'>
         <Link  href="/sign-up">
          <button  className=' NeoButton2 text-center hover:border-chemisphere  rounded-lg hover:bg-chemisphere hover:text-white transition p-2'>
          Book via form
          </button>
         </Link>
         {/* <p className='text-center laptop:pt-2'>or</p> */}
        <div>
         <div>
         <Link target='__blank' href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20classes%20of%20Chemisphere!">
          <button className=' NeoButton2 text-center hover:border-chemisphere  rounded-lg hover:bg-chemisphere hover:text-white transition p-2'>
          Book via WhatsApp 
          </button>
         </Link>
          </div>
          <p className='text-center py-2 text-gray-600'>⚡Faster way</p>
        </div> 
        </div>         
        <p className='font-base pt-2 text-gray-500 text-center text-sm '>On booking, you will agree to the terms and conditions of chemisphere.</p>
 
       
</div>


   </div>        
   </div>                
    </div>
</section>
       <div>
        
        
    
</div>
</div>

  )
}

export default Hero
