'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, imageUrl, link }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-white rounded-xl shadow-lg p-4 flex flex-col hover:-translate-y-1 transition-transform duration-300"
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-48 object-cover rounded-lg"
    />
    <div className="flex-1 mt-4 flex flex-col justify-between">
      <div>
        <h1 className="text-lg font-semibold text-chemisphere">{title}</h1>
        <p className="text-sm mt-2 leading-relaxed">{description}</p>
        <p className="text-gray-900 font-bold py-4">Online Mode</p>
      </div>
      <Link
        href={link}
        className="w-full text-center bg-white border-2 border-chemisphere text-chemisphere py-2 px-2 rounded-lg block"
      >
        ⚡Quick Inquiry
      </Link>
    </div>
  </motion.article>
);

const ExamCard = () => {
  const cardsData = [
    {
      title: 'JEE Main + Advanced + BITSAT',
      description:
        'Advanced-level coaching for JEE Main, Advanced, and BITSAT with structured syllabus coverage, DPPs, and mock exams.',
      imageUrl: '/plan3.png',
      link: 'https://wa.me/918850436230?text=I%20am%20interested%20in%20JEE%20Main%2C%20Advanced%20or%20BITSAT%20coaching%20at%20Chemisphere',
    },
    {
      title: 'NEET Coaching Program',
      description:
        'Complete NEET syllabus taught from basics to advanced with doubt sessions, concept-based MCQs, and strategic test planning.',
      imageUrl: '/plan4.png',
      link: 'https://wa.me/918850436230?text=I%20am%20interested%20in%20inquiring%20about%20NEET%20coaching%20at%20Chemisphere',
    },
    {
      title: 'IB Board Coaching',
      description:
        'Our expert-led IB coaching offers structured guidance for both HL and SL subjects, ensuring conceptual clarity and excellent internal assessments.',
      imageUrl: '/plan1.png',
      link: 'https://wa.me/918850436230?text=I%20am%20interested%20in%20inquiring%20about%20IB%20Board%20coaching%20at%20Chemisphere',
    },
    {
      title: 'IGCSE Board Coaching',
      description:
        'Specialized coaching for IGCSE students with complete Cambridge curriculum coverage, past paper practice, and performance tracking.',
      imageUrl: '/plan2.png',
      link: 'https://wa.me/918850436230?text=I%20am%20interested%20in%20inquiring%20about%20IGCSE%20Board%20coaching%20at%20Chemisphere',
    },
    {
      title: 'CBSE Class XI & XII Coaching',
      description:
        'CBSE-focused coaching for XI-XII with NCERT-aligned lectures, concept applications, assignments, and exam-focused sessions.',
      imageUrl: '/plan5.png',
      link: 'https://wa.me/918850436230?text=I%20am%20interested%20in%20CBSE%20Class%20XI%20or%20XII%20coaching%20at%20Chemisphere',
    },
  ];
  

  return (
    <section id="classes" className="container mx-auto mt-16 px-4">
      <p className="font-semibold tracking-tighter text-center mb-12 text-3xl laptop:text-4xl text-chemisphere">
      Get started with our premium learning programmes
      </p>

      <motion.div
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
        initial="hidden"
        animate="visible"
      >
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </motion.div>
    </section>
  );
};

export default ExamCard;
