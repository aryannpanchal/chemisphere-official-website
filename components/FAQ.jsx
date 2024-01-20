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
        className='font-bold'
      />
      <Accordion
        title="How will student clarify his/her doubts regarding the subject?"
        answer="Despite the higher number of hours at other institutes, the challenge lies in providing personalized attention to each student. We are committed to ensuring that students have direct communication with the teacher for doubt clarification through platforms like Telegram and WhatsApp. This allows for a more individualized and focused learning experience."
        className='font-bold'

      />
      <Accordion
        title="Will there be tests? How will they be taken?" 
        answer="Our coaching program leverages technology to enhance the learning experience. The Android/iOS app facilitates a convenient platform for conducting tests and enables parents to track their child's performance. This integration of technology ensures a modern and efficient learning environment. All the reports of the tests are also shared with the parent so that their performance is tracked." 
        className='font-bold'
/>
    </div>
    </div>
  );
};

export default FAQ;
