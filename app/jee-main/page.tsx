import React from 'react';
import Footer from '@/components/Footer'
import NavbarSection from '@/components/NavbarSection'
import AboutJEEBreadcrumb from '@/components/AboutJEEBreadcrumb'

const JEEMain2025 = () => {
    const faqs = [
        {
          question: "What does JEE Main stand for?",
          answer: "JEE Main refers to the Joint Entrance Examination (Main), which is an entrance test for admission into BE/BTech/BArch/BPlan programs at various public and private engineering institutions across India."
        },
        {
          question: "What is the aim of JEE Main?",
          answer: "JEE Main was introduced to replace AIEEE. It acts as a unified engineering entrance exam for securing admission into engineering or architecture colleges in India."
        },
        {
          question: "When is the JEE Main 2025 exam scheduled?",
          answer: "The specific dates for JEE Main 2025 are listed above for both sessions. The complete schedule will be released soon and will be provided on this page."
        },
        {
          question: "How can I find my exam city details for JEE Main 2025?",
          answer: "The NTA has released the JEE (Main) 2025 Exam City Intimation Slip on its official website - jeemain.nta.nic.in. Candidates can log in to the site to download their slip and get information about their exam city and center."
        },
        {
          question: "Which institutions accept JEE Main scores?",
          answer: "Various engineering colleges that accept JEE Main scores for admission include NITs, IIITs, GFTIs, along with some state engineering colleges and private institutions."
        },
        {
          question: "How does JEE Main differ from JEE Advanced?",
          answer: "Qualifying for JEE Main is necessary for admission to any engineering or architecture college in India, while JEE Advanced is needed for admission into IITs."
        },
        {
          question: "What are the basic eligibility criteria for JEE Main 2025?",
          answer: "The primary eligibility requirements include a minimum qualification of 10+2 or its equivalent with specific subjects, as well as an age limit."
        },
        {
          question: "Can students who have taken a gap year apply for JEE Main?",
          answer: "Yes, candidates who have taken a gap year are permitted to apply for JEE Main, as there are no specific restrictions on gap years."
        },
        {
          question: "What is the process for completing the JEE Main application form?",
          answer: "The application process includes registration, form filling, document upload, and payment of fees. Candidates should follow the detailed instructions available on the official website."
        },
        {
          question: "How do I select my preferred payment method for the application fee?",
          answer: "The application fee can be paid online using a debit/credit card, net banking, or through an e-challan at designated banks."
        },
        {
          question: "Is there a deadline for submitting the JEE Main application, and are there any late fees?",
          answer: "Yes, there is a deadline for application submissions, and late fees apply for those submitted after the regular deadline. Candidates should refer to the official notification for exact dates and late fee details."
        },
        {
          question: "What is the exam pattern for JEE Main 2025 Paper 1?",
          answer: "Paper 1 comprises Physics, Chemistry, and Mathematics, featuring a combination of multiple-choice questions and numerical value-based questions."
        },
        {
          question: "How does Paper 2 (B.Arch) differ from Paper 1 (B.E./B.Tech)?",
          answer: "Paper 2 emphasizes Mathematics, Aptitude, and a Drawing Test, whereas Paper 1 covers Physics, Chemistry, and Mathematics."
        },
        {
          question: "Could you explain the exam pattern for Paper 3 (B.Planning)?",
          answer: "Paper 3 includes Mathematics, Aptitude, and Planning-based questions, tailored for candidates focusing on planning programs."
        },
        {
          question: "What are some recommended reference books for JEE Main Physics preparation?",
          answer: "Notable books include H.C. Verma's 'Concepts of Physics' and 'Fundamentals of Physics' by Halliday, Resnick, and Walker."
        },
        {
          question: "Can you suggest some top reference books for JEE Main Chemistry?",
          answer: "'Physical Chemistry' by O.P. Tandon and 'Organic Chemistry' by Morrison and Boyd are excellent recommendations."
        },
        {
          question: "What are some highly recommended reference books for JEE Main Mathematics?",
          answer: "R.D. Sharma's 'Mathematics' and 'Higher Algebra' by Hall and Knight are frequently suggested."
        },
        {
          question: "How can analyzing previous year’s question papers help JEE Main aspirants?",
          answer: "It aids in understanding question patterns, managing time effectively, and identifying strengths and weaknesses."
        },
        {
          question: "Where can I find subject-wise analyses of previous JEE Main question papers along with solutions?",
          answer: "These analyses can be found on various educational platforms, coaching centers, or by referring to official JEE Main websites."
        },
        {
          question: "What key insights from previous year papers can assist in my JEE Main preparation?",
          answer: "Previous papers can reveal topic distribution, difficulty levels, and question types, helping you tailor your study strategies effectively."
        },
      ];
  return (
    <>
      <NavbarSection />
      <AboutJEEBreadcrumb />
    <div className="max-w-7xl mobile:mx-4 laptop:mx-auto p-6 bg-white border-2 border-gray-400 mt-6 rounded-lg">
      <p className="text-center font-semibold text-4xl mb-16">
        JEE Main 2025 Exam: Important Dates, Syllabus, Exam Pattern, Fee, and Schedule
      </p>

      <section className="mb-8">
        <p className="text-2xl font-semibold mb-4">Overview</p>
        <p className="text-lg text-gray-700 leading-relaxed">
          JEE Main 2025, organized by the National Testing Agency (NTA), is a computer-based online examination that serves as the gateway to securing admission into prestigious undergraduate engineering programs in India. This esteemed exam marks the initial phase of the IIT Joint Entrance Examination, setting the stage for aspiring students to embark on their journey towards top engineering institutes in the country.
        </p>
      </section>

      <section className="mb-8">
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

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">JEE Main 2025: Reservation Criteria</h2>
        <ul className="list-disc ml-8 space-y-2">
          <li className="text-lg text-gray-700">OBC - 27%</li>
          <li className="text-lg text-gray-700">SC - 15%</li>
          <li className="text-lg text-gray-700">ST - 7.5%</li>
          <li className="text-lg text-gray-700">PwD - 5%</li>
          <li className="text-lg text-gray-700">50% seats in NITs under Home State Quota</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">JEE Main 2025: Exam Pattern</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Understanding the JEE Main 2025 Exam Pattern is crucial for your preparation. Here's a breakdown of what you can expect:
        </p>

        <h3 className="text-xl font-semibold mb-2">Paper 1 (B.E./B.Tech)</h3>
        <div className="overflow-x-auto"> {/* This wrapper allows horizontal scrolling if necessary */}
      <table className="min-w-full bg-gray-100 border border-gray-200 table-auto">
        <thead>
          <tr className="bg-gray-300 text-left">
            <th className="p-4">Subjects</th>
            <th className="p-4">Total Questions</th>
            <th className="p-4">Marking Scheme</th>
            <th className="p-4">Maximum Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border">Physics</td>
            <td className="p-4 border">25 (20 MCQs + 5 Numerical)</td>
            <td className="p-4 border">+4 for Correct, -1 for Incorrect</td>
            <td className="p-4 border">100</td>
          </tr>
          <tr>
            <td className="p-4 border">Chemistry</td>
            <td className="p-4 border">25 (20 MCQs + 5 Numerical)</td>
            <td className="p-4 border">+4 for Correct, -1 for Incorrect</td>
            <td className="p-4 border">100</td>
          </tr>
          <tr>
            <td className="p-4 border">Mathematics</td>
            <td className="p-4 border">25 (20 MCQs + 5 Numerical)</td>
            <td className="p-4 border">+4 for Correct, -1 for Incorrect</td>
            <td className="p-4 border">100</td>
          </tr>
        </tbody>
      </table>
    </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">JEE Main 2025: Eligibility Criteria</h2>
        <ul className="list-disc ml-8 space-y-2">
          <li className="text-lg text-gray-700">Candidates must have qualified Class 12 in 2022, 2023, or be appearing in 2024.</li>
          <li className="text-lg text-gray-700">Must have completed 10+2 with Physics, Chemistry, and Mathematics.</li>
          <li className="text-lg text-gray-700">75% marks in 12th for General category, 65% for SC/ST/OBC/PwD.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">JEE Main 2025: Application Form</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Visit the official website to fill out the JEE Main application form. Ensure you have all the necessary documents before starting the application process.
        </p>

        <h3 className="text-xl font-semibold mb-2">Step-by-Step Process:</h3>
        <ol className="list-decimal ml-8 space-y-2">
          <li className="text-lg text-gray-700">Go to jeemain.nta.nic.in and click on ‘Apply Online’.</li>
          <li className="text-lg text-gray-700">Fill in personal details, upload documents, and pay the fee.</li>
          <li className="text-lg text-gray-700">Submit the form and take a printout of the confirmation page.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Documents Required</h2>
        <ul className="list-disc ml-8 space-y-2">
          <li className="text-lg text-gray-700">Class 12 Mark Sheet</li>
          <li className="text-lg text-gray-700">Identity Proof</li>
          <li className="text-lg text-gray-700">Passport Size Photograph</li>
          <li className="text-lg text-gray-700">Candidate’s Signature</li>
          <li className="text-lg text-gray-700">Category Certificate (if applicable)</li>

        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">JEE Main 2025: Exam Preparation Tips</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Here are some effective preparation tips to help you succeed in the JEE Main 2025:
        </p>
        <ul className="list-disc ml-8 space-y-2">
          <li className="text-lg text-gray-700">Create a Study Schedule: Organize your study time efficiently.</li>
          <li className="text-lg text-gray-700">Focus on Concepts: Ensure a strong understanding of fundamental concepts in Physics, Chemistry, and Mathematics.</li>
          <li className="text-lg text-gray-700">Practice Regularly: Solve previous years’ question papers and take mock tests.</li>
          <li className="text-lg text-gray-700">Stay Healthy: Maintain a balanced diet and get sufficient rest to keep your mind sharp.</li>
          <li className="text-lg text-gray-700">Join Study Groups: Collaborate with peers to enhance learning and motivation.</li>
        </ul>
      </section>
      <section className="mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Step-By-Step Process to Fill JEE Main Online Application Form</h2>
      <ol className="list-decimal list-inside mb-4 space-y-4">
        <li className='text-lg'>Visit the official website - <a href="https://jeemain.nta.nic.in" className="text-blue-600 underline">jeemain.nta.nic.in</a>.</li>
        <li className='text-lg'>Click on ‘Apply Online’.</li>
        <li className='text-lg'>An application form page will open up.</li>
        <li className='text-lg'>Fill up this application form.</li>
        <li className='text-lg'>When prompted, select New Registration and enter your basic details.</li>
        <li className='text-lg'>Upload a scanned copy of your documents in a specific format and size.</li>
        <li className='text-lg'>Pay the application fee through online or offline mode.</li>
        <li className='text-lg'>Check all the information in the application form.</li>
        <li className='text-lg'>Submit your application form.</li>
        <li className='text-lg'>Take a print of the confirmation page for reference.</li>
        <li className='text-lg'>Upon completion, you will receive a provisional registration number on your registered mobile number and email address.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-12 mb-6">List of Documents Required for Application Form</h2>
      <ul className="list-disc list-inside mb-4 space-y-4">
        <li className='text-lg'>Age Proof: Birth certificate</li>
        <li className='text-lg'>Class 12 mark sheet with 75% or above aggregate marks</li>
        <li className='text-lg'>Identity proof</li>
        <li className='text-lg'>Citizenship certificate</li>
        <li className='text-lg'>Passport size photograph</li>
        <li className='text-lg'>Candidate’s signature</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Application Fee Mode of Payment</h2>
      <h3 className="font-semibold mb-1 text-lg">Online Mode:</h3>
      <ul className="list-disc list-inside mb-4">
        <li className='text-lg'>Credit Card / Debit Card / Paytm / Net Banking</li>
      </ul>
      <h3 className="font-semibold mb-1 text-lg">Offline Mode:</h3>
      <ul className="list-disc list-inside mb-4">
        <li className='text-lg'>Bank Challan</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-6 mt-12">Application Form Correction</h2>
      <p className='text-lg'>Once you have submitted your JEE Main application form, you cannot edit some details. Ensure you review all the details carefully.</p>

      <h2 className="text-2xl font-semibold  mb-6 mt-12">JEE Main 2025 Syllabus</h2>
      <p className='text-lg'>The syllabus for JEE Main 2025 includes important topics from Physics, Chemistry, and Mathematics of NCERT Class 11 and 12. The official syllabus will be released by the National Testing Agency (NTA) in November 2025. Meanwhile, students can check the last year's syllabus.</p>

      <h2 className="text-2xl font-semibold mb-6 mt-12">High-weightage Topics</h2>
      <h3 className="font-semibold text-lg">Physics:</h3>
<ul className="list-disc list-inside mb-4 text-lg space-y-4">
  <li>Laws of Motion (Weightage: 4%)</li>
  <li>Gravitation (Weightage: 2%)</li>
  <li>Properties of Solids and Liquids</li>
</ul>

<h3 className="font-semibold text-lg">Chemistry:</h3>
<ul className="list-disc list-inside mb-4 text-lg space-y-4">
  <li>States of Matter</li>
  <li>Atomic Structure</li>
  <li>Equilibrium</li>
</ul>

<h3 className="font-semibold text-lg">Mathematics:</h3>
<ul className="list-disc list-inside mb-4 text-lg space-y-4">
  <li>Sets, Relations and Functions</li>
  <li>Matrices and Determinants</li>
  <li>Mathematical Inductions</li>
</ul>

<h2 className="text-2xl font-semibold mt-12 mb-6">Recommended Reference Books</h2>

<h3 className="font-semibold mb-1 text-lg">Physics Preparation:</h3>
<ul className="list-disc list-inside my-4 text-lg space-y-4">
  <li>NCERT Books - Class 11 and 12</li>
  <li>H.C. Verma – Concepts of Physics Vol I and II</li>
  <li>I.E. Irodov – Problems in General Physics</li>
  <li>Halliday, Resnick, and Walker – Fundamentals of Physics</li>
</ul>

<h3 className="font-semibold mb-1 text-lg">Chemistry Preparation:</h3>
<ul className="list-disc list-inside my-4 text-lg space-y-4">
  <li>NCERT Books – Class 11 and Class 12</li>
  <li>Numerical Chemistry by P. Bahadur</li>
  <li>Organic Chemistry - J.D. Lee</li>
  <li>Inorganic Chemistry - Morrison and Boyd</li>
</ul>

<h3 className="font-semibold text-lg">Maths Preparation:</h3>
<ul className="list-disc list-inside my-4 text-lg space-y-4">
  <li>NCERT Books - Class 11 and 12</li>
  <li>S. L. Loney – Trigonometry</li>
  <li>S. L. Loney – Coordinate Geometry</li>
  <li>Hall and Knight – Higher Algebra</li>
  <li>I.A. Maron – Problems in Calculus of One Variable</li>
</ul>

<h2 className="text-2xl font-semibold mt-12 mb-6">JEE Main 2025 Admit Card</h2>
<p className="text-lg">The JEE Main admit cards will be released soon. Candidates can download their hall tickets from the official website.</p>
<ul className="list-disc list-inside mb-4 text-lg space-y-4">
  <li>Candidate’s name</li>
  <li>Father’s name</li>
  <li>Roll number</li>
  <li>Category</li>
  <li>Date of examination</li>
  <li>Exam Centre venue</li>
  <li>Reporting time</li>
  <li>Exam Duration</li>
  <li>Photograph</li>
</ul>
<p className="text-lg">Verify all details upon downloading the admit card. Contact the helpline for discrepancies.</p>

<h2 className="text-2xl font-semibold mt-12 mb-6">Best Preparation Tips</h2>
<ul className="list-disc list-inside mb-4 text-lg space-y-4">
  <li>Create a Roadmap: Develop a structured study plan.</li>
  <li>Study the Syllabus: Familiarize yourself with the syllabus and exam patterns.</li>
  <li>Prioritize Subjects: Focus on subjects based on your strengths.</li>
  <li>Build a Strong Foundation: Strengthen your fundamentals.</li>
  <li>Practice with NCERT: Solve problems and practice questions.</li>
  <li>Identify Mistakes: Assess your performance and correct mistakes.</li>
  <li>Stay Motivated: Keep your goals in mind.</li>
  <li>Minimize Distractions: Allocate quiet study time to improve focus.</li>
      </ul>
    </section>
      <section className="">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center mt-12 mb-6">JEE Main FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    
    <Footer />
    </>
    
  );
};

export default JEEMain2025;
