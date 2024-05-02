import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
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
      image: '/online_tests.svg',
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="bg-white laptop:mb-64">
      <div className="max-w-screen-xl mx-auto px-4 text-betterblack md:px-8 pt-5">
        <div className="max-w-screen-xl space-y-3 pt-3">
          <motion.p
            className="text-black text-5xl font-semibold sm:text-4xl laptop:text-center"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1.5}}
          >
            What makes Chemisphere better?
          </motion.p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <motion.li
                key={idx}
                className="space-y-3 p-4 rounded-md neumorphic-card border border-1 shadow"
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 1.5, delay: idx * 1 }}
              >
                <motion.div
                  className="w-12 h-12 bg-white border-chemisphere border-2 text-white rounded-full flex items-center justify-center grayscale"
                  initial="hidden"
                  animate={controls}
                  variants={variants}
                >
                  <Image src={item.image} alt={`tick_${idx + 1}`} width={30} height={30} />
                </motion.div>
                <motion.h4
                  className="text-xl text-chemisphere font-semibold"
                  initial="hidden"
                  animate={controls}
                  variants={variants}
                >
                  {item.title}
                </motion.h4>
                <motion.p
                  className="text-black laptop:text-xl mobile:text-lg"
                  initial="hidden"
                  animate={controls}
                  variants={variants}
                >
                  {item.desc}
                </motion.p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
