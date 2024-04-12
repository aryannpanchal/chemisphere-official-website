"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link'

const data = [

{
  name: 'Avnit Khade',
  img: '/avnit.png',
  review: "I cracked IIT JEE Advance'23, headed to IIT Bombay for Engineering Physics. Chandan sir at Chemisphere turned organic chemistry from a challenge to my strongest suit.",
  ranking: 'IIT Bombay: Engineering Physics',
  ranking2: 'JEE Main 2023: 97.8 percentile',
  link: 'https://www.instagram.com/stories/highlights/17899477805131514/'
},{
  name: 'Anmol Dureja',
  img: '/anmol.jpg',
  review: "Chandan Sir's teaching made chemistry a breeze! From scoring 50% in school to acing JEE Advanced with 67%, I highly recommend his classes for a transformative learning experience.",
  ranking: 'JEE Advanced 2023 AIR 2948',
  ranking2: 'JEE Main 2023 AIR 14158',
  link: 'https://www.youtube.com/watch?v=fxuOEgElz8w&list=PLmooGSc0cBAxKAEhjJaaIEz7mXdc10NNt&index=7'
},
{
  name: 'Manasvi Patil',
  img: '/manasvi.svg',
  review: 'Chemsphere, led by Chandan sir, is a game-changer for NEET and MHTCET Chemistry. Online flexibility, in-depth coverage and effective doubt-solving make it a regret-free choice for success.',
  ranking: 'NEET 2023 93.4 Percentile',
  
  link: 'https://www.youtube.com/watch?v=nT4l4oGTFdA&list=PLmooGSc0cBAxKAEhjJaaIEz7mXdc10NNt&index=8'
},

{
  name: 'Mohit Laddha',
  img: '/mohit.svg',
  review: "Chandan Sir's two years of impactful teaching left an indelible mark on me. His impressive, well-structured lectures and organized notes were instrumental in my achievements.",
  ranking: 'JEE Advanced 2022 AIR 5280',
  ranking2: 'JEE Main 2022 AIR 8518',
  link: 'https://www.youtube.com/watch?v=eCGhpR_-5OU&list=PLmooGSc0cBAxKAEhjJaaIEz7mXdc10NNt&index=5'
},


]

const Testimonials = () => {

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjusted breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
   <section className='py-16 mb-14 overflow-hidden bg-white laptop:px-0 mt-10'>
        <div className='laptop:max-w-screen-2xl mx-auto px-10 mobile:px-8 '>
          <div className="laptop:max-w-screen-2xl text-center mobile:mx-auto">
            <h3 className="text-gray-900 text-5xl font-semibold mobile:text-5xl pb-5">
              Hall of Fame
            </h3>
            <p className="mt-3 text-gray-900 text-1xl pb-5">
              Explore our hall of academic achievers, charting the course
              <br /> for success and inspiring the pursuit of knowledge at its
              finest.
            </p>
          </div>
          <div className='mobile:max-w-l mx-2 px-2 mt-10 gap-15 border-lg NeoButton1'>
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className=' bg-white mobile:h-[420px] laptop:h-[250px] w-[600px] border-slate-200 border-2 gap-15 mr-5'>
                  <div className='rounded-t-xl  flex p-4 items-center text-black gap-10'>
                    <img
                      src={d.img}
                      alt='image'
                      className='rounded-full w-16 h-16 border-2 border-white'
                    />
                    <div className='flex flex-col pl-2'>
                      <p className='text-xl font-bold text-black'>{d.name}</p>
                      <p className='text-sm font-regular text-black'>{d.ranking}</p>
                      <p className='text-sm font-regular text-black'>{d.ranking2}</p>
                    </div>
                  </div>
                  <hr />
                  <div className='p-4'>
                    <p className='md:text-2xl text-xl italic text-gray-700 pt-2'>{d.review}</p>
                    
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
