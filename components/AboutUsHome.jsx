import React from 'react'
import { Card } from "flowbite-react";

const AboutUsHome = () => {
  return (
    <div>
      <section className="lg:mt-14 mx-auto max-w-screen-xl mb-0 px-6 items-center md:flex-row md:px-8 flex flex-col-reverse mt-5 ">
        
        <div className="space-y-4 flex-1 lg:text-left">
            <h1 className="text-slate-800 font-bold text-4xl  mobile:text-center my-12">
                Welcome to <span className='text-chemisphere laptop:text-6xl mobile:text-4xl'>Chemisphere!</span>
            </h1>
            <p className="text-gray-900 laptop:mx-32 laptop:text-2xl mobile:text-xl md:text-left">
            Chemisphere is a dedicated hub for comprehensive and personalized chemistry education. <br />As an independent educational platform, Chemisphere is committed to revolutionize the learning experience for students seeking mastery in Chemistry across diverse educational levels.    <br /></p>
            
            <div className='flex justify-center items-center pt-12 p-6'>
              <div className='mobile:aspect-w-16 mobile:aspect-h-9 embed-responsive'>
               <iframe className="laptop:w-[560px] laptop:h-[315px] mobile:h-[350px] mobile:w-[310px]" src="https://www.youtube.com/embed/765qd0vmxmM?si=0856vAYFQYvOyt9j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
              </div>
            </div>
            
            <h3  className="text-slate-800 font-bold mobile:text-4xl text-center laptop:text-6xl mx-6 pt-12">
              Our Distinct Features
            </h3>

<div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>
  <div href="#" className="max-w-sm border-black bg-white border-4 px-4 py-6 rounded-xl text-chemisphere hover:bg-chemisphere hover:text-white transition smmooth">
      <h5 className="text-2xl font-semibold  text-center">
      Precision in Chemistry Learning
      </h5>
    </div>
    <div href="#" className="max-w-sm border-black bg-white border-4 px-4 py-6 rounded-xl text-chemisphere hover:bg-chemisphere hover:text-white transition smmooth">
      <h5 className="text-2xl font-semibold  text-center">
      Technological Ingenuity in Learning
      </h5>
    </div>
    <div href="#" className="max-w-sm border-black bg-white border-4 px-4 py-6 rounded-xl text-chemisphere hover:bg-chemisphere hover:text-white transition smmooth">
      <h5 className="text-2xl font-semibold  text-center">
      Guidance from Expert Educator
      </h5>
    </div>
    <div href="#" className="min-w-sm border-black bg-white border-4 px-4 py-6 rounded-xl text-chemisphere hover:bg-chemisphere hover:text-white transition smmooth">
      <h5 className="text-2xl font-semibold  text-center">
      Progress <br />Tracking  
      </h5>
    </div>
    <div href="#" className="min-w-sm border-black bg-white border-4 px-4 py-6 rounded-xl text-chemisphere hover:bg-chemisphere hover:text-white transition smmooth">
      <h5 className="text-2xl font-semibold  text-center">
      Holistic Approach <br />to Learning      </h5>
    </div>
    <div href="#" className="min-w-sm border-black bg-white border-4 px-4 py-6 rounded-xl text-chemisphere hover:bg-chemisphere hover:text-white transition smmooth">
      <h5 className="text-2xl font-semibold  text-center">
      Passionate <br /> Learning
      </h5>
    </div>
</div>
            


              
            
        </div>         
</section>

    </div>
  )
}

export default AboutUsHome
