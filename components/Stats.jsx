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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mobile:my-24 text-gray-100 body-font laptop:mb-44 laptop:mx-24 mobile:max-w-screen mobile:mx-6 rounded-2xl  "
      >
        <section className="container px-5 mx-auto p-6 bg-black rounded-3xl">
          <div className="flex flex-wrap m-4 text-center text-white ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="p-4 sm:w-1/4 w-1/2"
            >
              <p className="title-font font-bold laptop:text-6xl mobile:text-4xl text-chemisphere">{activeStudents}+</p>
              <p className="leading-relaxed laptop:text-3xl font-thin">active students</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="p-4 sm:w-1/4 w-1/2"
            >
              <p className="title-font font-bold laptop:text-6xl mobile:text-4xl text-chemisphere">{rankHolders}+</p>
              <p className="leading-relaxed laptop:text-3xl font-thin">rank holders</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              className="p-4 sm:w-1/4 w-1/2"
            >
              <p className="title-font font-bold laptop:text-6xl mobile:text-4xl text-chemisphere">{communityMembers}K+</p>
              <p className="leading-relaxed laptop:text-3xl font-thin">thriving community of students</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
              className="p-4 sm:w-1/4 w-1/2"
            >
              <p className="title-font font-bold laptop:text-6xl mobile:text-4xl text-chemisphere">{cities}+</p>
              <p className="leading-relaxed laptop:text-3xl font-thin">cities influenced</p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Stats;
