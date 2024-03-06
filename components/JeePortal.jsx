import React from 'react';
import Link from 'next/link';

const JeePortal = () => {
  return (
    <>
    

    <div id="informational-banner" tabindex="-1" class=" start-0 z-50 flex justify-center w-full p-4 ">
    <div class="mt-5 md:mb-0 md:me-4 flex-row">
        <h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">Download the JEE MAIN INFORMATION BULLETIN 2024</h2>
        <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">The JEE MAIN INFORMATION BULLETIN provides an A to Z brief on the examination.</p>
      <div class="flex items-center flex-shrink-0 pt-3">
       
        <a href="https://jeemain.nta.ac.in/images/information-bulletin-for-jee-main-2024.pdf" class="inline-flex items-center justify-center px-3 py-2 me-2 text-xs font-medium text-white bg-chemisphere rounded-lg hover:bg-black focus:ring-4 focus:ring-blue-300 dark:bg-chemisphere dark:hover:bg-black focus:outline-none dark:focus:ring-blue-800">Download</a>
        <button data-dismiss-target="#informational-banner" type="button" class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close banner</span>
        </button>
    </div> </div>
 
</div>
      <div className='flex justify-left items-center mt-10 mx-2 sm:mx-5'>
        <div className='w-full min-w-md p-6 bg-white border border-gray-200 rounded-lg shadow text-center'>
          <Link href='#'>
            <h5 className='md:text-4xl text-2xl font-bold tracking-tight text-chemisphere pb-2 uppercase'>JEE Main Examination Portal</h5>
          </Link>
          <p className='font-normal text-gray-700'>
            JEE Main stands as the inaugural phase of the IIT Joint Entrance Exam (IIT JEE). Administered in an online format by the National Testing Agency, this computer-based test serves as a gateway for students aspiring to pursue undergraduate courses in renowned engineering institutes across India, including IITs and NITs.
          </p>
        </div>
      </div>
 </>
  );
};

export default JeePortal;
