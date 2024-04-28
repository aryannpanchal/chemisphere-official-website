import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const [activeStudents, setActiveStudents] = useState(0);
  const [rankHolders, setRankHolders] = useState(0);
  const [communityMembers, setCommunityMembers] = useState(0);
  const [cities, setCities] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setActiveStudents(200);
      setRankHolders(100);
      setCommunityMembers(250);
      setCities(25);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <section className="text-gray-100 body-font bg-chemisphere mb-24 laptop:mx-24 mobile:max-w-screen mobile:mx-6 rounded-2xl">
        <div className="container px-5 mx-auto bg-h-100px">
          <div className="flex flex-wrap -m-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="p-4 sm:w-1/4 w-1/2"
            >
              <p className="title-font font-bold lg:text-6xl text-5xl text-slate-100">{activeStudents}+</p>
              <p className="leading-relaxed md:text-3xl font-bold">active students</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="p-4 sm:w-1/4 w-1/2"
            >
              <p className="title-font font-bold lg:text-6xl text-5xl text-gray-100">{rankHolders}+</p>
              <p className="leading-relaxed md:text-3xl font-bold">rank holders</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              className="p-4 sm:w-1/4 w-1/2"
            >
              <p className="title-font font-bold lg:text-6xl text-5xl text-gray-100">{communityMembers}K+</p>
              <p className="leading-relaxed md:text-3xl font-bold">thriving community of students</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
              className="p-4 sm:w-1/4 w-1/2"
            >
              <p className="title-font font-bold lg:text-6xl text-5xl text-gray-100">{cities}+</p>
              <p className="leading-relaxed md:text-3xl font-bold">cities influenced</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
