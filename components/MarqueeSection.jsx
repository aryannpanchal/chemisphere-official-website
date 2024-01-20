import React from 'react';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

const MarqueeSection = () => {
  return (
    <div>
      <Marquee className='text-white bg-chemisphere'>
        <span>
          NEET 2024 Chemistry crash course admissions are NOW OPEN!{' '}
          <a className='underline' href="https://wa.me/+918850436230?text=Im%20interested%20in%20inquiring%20more%20about%20the%20NEET%202024%20Crash%20Course%20offered%20by%20Chemisphere!">
            CLICK HERE
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {/* Add a non-breaking space here */}
        </span>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
