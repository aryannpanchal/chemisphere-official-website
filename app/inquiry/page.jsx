import React from 'react'
import Footer from '@/components/Footer'
import NavbarSection from '@/components/NavbarSection'
import InquiryHomePageBreadcrumb from '@/components/InquiryHomePageBreadcrumb'
import { Button, Card } from "flowbite-react";
import Image from "next/image";
import Link from 'next/link'

const InquiryLanding = () => {
  return (
    <>
      <NavbarSection />
      <InquiryHomePageBreadcrumb />

      {/* JEE Main Section */}
      <p className='text-center font-semibold text-4xl mt-16'>Explore Batches</p>
      <section className="text-gray-600 mobile:mx-4 body-font overflow-hidden laptop:mx-16 border-2 rounded-lg border-gray-400 mt-12">
        <div className="container laptop:px-5 mt-12 mb-4 mx-auto">
          <div className=" divide-y-2 divide-chemisphere-100">
            <div className="pb-8 flex flex-wrap sm:flex-nowrap lg:flex-nowrap">
              <div className="lg:w-64 sm:w-full mb-6 lg:mb-0 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">JEE MAIN BATCH</span>
                <Link href='/jee-main' className="mt-1 text-gray-500 text-sm underline">About JEE Main →</Link>
              </div>
              <div className="lg:flex-grow sm:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Get ready to ace your JEE Main with our top-rated, fully interactive batch!
                </h2>
                <p className="leading-relaxed">
                  Our JEE Main batch offers full syllabus coverage, flexible monthly payment plans, regular doubt-solving sessions, and personalized assignments after each lecture. You'll be well-prepared for the upcoming JEE Main with our comprehensive program!
                </p>
                <Link className="text-chemisphere inline-flex items-center mt-4" href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Main%20batch%20of%20Chemisphere!">
                  Reach out to our team for JEE Main batch admission
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* JEE Advanced Section */}
            <div className="py-8 flex flex-wrap sm:flex-nowrap lg:flex-nowrap">
              <div className="lg:w-64 sm:w-full mb-6 lg:mb-0 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">JEE ADVANCED BATCH</span>
                <span className="mt-1 text-gray-500 text-sm underline">About JEE Advanced →</span>
              </div>
              <div className="lg:flex-grow sm:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Master the JEE Advanced with our expert-led coaching!
                </h2>
                <p className="leading-relaxed">
                  Our JEE Advanced batch is specifically tailored for students aiming to excel in the JEE Advanced exam. With in-depth coverage of advanced topics, problem-solving workshops, and guidance from seasoned experts, you’ll be fully prepared to face the toughest challenges of the exam.
                </p>
                <Link className="text-chemisphere inline-flex items-center mt-4" href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advanced%20batch%20of%20Chemisphere!">
                  Reach out to our team for JEE Advanced batch admission
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* NEET Section */}
            <div className="py-8 flex flex-wrap sm:flex-nowrap lg:flex-nowrap">
              <div className="lg:w-64 sm:w-full mb-6 lg:mb-0 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">NEET BATCH</span>
                <span className="mt-1 text-gray-500 text-sm underline">About NEET →</span>
              </div>
              <div className="lg:flex-grow sm:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Prepare for NEET with our comprehensive medical entrance coaching!
                </h2>
                <p className="leading-relaxed">
                  Our NEET batch is designed to cover the entire NEET syllabus, focusing on all the important concepts, frequent question patterns, and strategies to ace the medical entrance exam. Join us to boost your chances of getting into a top medical school!
                </p>
                <Link className="text-chemisphere inline-flex items-center mt-4" href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20NEET%20batch%20of%20Chemisphere!">
                  Reach out to our team for NEET batch admission
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default InquiryLanding
