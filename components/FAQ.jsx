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
        className='font-semibold'
      />
      <Accordion
        title="How many classes happen in a week?"
        answer="a"
        className='font-semibold'

      />
      <Accordion
        title="question 3" 
        answer="a" 
        className='font-semibold'
/>
    </div>
    </div>
  );
};

export default FAQ;
