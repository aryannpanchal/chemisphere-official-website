'use client';

import React from 'react';

export default function Plan() {
  return (
    <div className="laptop:flex mobile:flex-col sm:align-center p-10 pt-0">
      <h1 className='text-center text-5xl font-semibold pb-4 tracking-tighter text-chemisphere'>Customize Your Plan</h1>
      <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-12 xl:grid-cols-3">
        
        {/* Plan 1 */}
        <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-slate-900">JEE / CET / BITSAT / NEET</h2>
            <p className="mt-2 text-base text-slate-700 leading-tight">Advanced preparation with deep problem-solving focus.</p>
            <a href="/dashboard"
              className="mt-8 block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center">
              Proceed to Inquiry
            </a>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex space-x-3">✅ In-depth Conceptual Classes</li>
              <li className="flex space-x-3">✅ Daily Practice Problems (Level 1 to 3)</li>
              <li className="flex space-x-3">✅ Doubt Solving with Subject Experts</li>
              <li className="flex space-x-3">✅ Full-length Mock Tests & Analysis</li>
              <li className="flex space-x-3">✅ JEE + CET + BITSAT Specific Strategy Modules</li>
              <li className="flex space-x-3">✅ Mentorship by IITians</li>
            </ul>
          </div>
        </div>

        {/* Plan 2 - Combo */}
        <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-slate-900">Combo Plan (Boards + JEE / NEET)</h2>
            <p className="mt-2 text-base text-slate-700 leading-tight">Integrated learning for Boards + Competitive prep.</p>
            <a href="/dashboard"
              className="mt-8 block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center">
              Proceed to Inquiry
            </a>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex space-x-3">✅ NCERT + Advanced Topic Coverage</li>
              <li className="flex space-x-3">✅ Concept Bridge Videos for Boards & Competitive Exams</li>
              <li className="flex space-x-3">✅ Chapter-wise Test Series</li>
              <li className="flex space-x-3">✅ Doubt Solving in Real-Time</li>
              <li className="flex space-x-3">✅ Smart Notes & Revision Sheets</li>
              <li className="flex space-x-3">✅ Board + NEET/JEE Targeted Strategy</li>
            </ul>
          </div>
        </div>

        {/* Plan 3 */}
        <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-slate-900">Board Focused - HSC / CBSE / ISC</h2>
            <p className="mt-2 text-base text-slate-700 leading-tight">Score high in Boards with clarity & precision.</p>
            <a href="/dashboard"
              className="mt-8 block w-full bg-black rounded-md py-2 text-sm font-semibold text-white text-center">
              Proceed to Inquiry
            </a>
          </div>
          <div className="pt-6 pb-8 px-6">
            <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex space-x-3">✅ 100% NCERT + Syllabus Coverage</li>
              <li className="flex space-x-3">✅ Chapterwise Previous Year Boards Questions</li>
              <li className="flex space-x-3">✅ Concept Explanation using Visual Tools</li>
              <li className="flex space-x-3">✅ Answer Writing Tips + Sample Answers</li>
              <li className="flex space-x-3">✅ Doubt-Solving Sessions for Boards</li>
              <li className="flex space-x-3">✅ Regular Assignments & Evaluation</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
