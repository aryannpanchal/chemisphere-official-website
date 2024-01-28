import React from 'react';
import Link from 'next/link';

const JeePortal = () => {
  return (
    <>
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
