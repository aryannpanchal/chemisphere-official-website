import React from 'react';

const Physixcel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 laptop:my-36 mobile:my-24">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="flex-1 p-4 md:p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Physixcel by Chemisphere
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <span className="font-semibold text-black">Physixcel</span> — where physics is not just learned, it's mastered. 
            Our meticulously designed modules, concept-first approach, and expert mentorship ensure you build a rock-solid foundation.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Whether you're targeting <strong>IIT-JEE</strong>, <strong>NEET</strong>, Olympiads, or Board Exams, we simplify the toughest concepts and sharpen your problem-solving edge.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
            <li>Live and recorded classes with top educators</li>
            <li>Structured DPPs and test series</li>
            <li>Mentorship from IITians & NEET experts</li>
          </ul>

          {/* CTA Button */}
          <a
            href="/dashboard"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
          >
            Enroll Now
          </a>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center p-4">
          <img
            src="/physixcel.svg"
            alt="Physixcel Logo"
            className="w-full max-w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Physixcel;
