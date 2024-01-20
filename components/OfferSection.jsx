import React from 'react';
import Image from 'next/image';

const OfferSection = () => {
  const features = [
    {
      title: 'Organised study material',
      desc: 'Access well-structured and curated study materials designed to enhance your learning experience.',
      image: '/organised_study_material.svg', // Specify the image path for this feature
    },
    {
      title: 'Online tests',
      desc: 'Evaluate your knowledge with our comprehensive online testing platform.',
      image: '/online tests.svg', // Specify the image path for this feature
    },
    {
      title: 'Online study materials',
      desc: 'Explore a vast array of online study materials tailored to your academic needs.',
      image: '/online_study_material.svg', // Specify the image path for this feature
    },
    {
      title: 'Smart attendance system',
      desc: 'Experience a smart attendance system that simplifies tracking and enhances class management.',
      image: '/smart_attendance_system.svg', // Specify the image path for this feature
    },
    {
      title: '24x7 guidance',
      desc: 'Get round-the-clock guidance and support from our dedicated team of educators.',
      image: '/guidance.svg', // Specify the image path for this feature
    },
    {
      title: 'Small batches',
      desc: 'Benefit from personalized attention in small batches, fostering a conducive learning environment.',
      image: '/small_batches.svg', // Specify the image path for this feature
    },
  ];

  return (
    <div>
      <section className="py-14 md:bg-background-hero bg-no-repeat md:bg-cover mt-5 bg-background-mobile bg-cover  ">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-300 md:px-8 pt-5 ">
          <div className="max-w-xl space-y-3 pt-3">
            <h3 className="text-slate-100 text-3xl font-semibold sm:text-4xl">Why Chemisphere is better?</h3>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx} className="space-y-3">
                  <div className="w-12 h-12 border bg-white text-white rounded-full flex items-center justify-center">
                    <Image src={item.image} alt={`tick_${idx + 1}`} width={30} height={30} />
                  </div>
                  <h4 className="text-lg text-white font-semibold">{item.title}</h4>
                  <p className="text-white">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferSection;
