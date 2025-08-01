import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const [activeStudents, setActiveStudents] = useState(0);
  const [rankHolders, setRankHolders] = useState(0);
  const [communityMembers, setCommunityMembers] = useState(0);
  const [cities, setCities] = useState(0);

  const [ref, inView] = useInView({ triggerOnce: true });

  const animateCount = (target: number, setter: React.Dispatch<React.SetStateAction<number>>, duration = 1500) => {
    const start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 10);
    let current = start;

    const timer = setInterval(() => {
      current += 1;
      setter(current);
      if (current >= target) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    if (inView) {
      animateCount(200, setActiveStudents);
      animateCount(100, setRankHolders);
      animateCount(250, setCommunityMembers);
      animateCount(25, setCities);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div
        id="stats"
        className="mobile:my-24 text-gray-100 body-font laptop:mb-32 laptop:mx-24 mobile:max-w-screen mobile:mx-6 rounded-2xl"
      >
        <section className="container px-5 mx-auto p-6 bg-black rounded-3xl">
          <div className="flex flex-wrap m-4 text-center text-white">
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold laptop:text-6xl mobile:text-4xl text-chemisphere">
                {activeStudents}+
              </p>
              <p className="leading-relaxed laptop:text-3xl font-thin">active students</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold laptop:text-6xl mobile:text-4xl text-chemisphere">
                {rankHolders}+
              </p>
              <p className="leading-relaxed laptop:text-3xl font-thin">rank holders</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold laptop:text-6xl mobile:text-4xl text-chemisphere">
                {communityMembers}K+
              </p>
              <p className="leading-relaxed laptop:text-3xl font-thin">thriving community of students</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold laptop:text-6xl mobile:text-4xl text-chemisphere">
                {cities}+
              </p>
              <p className="leading-relaxed laptop:text-3xl font-thin">cities influenced</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stats;
