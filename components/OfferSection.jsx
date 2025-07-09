import React from 'react';
import Image from 'next/image';

const OfferSection = () => {
  const features = [
    {
      title: 'Organised study material',
      desc: 'Access well-structured and curated study materials designed to enhance your learning experience.',
      image: '/organised_study_material.svg',
    },
    {
      title: 'Online tests',
      desc: 'Evaluate your knowledge with our comprehensive online testing platform.',
      image: '/online tests.svg',
    },
    {
      title: 'Online study materials',
      desc: 'Explore a vast array of online study materials tailored to your academic needs.',
      image: '/online_study_material.svg',
    },
    {
      title: 'Smart attendance system',
      desc: 'Experience a smart attendance system that simplifies tracking and enhances class management.',
      image: '/smart_attendance_system.svg',
    },
    {
      title: '24x7 guidance',
      desc: 'Get round-the-clock guidance and support from our dedicated team of educators.',
      image: '/guidance.svg',
    },
    {
      title: 'Small batches',
      desc: 'Benefit from personalized attention in small batches, fostering a conducive learning environment.',
      image: '/small_batches.svg',
    },
  ];

  return (
    <section className="bg-white laptop:mb-48 mobile:mb-24 laptop:mx-24  mobile:mx-4">
      <div className=" px-4 text-betterblack md:px-8 laptop:mt-28 mobile:mt-16">
        <div className="max-w-screen-xl space-y-3 pt-3 text-center ">
          <p className="text-black font-extrabold laptop:text-4xl mobile:text-3xl text-center mobile:text-left">
            What makes Chemisphere better?
          </p>
        </div>
        <div className="mt-12 ">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 ">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="space-y-6 p-4 rounded-md neumorphic-card shadow-lg"
              >
                <div
                  className="w-12 h-12 bg-white border-chemisphere border-2 text-white rounded-full flex items-center justify-center grayscale"
                >
                  <Image src={item.image} alt={`tick_${idx + 1}`} width={30} height={30} />
                </div>
                <h4 className="text-chemisphere font-extrabold mobile:text-xl laptop:text-2xl">
                  {item.title}
                </h4>
                <p className="text-black laptop:text-xl mobile:text-lg">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
