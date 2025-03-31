import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BannerOne = () => (
  <div className='flex items-center gap-44 justify-center p-6 bg-[#022CB9] rounded'>
    <Link href="/">
      <img
        src='/Physixcel2.png'
        alt="Logo"
        className="w-44 cursor-pointer"
      />
    </Link>
    <p className='text-white text-4xl font-bold'>
      Master physics with Physixcel's physics programs <br /> 
      <span className='text-xl'>ADMISSIONS OPEN</span>
    </p>
    <a 
  href="https://wa.me/918850436230?text=I%20wish%20to%20enroll%20for%20physics%20classes" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-white border-2 border-white px-6 py-2 rounded"
>
  WhatsApp Us →
</a>  </div>
);

const BannerTwo = () => (
  <div className='flex items-center gap-44 justify-center p-6 bg-[#00FF00] rounded'>
    <Link href="/">
      <img
        src='/maga.png'
        alt="Logo"
        className="w-44 cursor-pointer"
      />
    </Link>
    <p className='text-black text-4xl font-bold'>
      Launching premium math programs by Mathematrix <br /> 
      <span className='text-xl'>ADMISSIONS OPEN</span>
    </p>
    <a 
  href="https://wa.me/918850436230?text=I%20wish%20to%20enroll%20for%20math%20classes" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-black border-2 border-black px-6 py-2 rounded"
>
  WhatsApp Us →
</a>  </div>
);

// const BannerThree = () => (
//     <div className='flex items-center gap-44 justify-center p-6 bg-chemisphere rounded'>
//       <Link href="/">
//         <img
//           src='/chemisphere-white.svg'
//           alt="Logo"
//           className="h-32 cursor-pointer ml-14"
//         />
//       </Link>
//       <p className='text-white text-4xl font-bold h-44'>
//         Master physics with Physixcel's physics programs <br /> 
//         <span className='text-xl'>ADMISSIONS OPEN</span>
//       </p>
//       <button className='text-white border-2 px-6 py-2 rounded'>Drop an inquiry →</button>
//     </div>
//   );
  
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
    <div className='mt-36  min-w-screen rounded mx-14 min-h-44 relative'>
      <motion.div 
        key={activeIndex} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {banners[activeIndex]}
      </motion.div>
      
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Announcement;