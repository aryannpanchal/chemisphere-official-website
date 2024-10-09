import React from 'react';
import Footer from '@/components/Footer';
import NavbarSection from '@/components/NavbarSection';
import AboutJEEBreadcrumb from '@/components/AboutJEEBreadcrumb';

const JEEMain2025 = () => {
    const faqs = [
        {
          question: "What does JEE Main stand for?",
          answer: "JEE Main refers to the Joint Entrance Examination (Main), an entrance test for admission into BE/BTech/BArch/BPlan programs at various public and private engineering institutions across India."
        },
        {
          question: "What is the aim of JEE Main?",
          answer: "JEE Main replaced AIEEE and acts as a unified engineering entrance exam for securing admission into engineering or architecture colleges in India."
        },
        {
          question: "When is the JEE Main 2025 exam scheduled?",
          answer: "The specific dates for JEE Main 2025 are listed above for both sessions. The complete schedule will be released soon on this page."
        },
        {
          question: "How can I find my exam city details for JEE Main 2025?",
          answer: "NTA has released the JEE (Main) 2025 Exam City Intimation Slip on its official website - jeemain.nta.nic.in."
        },
        {
          question: "Which institutions accept JEE Main scores?",
          answer: "NITs, IIITs, GFTIs, and some state engineering colleges and private institutions accept JEE Main scores."
        },
        {
          question: "How does JEE Main differ from JEE Advanced?",
          answer: "JEE Main is for admission to engineering or architecture colleges, while JEE Advanced is specifically for admission into IITs."
        },
        {
          question: "What are the basic eligibility criteria for JEE Main 2025?",
          answer: "Eligibility requires a minimum qualification of 10+2 with specific subjects and an age limit."
        },
        {
          question: "Can students who have taken a gap year apply for JEE Main?",
          answer: "Yes, candidates who have taken a gap year can apply for JEE Main."
        },
        {
          question: "What is the process for completing the JEE Main application form?",
          answer: "The application process includes registration, form filling, document upload, and payment of fees."
        },
        {
          question: "How do I select my preferred payment method for the application fee?",
          answer: "Application fees can be paid online using a debit/credit card, net banking, or through an e-challan."
        },
        {
          question: "Is there a deadline for submitting the JEE Main application, and are there any late fees?",
          answer: "Yes, there is a deadline, and late fees may apply for submissions after the regular deadline."
        },
        {
          question: "What is the exam pattern for JEE Main 2025 Paper 1?",
          answer: "Paper 1 covers Physics, Chemistry, and Mathematics, with a mix of multiple-choice and numerical value-based questions."
        },
        {
          question: "How does Paper 2 (B.Arch) differ from Paper 1?",
          answer: "Paper 2 focuses on Mathematics, Aptitude, and a Drawing Test, while Paper 1 focuses on Physics, Chemistry, and Mathematics."
        },
        {
          question: "Could you explain the exam pattern for Paper 3 (B.Planning)?",
          answer: "Paper 3 includes Mathematics, Aptitude, and Planning-based questions."
        },
        {
          question: "What are some recommended reference books for JEE Main Physics preparation?",
          answer: "Recommended books include H.C. Verma's 'Concepts of Physics' and 'Fundamentals of Physics' by Halliday, Resnick, and Walker."
        },
        {
          question: "Can you suggest top reference books for JEE Main Chemistry?",
          answer: "'Physical Chemistry' by O.P. Tandon and 'Organic Chemistry' by Morrison and Boyd."
        },
        {
          question: "What are some highly recommended reference books for JEE Main Mathematics?",
          answer: "R.D. Sharma's 'Mathematics' and 'Higher Algebra' by Hall and Knight."
        },
        {
          question: "How can analyzing previous years’ question papers help JEE Main aspirants?",
          answer: "It helps understand question patterns, time management, and identify strengths and weaknesses."
        },
        {
          question: "Where can I find subject-wise analyses of previous JEE Main question papers?",
          answer: "Various educational platforms, coaching centers, or official JEE websites provide analyses."
        },
        {
          question: "What key insights from previous papers can assist in my JEE Main preparation?",
          answer: "Previous papers show topic distribution, difficulty levels, and question types."
        },
      ];

  return (
    <>
      <NavbarSection />
      <AboutJEEBreadcrumb />
      
      <div className="w-full bg-gray-100 px-4 py-3 text-left text-gray-800 break-words max-w-md rounded mx-auto my-12">
        <div className="text-xl font-semibold text-center">
          <strong>Table of content</strong>
        </div>
        <ul className="mt-2 list-disc px-2 pl-6">
          <li><a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#introduction">Introduction</a></li>
          <li><a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#dates">Important Dates</a></li>
          <li><a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#reservation">Reservation Criteria</a></li>
          <li><a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#eligibility">Eligibility Criteria</a></li>
          <li><a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#syllabus">Syllabus</a></li>
          <li><a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#exam-pattern">Exam Pattern</a></li>
          <li><a className="block hover:bg-gray-200 px-2 py-1 rounded" href="#fee-structure">Fee Structure</a></li>
        </ul>
      </div>

      <div className="max-w-7xl mx-auto p-6 bg-white border-2 border-gray-400 mt-6 rounded-lg">
        <h1 className="text-center font-semibold text-4xl mb-16">
          JEE Main 2025 Exam: Important Dates, Syllabus, Exam Pattern, Fee, and Schedule
        </h1>

        <section id="introduction" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            JEE Main 2025, organized by the NTA, is a computer-based exam that provides entry to prestigious undergraduate engineering programs in India. It serves as the gateway to the IITs and other leading institutes.
          </p>
        </section>

        <section id="dates" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">JEE Main 2025 Important Dates</h2>
          <table className="w-full bg-gray-100 border border-gray-200 table-auto">
            <thead>
              <tr className="bg-gray-300 text-left">
                <th className="p-4">Event</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border">Start Date of JEE Registration</td>
                <td className="p-4 border">November 2024</td>
              </tr>
              <tr>
                <td className="p-4 border">Last Date to Apply</td>
                <td className="p-4 border">December 2024</td>
              </tr>
              <tr>
                <td className="p-4 border">JEE Admit Card Release</td>
                <td className="p-4 border">3 days before the exam</td>
              </tr>
              <tr>
                <td className="p-4 border">JEE Main Exam Date (Session 1)</td>
                <td className="p-4 border">January 2025</td>
              </tr>
              <tr>
                <td className="p-4 border">JEE Main Exam Date (Session 2)</td>
                <td className="p-4 border">April 2025</td>
              </tr>
              <tr>
                <td className="p-4 border">Result Declaration</td>
                <td className="p-4 border">A week after the exam</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="reservation" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">JEE Main 2025: Reservation Criteria</h2>
          <ul className="list-disc ml-8 space-y-2">
            <li className="text-lg">General (EWS): 10%</li>
            <li className="text-lg">OBC-NCL: 27%</li>
            <li className="text-lg">SC: 15%</li>
            <li className="text-lg">ST: 7.5%</li>
            <li className="text-lg">PwD: 5% (horizontal reservation across all categories)</li>
          </ul>
        </section>

        <section id="eligibility" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria for JEE Main 2025</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Candidates must have passed the 10+2 examination in 2023 or 2024 or be appearing for it in 2025. The age limit is relaxed for reserved category students.
          </p>
        </section>

        <section id="syllabus" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">JEE Main 2025 Syllabus</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The syllabus for JEE Main includes topics from Physics, Chemistry, and Mathematics at the 10+2 level.
          </p>
        </section>

        <section id="exam-pattern" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">JEE Main 2025 Exam Pattern</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Paper 1 for B.E./B.Tech courses has a total of 90 questions covering Physics, Chemistry, and Mathematics.
          </p>
        </section>

        <section id="fee-structure" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fee Structure for JEE Main 2025</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The application fee can be paid online through various modes including credit card, debit card, net banking, or UPI.
          </p>
        </section>

        <section id="faqs" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-gray-100 p-4 rounded-md">
                <summary className="font-semibold">{faq.question}</summary>
                <p className="mt-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default JEEMain2025;
