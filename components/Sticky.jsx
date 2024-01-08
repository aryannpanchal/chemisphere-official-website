import React from 'react'
import { Banner, BannerCollapseButton, Button } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import Link from 'next/link';
import Image from "next/image"

const sticky = () => {
  return (
    <div>
    <Banner>
    <div id="marketing-banner"  className="bg-slate-900 fixed bottom-6 z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 dark:bg-slate-900 dark:border-gray-600">
      <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
        <Link href="https://flowbite.com/" className="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
          <Image src="/chemisphere-white.svg" alt="Flowbite Logo" width={68} height={68} />
        </Link>
        <p className="flex items-center text-sm font-normal text-gray-200 dark:text-gray-400">Join our 2.2K Family on YouTube!</p>
      </div>
      <div className="flex items-center flex-shrink-0">
        <Link href="#" target='__blank' className="px-5 py-2 me-2 text-xs font-medium text-white bg-red-600 rounded-lg  focus:ring-4 focus:ring-blue-300 dark:bg-red-600  focus:outline-none dark:focus:ring-blue-800">Subscribe Now!</Link>
        
          <BannerCollapseButton color="gray" className="border-1 bg-transparent text-gray-100 dark:text-gray-100">
            <HiX className="h-4 w-4" />
          </BannerCollapseButton>
        </div>
        
      </div>
    </Banner>
    </div>


  
  )
}

export default sticky