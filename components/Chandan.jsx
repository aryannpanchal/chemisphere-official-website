import React from 'react';

const Chandan = () => {
  return (
    <div className="mobile:flex mobile:flex-col laptop:flex-row items-center justify-center laptop:mx-12 laptop:my-24 laptop:gap-12 mobile:mt-0">
      {/* Image Section */}
      <div className="laptop:w-1/2 p-5">
        <div className="image object-center text-center">
          <img 
            src="/cb2.png" 
            alt="Company Image" 
            className="rounded-3xl mobile:w-full laptop:w-auto" 
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="laptop:w-1/2 p-5">
        <div className="text">
          <p className="my-4 font-bold text-3xl mobile:text-center laptop:text-left">
            About <span className="text-chemisphere">Chandan Biswas</span>
          </p>
          <p className="text-gray-700 font-semibold text-left">
            Chemistry learning is boring.
            But what if I said it also has the potential to dramatically increase your marks and help you get a great rank in your desired exams? Luckily, there is a way!
            Hi. I am Chandan Biswas. I am a professor of Chemistry and CEO of Chemisphere, and I have mentored over 15,000 students in the last decade for JEE Main and Advanced, NEET, MHCET, and Class 12th boards. I know the ins and outs of all these exams. I have had the honor to mentor over 1,000 IITians and medical professionals.
            I am going to help you out through each step of your journey on your chemistry curriculum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chandan;
