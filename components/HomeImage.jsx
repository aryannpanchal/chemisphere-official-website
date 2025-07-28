'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/r2.jpg',
  '/r3.jpg',
  '/r32.jpg',
  '/r31.jpg',
  '/r25.jpg',
];

const HomeImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" bg-black flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-10">
      {/* Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-chemisphere mb-4 tracking-tighter">Experience the Future of Learning</h2>
        <p className="text-gray-100 text-lg">
          Explore our expertly crafted content and witness your academic journey transform. Interactive lectures, real-world problem solving, and an intuitive design that makes learning easier than ever.
        </p>
        <a href='/Results' className='bg-chemisphere text-white py-4 px-2'>View Gallery</a>
      </div>

      {/* Carousel */}
      <div className="w-full laptop:w-1/2 h-[500px] relative overflow-hidden rounded-xl shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentIndex]}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 transition-smooth"
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomeImage;
