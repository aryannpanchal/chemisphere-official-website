'use client';

import React from 'react';

const Testimonials = () => {
  return (
    <div className="min-w-full min-h-screen flex items-center bg-black text-white dark:bg-gray-50 dark:text-black">
      <div className="min-w-full py-5 mt-10 mb-20 sm:mx-auto md:mx-0 overflow-hidden">
        <div className="w-full flex items-center flex-col gap-1 justify-center mb-16 px-4">
          <p className="text-sm sm:text-lg font-semibold text-rose-600">Words That Matter</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
            See Why Clients Keep Coming Back
          </h3>
        </div>

        <div className="flex flex-col gap-3">
          {/* Loop over carousel rows */}
          {[ 'animate-scrollReverse', 'animate-scroll' ].map((animation, index) => (
            <div
              key={index}
              className="relative flex justify-around gap-5 overflow-hidden shrink-0"
              style={{
                maskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
                WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)'
              }}
            >
              <div className="min-w-full md:px-4 sm:px-10 md:w-full">
                <div
                  className={`${animation} flex flex-nowrap w-max min-w-full hover:[animation-play-state:paused] overflow-hidden relative gap-5 justify-around shrink-0`}
                >
                  {testimonialData.slice(index * 7, (index + 1) * 7).map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-between h-[320px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[1940px] sm:w-[320px] w-[380px]"
                    >
                      <p className="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                        {item.text}
                      </p>
                      <div className="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-white/10 dark:border-black/10">
                        <div className="flex items-center w-3/4 gap-3 px-4 py-3">
                          <img className="w-10 h-10 rounded" src={item.avatar} alt="avatar" />
                          <div className="flex flex-col items-start justify-start flex-1 gap-0">
                            <h5 className="text-base font-medium md:text-md">{item.name}</h5>
                            <p className="text-sm md:text-base mt-[-4px] text-white dark:text-black">
                              {item.title}
                            </p>
                          </div>
                        </div>
                        <div className="w-[1px] bg-white/10 dark:bg-black/20" />
                        <div className="flex items-center justify-center max-w-full mx-auto">
                          <a target="_blank" rel="noopener noreferrer" href={item.link}>
                          <img className='w-12' src='/comma.svg'/>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Dummy testimonial data
const testimonialData = [
  {
    text: `"I was lost in 11th-grade Chemistry. Joining Chemisphere in 12th changed everything. Chandan Sir helped me clear my backlogs and master Organic & Physical Chemistry. I scored 96/100 in Boards and 72 in JEE Advanced Chemistry."`,
    avatar: '/a1.jpg',
    name: 'Jai Sheth',
    title: 'AIR 1725 (JEE Advanced 2025)',
    link: ''
  },
  {
    text: `"Chandan Sirs classes at Chemisphere were a game-changer. His notes, test strategies, and tricks helped me score 152/180 in NEET 2025 Chemistry and 99/100 in Boards. Highly recommended!"`,
    avatar: '/a2.jpg',
    name: 'Tanisha Mondal',
    title: ', AIR 4843 (NEET 2025)',
    link: ''
  },{
    text: `"Chemistry was my weak point throughout JEE prep. After joining Chemisphere, my marks improved significantly — my JEE Mains percentile jumped from 87.3 to 99.75, and I scored better than expected in JEE Advanced."`,
    avatar: '/a4.jpg',
    name: 'Ishan Rathi',
    title: 'AIR 2,093 (JEE Advanced 2025)',
    link: ''
  },{
    text: `"Joining Chemisphere was the best decision for my sons JEE prep. Though online, the classes felt just like physical ones — well-structured, conceptual, and exam-focused. Chandan Sirs guidance helped him crack JEE Main, Advanced, BITSAT, MHT-CET, and IISER. He supported Anvit like a mentor, not just a teacher"`,
    avatar: '/a3.jpg',
    name: 'Swapna Khade',
    title: 'Mother of Anvit Khade (IIT Bombay)',
    link: ''
  }, {
    text: `"I was part of a big coaching institute, but Chemistry there felt rushed and impersonal. After joining Chemisphere, the difference was clear — Chandan Sir's classes were focused, conceptual, and interactive. He gave personal attention, cleared doubts patiently, and helped me master the subject deeply."`,
    avatar: '/a6.jpg',
    name: 'Aditya Sawant',
    title: 'AIR 137 (JEE Advanced 2023)',
    link: ''
  },
    {
    text: `"Chandan sirs mentorship allowed me to secure admission in one of the highly recognised univerisities in the United States of America. I will be forever grateful to him!"`,
    avatar: '/Aryan (2).jpeg',
    name: 'Aryan Panchal',
    title: 'Clemson University, USA',
    link: ''
  },

    {
    text: `"Chemistry was tough for me, especially Organic in 11th. After joining Chemisphere, Chandan Sir made it engaging and easy to grasp. His tips and interactive teaching helped me improve in both Organic and Inorganic — and boost my percentile from 98.5 to 98.75."`,
    avatar: '/a5.jpg',
    name: 'Aditya',
    title: 'AIR 2726, JEE Advanced 2025',
    link: ''
  },
 
  {
    text: `"A rare talent who excels in Tailwind, Nuxt.js, and Laravel! He built a full-stack web app that is both powerful and beautiful."`,
    avatar: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&q=80&w=1080',
    name: 'John M',
    title: 'Startup CEO',
    link: ''
  },
  {
    text: `"Nuxt.js can be tricky, but Samuel made everything look effortless. From state management to routing, they nailed it."`,
    avatar: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&q=80&w=1080',
    name: 'Marry J.',
    title: 'Startup Founder',
    link: ''
  },
  {
    text: `"A complete package! Samuel crafted a sleek UI with Tailwind, built a high-performance Nuxt.js frontend, and powered it with a rock-solid Laravel backend."`,
    avatar: 'https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixlib=rb-4.0.3&q=80&w=1080',
    name: 'Steve J.',
    title: 'Project Manager',
    link: ''
  },
  {
    text: `"From the frontend to the backend, Samuel handled everything flawlessly. Their attention to detail and problem-solving skills are unmatched."`,
    avatar: 'https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-4.0.3&q=80&w=1080',
    name: 'Ethan F.',
    title: 'Lead Developer',
    link: ''
  },
  {
    text: `"Our team was new to Tailwind, but Samuel guided us through the transition effortlessly, making our development process faster and more efficient."`,
    avatar: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-4.0.3&q=80&w=1080',
    name: 'Melissa K.',
    title: 'SaaS Founder',
    link: ''
  },
    {
    text: `"Working with Samuel was a game-changer! His Tailwind CSS skills brought our UI to life with a clean, modern, and fully responsive design."`,
    avatar: 'https://images.unsplash.com/photo-1665686307516-1915b9616526?ixlib=rb-4.0.3&q=80&w=1080',
    name: 'Sarah M',
    title: 'Startup Founder',
    link: ''
  },
    {
    text: `"Working with Samuel was a game-changer! His Tailwind CSS skills brought our UI to life with a clean, modern, and fully responsive design."`,
    avatar: 'https://images.unsplash.com/photo-1665686307516-1915b9616526?ixlib=rb-4.0.3&q=80&w=1080',
    name: 'Sarah M',
    title: 'Startup Founder',
    link: ''
  },
    {
    text: `"Working with Samuel was a game-changer! His Tailwind CSS skills brought our UI to life with a clean, modern, and fully responsive design."`,
    avatar: 'https://images.unsplash.com/photo-1665686307516-1915b9616526?ixlib=rb-4.0.3&q=80&w=1080',
    name: 'Sarah M',
    title: 'Startup Founder',
    link: ''
  },
];

export default Testimonials;
