'use client'
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Banner } from 'flowbite-react';
import { FaBookOpen } from 'react-icons/fa';
import { HiArrowRight, HiX } from 'react-icons/hi';

const JeePortal = () => {
  return (
    <>
    <Banner>
      <div className="flex w-full flex-col justify-between border-b border-gray-200 bg-bg-banner-JEE bg-cover bg-center p-4 mt-2  md:flex-row">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h2 className="mb-1 text-base font-semibold text-white">Download the JEE MAIN 2024 Information Bulletin now</h2>
          <p className="flex items-center text-sm font-normal text-gray-100">
            Crack JEE Main with Chemisphere!
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center">
          
          <a
            href="https://jeemain.nta.ac.in/images/information-bulletin-for-jee-main-2024.pdf"
            className="mr-2 inline-flex items-center justify-center rounded-lg bg-chemisphere px-3 py-2 text-xs font-medium text-white shadow-lg"
           target='__blank'          
          >
            Download now
            <HiArrowRight className="ml-2 h-4 w-4" />
          </a>
          <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-white">
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </div>
    </Banner>

    
      <div className='flex justify-left items-center mt-10 mx-2 sm:mx-5'>
        <div className='w-full min-w-md p-6 bg-white border border-gray-200 rounded-lg shadow text-center'>
          <Link href='#'>
            <h5 className='md:text-4xl text-2xl font-bold tracking-tight text-chemisphere pb-2 uppercase'>JEE Main Examination Portal</h5>
          </Link>
          <p className='font-normal text-gray-700'>
          The Ministry of Education (MoE), Government of India (GoI) has established the National Testing Agency (NTA) as an independent, autonomous, and self-sustained premier testing organization under the Societies Registration Act (1860) for conducting efficient, transparent, and international standardized tests in order to assess the competency of candidates for admission to premier higher education institutions with a mission to improve equity and quality in education by developing and administering research-based valid, reliable, efficient, transparent, fair and international level assessments.

NTA has created a system that is promoting teaching (by teachers), learning (by students), and assessment (by parents and institutions). NTA strongly believes in the quality, efficiency, effectiveness, equity, and security of assessments. To practice these values, NTA is constantly engaging with its stakeholders, viz. students, parents, teachers, experts, and partner institutions
          </p>
        </div>
        <div className='min-w-md w-full'>
          helo
        </div>
      </div>
      <section class="text-gray-600 body-font">
  <div class="container px-5 pb-24 mx-auto">
    
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-black mb-1">JEE MAIN RESOURCE</h2>
          <h1 class="title-font sm:text-2xl text-xl font-semibold text-chemisphere mb-3">SYLLABUS 2024</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="text-indigo-500 inline-flex items-center" href='https://jeemain.nta.ac.in/images/syllabus-for-jee-main-2024-as-on-01-november-2023.pdf'>Download for free
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
           
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            
           
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</section>

<Swiper 
 spaceBetween={2}
 slidesPerView={2}
className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

 </>
  );
};

export default JeePortal;
