import React from 'react';

const Chandan = () => {
  return (
    <div id='about' className="mobile:flex mobile:flex-col laptop:flex-row mobile:my-8  mobile:mx-4 items-center justify-center laptop:mx-12 laptop:my-24 laptop:gap-12 mobile:mb-24">
      {/* Image Section */}
      <div className="laptop:w-1/2 p-5">
        <div className="image object-center text-center">
          <img 
            src="/ChandanBiswas.jpg" 
            alt="Company Image" 
            className="rounded-3xl mobile:w-full laptop:w-auto" 
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="laptop:w-1/2 p-5">
        <div className="text">
          <p className="my-4 font-bold tracking-tighter laptop:text-4xl mobile:text-2xl mobile:text-center laptop:text-left text-chemisphere">
           Founder's Note
          </p>
          <p className="text-gray-700 laptop:text-left mobile:text-justify">
          Hi, I’m Chandan, the founder of Chemisphere. <br /><br />

With 16+ years of experience teaching Chemistry for JEE Main, Advanced, and NEET, I’ve mentored students across India — from toppers to total turnarounds. <br /> <br />

Over the years, I’ve helped produce ranks like AIR 12, 176, 523, and guided hundreds into IITs, NITs, and top medical colleges — not by dumping content, but by mentoring with strategy, clarity, and care.<br /><br />

After years at top coaching institutes, I realised: mass coaching doesn’t work for everyone. That’s why I built Chemisphere — to give serious students personalised guidance, not generic lectures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chandan;
