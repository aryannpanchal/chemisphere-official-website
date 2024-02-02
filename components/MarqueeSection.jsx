import React from 'react';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';
import { Banner } from 'flowbite-react';
import { FaBookOpen } from 'react-icons/fa';
import { HiArrowRight, HiX } from 'react-icons/hi';

const MarqueeSection = () => {
  return (
    <div>
      <Banner>
      <div className="flex w-full flex-col justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 md:flex-row">
        <div className="mb-4 md:mb-0 md:mr-4">
          <h2 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">Enroll in the new NEET 2024 chemistry crash course NOW!</h2>
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            Only thing you need to ace the exam
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center">
          
          <a
            href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20more%20about%20the%20NEET%202024%20Crash%20Course%20offered%20by%20Chemisphere!"
            className="mr-2 inline-flex items-center justify-center rounded-lg bg-chemisphere px-3 py-2 text-xs font-medium text-white shadow-lg"
           target='__blank'          
          >
            BOOK NOW
            <HiArrowRight className="ml-2 h-4 w-4" />
          </a>
          <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </div>
    </Banner>
    
    </div>
  );
};

export default MarqueeSection;
