import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BannerOne = () => (
  <div className='laptop:flex mobile:flex-col laptop:flex-row laptop:items-center mobile:items-center gap-10 mobile:gap-6 laptop:gap-44 justify-center p-4 mobile:p-2 laptop:p-6 bg-[#022CB9] rounded laptop:w-fit mobile:w-fit mobile:mx-4 mobile:my-12'>
    <Link href="/">
      <img
        src='/Physixcel2.png'
        alt="Logo"
        className=" mobile:w-24 laptop:w-44 cursor-pointer"
      />
    </Link>
    <p className='text-white  mobile:text-lg laptop:text-4xl font-bold  mobile:text-left laptop:text-left mobile:my-6'>
      Master physics with Physixcel's physics programs <br /> 
      <span className='text-sm mobile:text-xs laptop:text-xl'>ADMISSIONS OPEN</span>
    </p>
    <a 
      href="https://wa.me/918850436230?text=I%20wish%20to%20enroll%20for%20physics%20classes" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white border-2 border-white mobile:px-3 py-2 rounded text-sm mobile:text-xs laptop:text-base"
    >
      WhatsApp Us 
    </a>
  </div>
);

const BannerTwo = () => (
  <div className='laptop:flex mobile:flex-col laptop:flex-row items-center gap-10 mobile:gap-6 laptop:gap-44 justify-center p-4 mobile:p-2 laptop:p-6 bg-[#00FF00] rounded mobile:w-fit  mobile:mx-4 mobile:my-12'>
    <Link href="/">
      <img
        src='/maga.png'
        alt="Logo"
        className="mobile:w-24 laptop:w-44 cursor-pointer"
      />
    </Link>
    <p className='text-black  mobile:text-lg laptop:text-4xl font-bold mobile:text-left laptop:text-left mobile:my-6'>
      Launching premium math programs by Mathematrix <br /> 
      <span className='text-sm mobile:text-xs laptop:text-xl'>ADMISSIONS OPEN</span>
    </p>
    <a 
      href="https://wa.me/918850436230?text=I%20wish%20to%20enroll%20for%20math%20classes" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-black border-2 border-black px-4 mobile:px-3 laptop:px-6 py-2 rounded text-sm mobile:text-xs laptop:text-base"
    >
      WhatsApp Us
    </a>
  </div>
);

const Announcement = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const banners = [<BannerOne />, <BannerTwo />];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className='mt-16 mobile:mt-12 laptop:mt-36 mobile:w-fit overflow-hidden rounded mx-4 mobile:mx-2 min-h-32 mobile:min-h-24 laptop:min-h-44 relative'>
      <motion.div 
        key={activeIndex} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {banners[activeIndex]}
      </motion.div>
      
      <div className='absolute bottom-2 laptop:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 mobile:gap-1'>
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 mobile:h-1.5 mobile:w-1.5 laptop:h-3 laptop:w-3 rounded-full ${activeIndex === index ? 'bg-chemisphere' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Announcement;
