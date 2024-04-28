import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <section className="bg-white mb-24">
        <div className="max-w-screen-xl mx-auto px-4 text-betterblack md:px-8 pt-5">
          <div className="max-w-screen-xl space-y-3 pt-3">
            <p className="text-black text-5xl font-semibold sm:text-4xl laptop:text-center">What makes Chemisphere better?</p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="space-y-3 p-4 rounded-md neumorphic-card border border-1 shadow"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ duration: 2, delay: inView ? idx * 0.2 : 0 }}
                >
                  <div className="w-12 h-12 bg-white border-chemisphere border-2 text-white rounded-full flex items-center justify-center grayscale">
                    <Image src={item.image} alt={`tick_${idx + 1}`} width={30} height={30} />
                  </div>
                  <h4 className="text-xl text-chemisphere font-semibold">{item.title}</h4>
                  <p className="text-black laptop:text-xl mobile:text-lg">{item.desc}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferSection;
