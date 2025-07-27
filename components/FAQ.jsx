import React from "react";
import Accordion from "./Accordian";

const FAQ = () => {
  return (
    <div>
      <section className='mb-24 laptop:mx-64 laptop:pt-[70px] mobile:mx-4'>
        <div className='text-center text-4xl font-bold mb-12 text-chemisphere tracking-tighter' id="faq-section">
          <h4>Answers To Your Biggest Doubts</h4>
        </div>

        <div className="p-4 bg-white rounded-lg text-black border border-1 shadow text-md">

          <Accordion
            title={<h5 className='font-bold laptop:text-xl text-left'>My child is already enrolled in a big coaching institute. Why do they need Chemisphere?</h5>}
            answer={<p className='pt-2 text-black laptop:text-lg opacity-95'>Big institutes teach 100+ students in a batch. Chemisphere is personal. If your child is lost, lagging behind, or not getting conceptual clarity — no topper batch or fancy app will fix it. We step in where coaching ends — with focus, mentorship, and actual improvement.</p>}
            className='lg:text-left'
          /><hr />

          <Accordion
            title={<h5 className='font-bold laptop:text-xl'>Is this suitable only for toppers? My child is an average student.</h5>}
            answer={<p className='pt-2 text-black laptop:text-lg opacity-95'>Absolutely not. In fact, many of our best results came from students who were once stuck at 50s or 60s in Chemistry. Chemisphere is designed to build concepts from scratch and train students smartly — not just throw content at them.</p>}
            className='lg:text-left'
          /><hr />

          <Accordion
            title={<h5 className='font-bold laptop:text-xl'>Will my child be able to manage both school + coaching + Chemisphere?</h5>}
            answer={<p className='pt-2 text-black laptop:text-lg opacity-95'>Yes. Every session is designed to be efficient — not time-wasting. Plus, they’ll study smarter here, which reduces their burden, not adds to it. Most students actually find more time after joining Chemisphere because they stop chasing 3-hour lectures that teach nothing new.</p>}
            className='lg:text-left'
          /><hr />

          <Accordion
            title={<h5 className='font-bold laptop:text-xl'>What’s the batch size? Will my child get personal attention?</h5>}
            answer={<p className='pt-2 text-black laptop:text-lg opacity-95'>Very limited seats. We cap every batch to a small number so that your child actually gets noticed — not just treated like a roll number. If they don’t speak up, we will ask them questions. You’re not paying for passive learning.</p>}
            className='lg:text-left'
          /><hr />

          <Accordion
            title={<h5 className='font-bold laptop:text-xl'>Are there recorded lectures and study material included?</h5>}
            answer={<p className='pt-2 text-black laptop:text-lg opacity-95'>Yes. All classes are recorded and accessible anytime. Students also get high-quality notes, doubt-solving, and targeted tests designed to mimic JEE/NEET exam patterns — not just random question dumps.</p>}
            className='lg:text-left'
          /><hr />

          <Accordion
            title={<h5 className='font-bold laptop:text-xl'>What kind of results have students achieved with Chemisphere?</h5>}
            answer={<p className='pt-2 text-black laptop:text-lg opacity-95'>Our mentorship has helped students secure ranks like AIR 12, 176, 523, and hundreds more reach top NITs, IITs, and medical colleges — some of whom once hated Chemistry. We don’t just improve marks. We rebuild confidence.</p>}
            className='lg:text-left'
          /><hr />

          <Accordion
            title={<h5 className='font-bold laptop:text-xl'>How do we know if this is the right fit for my child?</h5>}
            answer={<p className='pt-2 text-black laptop:text-lg opacity-95'>Simple. Fill the form, book a short call with the founder (that’s me), and let’s talk it through. No pushy sales. Just an honest discussion about what your child needs and whether we can truly help.</p>}
            className='lg:text-left'
          /><hr />

          <Accordion
            title={<h5 className='font-bold laptop:text-xl'>What if we miss a class or join late?</h5>}
            answer={<p className='pt-2 text-black laptop:text-lg opacity-95'>No problem. You get complete recorded access from Day 1. And if you’re joining mid-way, we’ll help your child catch up with structured resources and 1-on-1 mentoring if needed.</p>}
            className='lg:text-left'
          /><hr />

          <Accordion
            title={<h5 className='font-bold laptop:text-xl'>How do I enroll?</h5>}
            answer={<p className='pt-2 text-black laptop:text-lg opacity-95'>Just click “Apply For Mentorship Now” below. Fill out a short form, and we’ll personally get in touch to guide you through the rest.</p>}
            className='lg:text-left'
          />

        </div>
      </section>
    </div>
  );
};

export default FAQ;
