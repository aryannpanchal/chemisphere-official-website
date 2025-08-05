'use client';

import React from 'react';
import Image from 'next/image';

export default function Plan() {
  return (
    <div id='masterclass' className="laptop:flex mobile:flex-col sm:align-center p-10 pt-0">
      <h1 className='text-center text-5xl font-semibold pb-4 tracking-tighter text-chemisphere'>
      You’ve Got 90 Days? We’ve Got the Plan.
      </h1>

      <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-full px-4">

        {/* Plan 1 - Physical Chemistry */}
        <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <div className="relative w-full mb-4">
              <Image
                src="/cc1.png"
                alt="Physical Chemistry Masterclass"
                width={400}
                height={200}
                className="rounded-md w-full h-auto"
              />
            </div>
            <h2 className="text-xl leading-6 font-bold text-slate-900">
              Physical Chemistry Masterclass
            </h2>
            <p className="mt-2 text-base text-slate-700 leading-tight">
              Complete class 11 & 12 Physical Chemistry, brutally optimized for JEE & NEET.
            </p>
            <a href="/dashboard"
              className="mt-8 block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center">
              Proceed to Inquiry
            </a>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex space-x-3">✅ Full Syllabus Coverage</li>
              <li className="flex space-x-3">✅ Numericals with Step-by-Step Methods</li>
              <li className="flex space-x-3">✅ Logics Behind Formulae Derivations</li>
              <li className="flex space-x-3">✅ Quiz + Practice Modules after Each Topic</li>
              <li className="flex space-x-3">✅ Concept Recap Sheets</li>
              <li className="flex space-x-3">✅ Exam-Oriented Shortcuts & Strategy</li>
            </ul>
          </div>
        </div>

        {/* Plan 2 - Organic Chemistry */}
        <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <div className="relative w-full mb-4">
              <Image
                src="/cc2.png"
                alt="Organic Chemistry Masterclass"
                width={400}
                height={200}
                className="rounded-md w-full h-auto"
              />
            </div>
            <h2 className="text-xl leading-6 font-bold text-slate-900">
              Organic Chemistry Masterclass
            </h2>
            <p className="mt-2 text-base text-slate-700 leading-tight">
              Build logic, reaction mechanism clarity, and memory frameworks for scoring in organic chemistry.
            </p>
            <a href="/dashboard"
              className="mt-8 block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center">
              Proceed to Inquiry
            </a>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex space-x-3">✅ Named Reactions & Mechanism Logs</li>
              <li className="flex space-x-3">✅ Problem-Solving Frameworks</li>
              <li className="flex space-x-3">✅ Reaction Flowcharts + Mindmaps</li>
              <li className="flex space-x-3">✅ Functional Group Transformation Practice</li>
              <li className="flex space-x-3">✅ Multi-Concept Reaction Training</li>
              <li className="flex space-x-3">✅ Exclusive Organic PYQs Practice</li>
            </ul>
          </div>
        </div>

        {/* Plan 3 - Inorganic Chemistry */}
        <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <div className="relative w-full mb-4">
              <Image
                src="/cc3.png"
                alt="Inorganic Chemistry Masterclass"
                width={400}
                height={200}
                className="rounded-md w-full h-auto"
              />
            </div>
            <h2 className="text-xl leading-6 font-bold text-slate-900">
              Inorganic Chemistry Masterclass
            </h2>
            <p className="mt-2 text-base text-slate-700 leading-tight">
              Memorize smartly, understand trends, and ace NCERT-based scoring topics in inorganic chemistry.
            </p>
            <a href="/dashboard"
              className="mt-8 block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center">
              Proceed to Inquiry
            </a>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex space-x-3">✅ NCERT-First Approach with Visual Recall</li>
              <li className="flex space-x-3">✅ Colour Changes, Trends & Exceptions</li>
              <li className="flex space-x-3">✅ Group-wise Memory Hacks</li>
              <li className="flex space-x-3">✅ Factual & Conceptual PYQs</li>
              <li className="flex space-x-3">✅ Structured Notes + Summary Cards</li>
              <li className="flex space-x-3">✅ Practice Quizzes for Retention</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
