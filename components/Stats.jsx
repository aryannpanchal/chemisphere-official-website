"use client"
import React, { useState, useEffect } from 'react';

const Stats = () => {
  const activeStudents = 200;
  const rankHolders = 100;
  const communityMembers = 250;
  const cities = 25;

  return (
    <div>
      
      <section className="text-gray-100 body-font bg-chemisphere  mb-24 laptop:mx-24 mobile:max-w-screen mobile:mx-6 rounded-2xl ">
     
        <div className="container px-5  mx-auto bg-h-100px">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold lg:text-6xl text-5xl text-slate-100">{activeStudents}+</p>
              <p className="leading-relaxed md:text-3xl  font-bold">active students</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold lg:text-6xl text-5xl text-gray-100">{rankHolders}+</p>
              <p className="leading-relaxed md:text-3xl font-bold">rank holders</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold lg:text-6xl text-5xl text-gray-100">{communityMembers}K+</p>
              <p className="leading-relaxed md:text-3xl font-bold">thriving community of students</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <p className="title-font font-bold lg:text-6xl text-5xl text-gray-100">{cities}+</p>
              <p className="leading-relaxed md:text-3xl font-bold">cities influenced</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
