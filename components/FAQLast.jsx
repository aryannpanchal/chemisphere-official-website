import React from 'react';
import Link from 'next/link';

const FAQLast = () => {
  return (
    <>
      <section className="w-full overflow-x-hidden bg-black min-h-64 text-center">
        <p className="text-white/60 text-center laptop:text-6xl mobile:text-3xl font-semibold mobile:py-12 laptop:py-24">
          Ready to Excel in Chemistry?
        </p>
        <a href="/sign-up">
          <button
            className="relative px-8 py-3 bg-chemisphere text-white font-semibold rounded-lg border-purple-500 hover:border-red-400 transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(255,0,0,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(255,0,0,0.4)] group"
          >
            <span className="flex items-center space-x-2">
              <span className="text-white laptop:text-3xl mobile:text-2xl tracking-tighter font-normal text-center">
                Apply For Mentorship Now!
              </span>
            </span>
          </button>
          <p className='text-center text-white/80 pt-4 mb-12'>Limited Seats Available</p>
        </a>
      </section>
    </>
  );
};

export default FAQLast;
