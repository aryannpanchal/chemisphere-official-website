import React from "react";
import Accordion from "./Accordian";

const FAQ = () => {
  return (
    <div>
      <div className='text-center text-2xl font-bold mt-20 mb-5'>
        <h1>FAQ</h1>
      </div>
      <div className="p-4 bg-chemisphere rounded-lg text-white">
        <Accordion
          title="Why choose Chemisphere?"
          answer="Choose Chemisphere for a captivating chemistry learning experience! Learn from professionals with a decade of mentoring success. Enjoy engaging live classes, meticulous class notes, and track progress with regular assessments and examinations. Elevate your marks and embrace the joy of learning chemistry!"
          className='font-bold text-left' // Added text-left class
        />
        <Accordion
          title="How will students clarify their doubts regarding the subject?"
          answer="Despite the higher number of hours at other institutes, the challenge lies in providing personalized attention to each student. We are committed to ensuring that students have direct communication with the teacher for doubt clarification through platforms like Telegram and WhatsApp. This allows for a more individualized and focused learning experience."
          className='font-bold text-left' // Added text-left class
        />
        <Accordion
          title="Will there be tests? How will they be taken?" 
          answer="Our coaching program leverages technology to enhance the learning experience. The Android/iOS app facilitates a convenient platform for conducting tests and enables parents to track their child's performance. This integration of technology ensures a modern and efficient learning environment. All the reports of the tests are also shared with the parent so that their performance is tracked." 
          className='font-bold text-left' // Added text-left class
        />
        <Accordion
          title="How do we know my child is in safe hands?" 
          answer="As an IIT Madras graduate with 12 years of teaching experience in various coaching institutes across India, I bring a unique perspective to the table. Unlike some coaching institutes that prioritize completing the syllabus and little focus beyond that, my focus is on understanding individual student needs and providing quality education. My experience allows me to guide students not just through the curriculum sooner but also to help them develop a deeper understanding of the subjects." 
          className='font-bold text-left' // Added text-left class
        />
      </div>
    </div>
  );
};

export default FAQ;
