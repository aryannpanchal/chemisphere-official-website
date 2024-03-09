"use client"
import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [activeStudents, setActiveStudents] = useState(0);
  const [rankHolders, setRankHolders] = useState(0);
  const [communityMembers, setCommunityMembers] = useState(0);
  const [cities, setCities] = useState(0);

  useEffect(() => {
    const animateCounting = (targetValue, setterFunction) => {
      let currentValue = 0;
      const increment = Math.ceil(targetValue / 100); // Adjust the speed of counting

      const intervalId = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(intervalId);
        }
        setterFunction(currentValue);
      }, 10); // Adjust the interval for smoother animation
    };

    animateCounting(80, setActiveStudents);
    animateCounting(50, setRankHolders);
    animateCounting(70, setCommunityMembers);
    animateCounting(10, setCities);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on component mount

  return (
    <div>
      
      <section className="text-gray-100 body-font bg-chemisphere mt-0">
     
        <div className="container px-5 pb-10 pt-10 mx-auto  bg-h-100px">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-bold lg:text-6xl text-5xl text-slate-100">{activeStudents}+</h2>
              <p className="leading-relaxed md:text-3xl  font-bold">active students</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-bold lg:text-6xl text-5xl text-gray-100">{rankHolders}+</h2>
              <p className="leading-relaxed md:text-3xl font-bold">rank holders</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-bold lg:text-6xl text-5xl text-gray-100">{communityMembers}K+</h2>
              <p className="leading-relaxed md:text-3xl font-bold">thriving community of students</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-bold lg:text-6xl text-5xl text-gray-100">{cities}+</h2>
              <p className="leading-relaxed md:text-3xl font-bold">cities influenced</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
