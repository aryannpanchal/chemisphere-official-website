'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link'


const images = ["/jee adv1.jpg", "/jee adv2.jpg", "/jee adv3.jpg"];
const links = [

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20Organic%20Chemistry.",

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20Physical%20Chemistry.",

    "https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%202024%20Complete%20Crash%20Course%20on%20inorganic%20Chemistry."
];

const CrashCourse = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
  <>
  
    <section className='ml-5 mr-5 mb-14 pt-5'>
        
    
          <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            
            <div className=' bg-white border text-white border-gray-200 rounded-lg shadow flex-col gap-12 justify-center'>
              <div>
                  <img className="rounded-t-lg" src={image} alt={`Slide ${index + 1}`} />
              </div>
              <Link href={links[index]} target='__blank'>
              <div className=' bg-chemisphere text-center hover:bg-white transition transform hover:text-chemisphere'>
                
                <button className=" hover:underline font-bold py-2 px-4 rounded-full">
                  BOOK NOW!
                </button>
                
              </div> 
              </Link>
            </div>
           
          </div>
        ))}
      </Slider>
    </section>
    </>
  );
};

export default CrashCourse;
