'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link'
import Marquee from 'react-fast-marquee';
import { Swiper, SwiperSlide } from "swiper/react";

const images = ["/jee adv1.jpg", "/jee adv2.jpg", "/jee adv3.jpg"];
const links = [

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20Organic%20Chemistry.",

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20Physical%20Chemistry.",

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20inorganic%20Chemistry."
];

const CrashCourse = () => {
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
  <>
  <div className='bg-chemisphere md:bg-white '>
       <section className='ml-8 mr-8 mb-14 pt-10 pb-10 lg:w-72'>
        
            <Marquee className='text-white pb-5 md:hidden block'>LATEST COURSE ANNOUNCEMENT</Marquee>

          {/* <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            
            <div className='  text-chemisphere border-gray-200 rounded-lg shadow flex-col gap-12 justify-center'>
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
      </Slider> */} 
      <Swiper>
  <SwiperSlide>
  <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            
            <div className='  text-chemisphere border-gray-200 rounded-lg shadow flex-col gap-12 justify-center'>
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
 </Swiper>
    </section>
  </div>

    </>
  );
};

export default CrashCourse;
