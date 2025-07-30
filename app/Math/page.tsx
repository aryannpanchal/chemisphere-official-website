import HeaderMobile from '@/components/HeaderMobile';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Math = () => {
  return (
    <> 
    <Header />
    <HeaderMobile />
    <div className="w-full max-w-6xl mx-auto px-4 laptop:my-36 mobile:my-24">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="flex-1 p-4 md:p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Mathematrix by Chemisphere
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <span className="font-semibold text-black">Mathematrix</span> — your one-stop destination for mastering mathematics. Whether you're preparing for competitive exams or excelling in academics, we provide an in-depth, concept-based learning system to elevate your mathematical thinking.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            From Class 11–12 board exams to national-level entrances like <strong>IIT-JEE</strong>, <strong>MHT-CET</strong>, <strong>NEET (Maths)</strong>, and Olympiads, our expert-designed programs will take you from fundamentals to advanced problem-solving.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
            <li>Live + recorded sessions by experienced mentors</li>
            <li>Comprehensive notes, DPPs, and practice tests</li>
            <li>Real-time doubt support and personal mentorship</li>
          </ul>

          <a
            href="/dashboard"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
          >
            Enroll Now
          </a>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center p-4">
          <img
            src="/m.svg"
            alt="Mathematrix Logo"
            className="w-full max-w-[500px] h-auto"
          />
        </div>
      </div>

      {/* Extended Details Section */}
      <div className="mt-24 space-y-8 text-gray-800 text-lg leading-relaxed">
        <h2 className="text-3xl font-bold text-black">Why Mathematics Matters in Every Exam</h2>
        <p>
          Mathematics is not just a subject—it's a language of logic, structure, and precision. At Mathematrix, we structure our curriculum to address the specific patterns, topics, and mental skills required by each exam board and competitive platform.
        </p>
        <p>
          In <strong>IIT-JEE</strong>, Mathematics carries a weightage of one-third of the total score and tests analytical thinking through topics like Calculus, Coordinate Geometry, Algebra, and Probability. For <strong>MHT-CET</strong>, it dominates the PCM group, with speed-based MCQ strategies crucial to scoring high. Even for <strong>NEET</strong> aspirants aiming for Engineering or Biotechnology later, foundational Math remains essential.
        </p>
        <p>
          Board exams like <strong>CBSE</strong> and <strong>HSC</strong> require conceptual clarity, stepwise presentation, and application-oriented understanding—our modules are fully aligned with NCERT and state boards, offering practice papers, blueprint-based tests, and topic-wise revision.
        </p>
        <p>
          We also guide students in preparing for <strong>Olympiads (RMO, INMO, etc.)</strong> with separate tracks in Number Theory, Geometry, Combinatorics, and Algebraic techniques — helping mathematically gifted students stand out globally.
        </p>

        <h2 className="text-3xl font-bold text-black">Exam-wise Weightage & Focus Areas</h2>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-300 mt-6">
            <thead>
              <tr className="bg-black text-white">
                <th className="py-3 px-4">Exam</th>
                <th className="py-3 px-4">Total Marks</th>
                <th className="py-3 px-4">Maths Weightage</th>
                <th className="py-3 px-4">Important Chapters</th>
              </tr>
            </thead>
            <tbody className="text-gray-900">
              <tr className="border-t border-gray-300">
                <td className="py-3 px-4">JEE Main</td>
                <td className="py-3 px-4">300</td>
                <td className="py-3 px-4">33% (100 marks)</td>
                <td className="py-3 px-4">Calculus, Coordinate Geometry, Algebra, Trigonometry</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-3 px-4">JEE Advanced</td>
                <td className="py-3 px-4">Varies</td>
                <td className="py-3 px-4">~1/3 of paper</td>
                <td className="py-3 px-4">Complex Numbers, Vectors, 3D Geometry, Integration</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-3 px-4">MHT-CET</td>
                <td className="py-3 px-4">200</td>
                <td className="py-3 px-4">50% (Math only)</td>
                <td className="py-3 px-4">Derivatives, Matrices, Determinants, Probability</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-3 px-4">CBSE Class 12</td>
                <td className="py-3 px-4">80 (Theory)</td>
                <td className="py-3 px-4">100%</td>
                <td className="py-3 px-4">Applications of Derivatives, Integrals, Linear Programming</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-3 px-4">HSC Maharashtra Board</td>
                <td className="py-3 px-4">80 (Theory)</td>
                <td className="py-3 px-4">100%</td>
                <td className="py-3 px-4">Limits, Differentiation, Probability, Statistics</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-3 px-4">RMO / Olympiads</td>
                <td className="py-3 px-4">Varies</td>
                <td className="py-3 px-4">100%</td>
                <td className="py-3 px-4">Number Theory, Geometry, Algebra, Combinatorics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold text-black mt-12">Our Pedagogical Approach</h2>
        <p>
          At Mathematrix, we do not believe in rote learning. Every topic begins with intuitive logic, visual understanding, and real-life analogies, followed by progressive practice questions and mixed-topic assignments. Our AI-powered test analytics and smart feedback help students spot weak areas and fix them quickly.
        </p>
        <p>
          Whether you're aiming for a perfect 100 in Boards or under 500 AIR in JEE, our hybrid (online + offline) model, regular assessments, and mentorship-driven guidance will transform your preparation journey.
        </p>
        <p className="font-semibold text-black">
          Join the thousands of students across India who’ve chosen Chemisphere and Mathematrix for their academic journey. It's time to make your mark — one equation at a time.
        </p>
      </div>
    </div>
    <Footer />
    </>
   
  );
};

export default Math;
