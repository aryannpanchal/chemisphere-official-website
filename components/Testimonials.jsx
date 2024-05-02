import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {

  return (
    <>
    <section className='laptop:mb-[150px]'>
      <h2 className='laptop:hidden text-center mobile:block font-semibold text-4xl'>Testimonials</h2>
      <div className='grid laptop:grid-cols-4 gap-6 mt-5 p-6'>
        <div className='relative bg-white text-black shadow-2xl p-6 rounded-lg laptop:col-span-2'>
          <Image src='/comma.svg' alt='' width={32} height={32} className='absolute top-0 right-6 z-0' />
          <div className='flex justiify-start space-x-4 relative z-10'>
            <Image src='/avnit.png' alt='' width={32} height={32} className='h-12 w-12 rounded-full border-2 border-pruple-400'/>
            <div>
              <h2 className='font-bold text-xl'>Avnit Khade</h2>
              <h3 className='text-lg opacity-50'>IIT Bombay: Engineering Physics</h3>
            </div>
          </div>
          <p className='realtive z-10 mt-4 font-bold text-xl leading-tight'>
          JEE Main 2023: 97.8 percentile
          </p>
          <p className='mt-4 laptop:text-2xl opacity-70 '>
          Chandan sir at Chemisphere turned organic chemistry from a challenge to my strongest suit.
          </p>
        </div>
        <div className='relative bg-black text-white p-8 rounded-lg shadow-2xl'>
          <div className='flex justiify-start space-x-4 relative z-10'>
            <Image src='/anmol.jpg' alt='' width={32} height={32} className='h-12 w-12 rounded-full border-2 border-pruple-400'/>
            <div>
              <h2 className='font-bold text-xl'>Anmol Dureja</h2>
              <h3 className='text-md opacity-50'>JEE Main 2023 AIR 14158</h3>
            </div>
          </div>
          <p className='realtive z-10 mt-4 font-bold text-xl leading-tight'>
          JEE Advanced 2023 AIR 2948
          </p>
          <p className='mt-4 laptop:text-2xl opacity-70 '>
          Chandan Sir's teaching made chemistry a breeze!
          </p>
        </div>
        <div className='relative bg-red-600 text-white p-8 rounded-lg laptop:row-span-2 shadow-2xl'>
          <div className='flex justiify-start space-x-4 relative z-10'>
            <Image src='/manasvi.svg' alt='' width={32} height={32} className='h-12 w-12 rounded-full border-2 border-pruple-400'/>
            <div>
              <h2 className='font-bold text-xl'>Manasvi Patil</h2>
              <h3 className='text-lg opacity-96'>NEET Rank holder</h3>
            </div>
          </div>
          <p className='realtive z-10 mt-4 font-bold text-xl leading-tight'>
          NEET 2023 93.4 Percentile
          </p>
          <p className='mt-4 laptop:text-4xl opacity-70 '>
          Online flexibility, in-depth coverage and effective doubt-solving make it a regret-free choice for success. 
          </p>
        </div>
        <div className='relative text-black p-8 rounded-lg laptop:col-span-2 mobile:hidden laptop:block '>
            <marquee scrollamount="15">
            <p className='text-9xl opacity-50'>Testimonials</p> 
            </marquee>
          </div>           
       
        <div className='relative bg-blue-900 text-white p-8 rounded-lg laptop:row-span-2 laptop:row-start-2 laptop:col-start-1 shadow-2xl'>
          <div className='flex justiify-start space-x-4 relative z-10'>
            <Image src='/mohit.svg' alt='' width={32} height={32} className='h-12 w-12 rounded-full border-2 border-pruple-400'/>
            <div>
              <h2 className='font-bold text-xl'>Mohit Laddha</h2>
              <h3 className='text-lg opacity-50'>JEE Main 2022 AIR 851</h3>
            </div>
          </div>
          <p className='realtive z-10 mt-4 font-bold text-xl leading-tight'>
          JEE Advanced 2022 AIR 5280 
          </p>
          <p className='mt-4 laptop:text-2xl opacity-70 '>
          Chandan Sir's impressive, well-structured lectures and organized notes were instrumental in my achievements.
          </p>
        </div>
        </div>
    </section>
    </>
  );
};

export default Testimonials;
