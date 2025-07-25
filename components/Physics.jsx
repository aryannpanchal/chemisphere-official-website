import React from 'react';

const PhysicsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20">
      {/* Hero Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Master Physics with <span className="text-blue-600">Physixcel</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          A comprehensive, competitive, and concept-oriented Physics program for JEE, NEET, Olympiads, and Board aspirants.
        </p>
      </div>

      {/* About */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">About the Program</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Physixcel is a flagship offering by Chemisphere, created for students aiming to build strong conceptual understanding in Physics. Our teaching framework is crafted by IITians and national rankers, emphasizing clarity, real-life applications, and intensive practice. Whether you're starting from scratch or enhancing your edge for competitive exams, Physixcel is your go-to destination.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Key Highlights</h3>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg list-disc list-inside">
          <li>Live + recorded conceptual lectures</li>
          <li>Fully solved DPPs and Worksheets</li>
          <li>Chapterwise PYQ coverage (JEE & NEET)</li>
          <li>Concept boosters & flashcards</li>
          <li>Regular tests, analysis and ranks</li>
          <li>Mentorship from IITians & NEET Rankers</li>
          <li>Practical demos and simulations for tough concepts</li>
          <li>Exclusive physics-only Olympiad prep batch</li>
        </ul>
      </div>

      {/* Syllabus Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">Syllabus Coverage</h3>

        {/* JEE Syllabus */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold text-blue-700 mb-2">JEE Main & Advanced</h4>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed text-lg">
            <li>Kinematics, Laws of Motion, Work-Energy-Power</li>
            <li>Rotational Motion, Gravitation, Properties of Matter</li>
            <li>Thermodynamics, Kinetic Theory of Gases</li>
            <li>Oscillations, Waves</li>
            <li>Electrostatics, Current Electricity, Capacitance</li>
            <li>Magnetism & Magnetic Effects, EMI & AC</li>
            <li>Ray Optics, Wave Optics</li>
            <li>Modern Physics, Semiconductors</li>
          </ul>
        </div>

        {/* NEET Syllabus */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold text-green-700 mb-2">NEET</h4>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed text-lg">
            <li>Physical world, Units and Measurements</li>
            <li>Kinematics, Laws of Motion</li>
            <li>Work, Energy & Power, Systems of Particles</li>
            <li>Thermodynamics, Mechanical Properties</li>
            <li>Waves, Oscillations, Sound</li>
            <li>Current Electricity, Magnetism</li>
            <li>Optics, Modern Physics</li>
            <li>Electronics & Communication (Basic)</li>
          </ul>
        </div>

        {/* Olympiad Syllabus */}
        <div className="mb-10">
          <h4 className="text-2xl font-semibold text-purple-700 mb-2">Olympiads (NSEP, INPhO)</h4>
          <p className="text-gray-700 text-lg mb-2">
            Includes high-level conceptual and application-based content beyond regular JEE/NEET syllabus:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed text-lg">
            <li>Advanced Mechanics & Thermodynamics</li>
            <li>Wave Mechanics, Electromagnetic Theory</li>
            <li>Special Relativity, Fluid Dynamics</li>
            <li>Experimental Physics, Data Analysis</li>
          </ul>
        </div>

        {/* Boards Syllabus */}
        <div>
          <h4 className="text-2xl font-semibold text-yellow-700 mb-2">Boards (CBSE, HSC, ISC)</h4>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed text-lg">
            <li>Class 11 & 12 NCERT-aligned chapters</li>
            <li>Derivations, diagrams, and long-form questions</li>
            <li>Numerical problem practice</li>
            <li>Board writing strategies</li>
          </ul>
        </div>
      </div>

      {/* Teaching Methodology */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Teaching Methodology</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-2">
          Our method is based on clarity, consistency, and connection to real-world phenomena. From day one, we:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
          <li>Use visual and interactive tools like animations and live demos</li>
          <li>Start with fundamental ideas before diving into complex numericals</li>
          <li>Incorporate problem-solving within conceptual teaching</li>
          <li>Connect topics across chapters to enhance interdisciplinary thinking</li>
        </ul>
      </div>

      {/* Assessment Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Testing & Evaluation</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-2">
          Every student receives continuous feedback through:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
          <li>Weekly concept tests</li>
          <li>Monthly cumulative tests (JEE/NEET Pattern)</li>
          <li>Detailed analysis reports with rank prediction</li>
          <li>Dedicated revision + test batch before exam season</li>
        </ul>
      </div>

   
    </section>
  );
};

export default PhysicsSection;
