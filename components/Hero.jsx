"use client";
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button} from 'flowbite-react';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from 'react-slick';
const images = ["/jee adv1.jpg", "/jee adv2.jpg", "/jee adv3.jpg"];
const links = [

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20Organic%20Chemistry.",

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20Physical%20Chemistry.",

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20inorganic%20Chemistry."
];
const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
   
    <div>
       <div>
        
          
    <section className="lg:mt-24 mx-auto max-w-screen-xl mb-2 px-4 items-center md:flex-row md:px-8 flex flex-col-reverse bg-bg-hero ">
        
    <div className="space-y-4 flex-1 sm:text-left lg:text-left">
        <h1 className="text-slate-800 text-left font-extrabold lg:text-6xl text-5xl">
            Premium <span className="text-red-600">Chemistry</span> lectures for JEE (Main & Advanced),
         NEET & Boards.
        </h1>
        {/* <p className="text-gray-900 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 md:text-left">
        Hi. I am Chandan Biswas. I am a professor of Chemistry, and CEO, Chemisphere and I have mentored over 15000 students in the last decade for JEE Main and Advanced, NEET, MHCET and Class 12th boards and I know inside out of all these exams. I have the honor to be the mentor for over 1000 IITians, and medical professionals.
<br /></p> */}
         <div className="flex pt-5 mt-0 items-center justify-left md:space-y-0 md:mt-0 md:pb-0 md:justify-start ">
     <Link target="__blank" href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20classes%20of%20Chemisphere!" className="flex items-center rounded-full">
 <Button className=' border-2-black hover:bg-gray-100 transition shadow '>
      <Image src="/whatsapp-logo.svg" width={24} height={24} alt="chat on whatsapp button" />
      <p className='text-black font-semibold pl-2'>Connect now to get more class info</p>
  </Button>    
  </Link>

</div>

    </div>
    <div className="flex-1 text-center lg:mt-0 lg:ml-3">
      <section className='lg:w-96 w-80 lg:ml-24 '>
       
    <Swiper>
  <SwiperSlide>
  <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            
            <div className='  text-chemisphere border-gray-200 rounded-lg shadow flex-col gap-12 justify-center p-6 lg:p-0'>
              <div>              

                  <img className="rounded-t-lg" src={image} alt={`Slide ${index + 1}`} />
              </div>
              <Link href={links[index]} target='__blank'>
              <div className=' bg-gray-100 rounded-br-lg rounded-bl-lg text-center hover:bg-white transition transform hover:text-chemisphere'>
                
                <button className=" hover:underline font-bold py-2 px-4 rounded-full">
                  BOOK NOW!
                </button>
                
              </div> 
              </Link>
            </div>
           
          </div>
        ))}
      </Slider>
  </SwiperSlide>
 </Swiper>    </section> </div>
     
</section></div>
</div>

  )
}

export default Hero
