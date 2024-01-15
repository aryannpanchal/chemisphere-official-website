import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const AboutUsHome = () => {
  return (
    <div>
      <section className="lg:mt-14 mx-auto max-w-screen-xl mb-0 px-4 items-center md:flex-row md:px-8 flex flex-col-reverse mt-5 ">
        
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-slate-800 font-bold text-4xl xl:text-5xl">
                Welcome to Chemisphere!
            </h1>
            <p className="text-gray-900 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 md:text-left">
            Hi. I am Chandan Biswas. I am a professor of Chemistry, and CEO, Chemisphere and I have mentored over 15000 students in the last decade for JEE Main and Advanced, NEET, MHCET and Class 12th boards and I know inside out of all these exams. I have the honor to be the mentor for over 1000 IITians, and medical professionals.
    <br /></p>
             <div className="flex pt-0 mt-0 items-center justify-center  md:space-y-0 md:mt-0 md:pb-0 md:justify-start">
                          <Link target="__blank" href=" https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20more%20about%20Chemisphere!"  className="rounded-full transition ease-in-out duration-300">
                          <Image src="/connect-now.svg" width={194} height={194} alt="chat on whatsapp button"  />
                          </Link>
                          </div>
        </div>         
</section>
    </div>
  )
}

export default AboutUsHome