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
    <section className='grid laptop:mx-24 mobile:mx-4 pt-24 justify-center items-center gap-14 laptop:grid-cols-3'>
 
    <Card
      className="max-w-sm p-2"
      renderImage={() => 
      <Image width={500} height={500} src="/jee-main-1.svg" alt="JEE Main image" />
      }>
        <marquee className='bg-chemisphere text-white rounded-md shadow-lg'>
        📣 Admissions open
        </marquee>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        JEE Main batch
      </h5>
      <div className='flex items items-center justify-left gap-2 pt-1'>
        <div>
        <p className='w-fit bg-white border-[2px] border-opacity-50 border-chemisphere rounded-xl text-black px-2 py-1 text-sm'>👑 Top rated</p>
        </div>
        <div>
        <p className='w-fit bg-slate-900 rounded-xl text-white px-2 py-1 text-sm'>🎤 Interactive</p>
        </div>
      </div>
      <div className='flex items items-center justify-left gap-2 pt-1'>
        <div>
        <p className='w-fit bg-black rounded-xl text-white px-2 py-1 text-sm'>🎁 Free student preparation kit included!</p>
        </div>
      </div>
      <ul className='space-y-3 pt-4'>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Full syllabus coverage</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Monthly payment system</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Doubt solving sessions</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Assignment after lecture</span>
        </li>
        <li className='flex space-x-3'>
        <svg
            className="h-5 w-5 shrink-0 text-black opacity-50"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black line-through opacity-50">Advanced topics covered</span>
        </li>
      </ul>
      <Link href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Main%20batch%of%Chemisphere!">
      <div className='hover:bg-chemisphere bg-black text-white hover:text-white transition 2s  text-center rounded-lg shadow-lg flex justify-center '>
      <button className='py-2 text-sm'>
        Send an inquiry →
      </button>
      </div>
      </Link>
    </Card> 
    <Card
      className="max-w-sm shadow-2xl border-4 border-black p-2 relative"
      renderImage={() => 
      <Image width={500} height={500} src="/jee-adv.svg" alt="JEE Advanced image" />
      }>
        <Image className='absolute laptop:-top-[90px] transform laptop:-rotate-12 laptop:-left-[50px] mobile:-top-[30px] mobile:-left-[5px] z-10 mobile:w-[100px] laptop:w-[180px] laptop:h-[150px]' src='/best-seller.svg' width={180} height={150} alt='best seller' />
        <marquee className='bg-chemisphere text-white rounded-md shadow-lg'>
        📣 Admissions open
        </marquee>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        JEE Advanced batch
      </h5>
      <div className='flex items items-center justify-left gap-2 pt-1'>
        <div>
        <p className='w-fit bg-white border-[2px] border-opacity-50 border-chemisphere rounded-xl text-black px-2 py-1 text-sm'>👑 Top rated</p>
        </div>
        <div>
        <p className='w-fit bg-slate-900 rounded-xl text-white px-2 py-1 text-sm'>🎤 Interactive</p>
        </div>
      </div>
      <div className='flex items items-center justify-left gap-` pt-1'>
        <div>
        <p className='w-fit bg-black rounded-xl text-white px-2 py-1 text-sm'>🎁 Free student preparation kit included!</p>
        </div>
      </div>
      <div>
        <p className='w-fit bg-black rounded-xl text-white px-2 py-1 text-sm'>+ Admission counselling</p>
        </div>
      <ul className='space-y-3 pt-4'>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Full syllabus coverage</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Monthly payment system</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Doubt solving sessions</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Assignment after lecture</span>
        </li>
        <li className='flex space-x-3'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black ">Advanced topics covered</span>
        </li>
        <li className='flex space-x-3'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black ">Small batches</span>
        </li>
        <li className='flex space-x-3'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black ">Personal attention</span>
        </li>
      </ul>
      <Link href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20JEE%20Advance%20batch%of%Chemisphere!">      <div className='hover:bg-chemisphere bg-black text-white hover:text-white transition 2s  text-center rounded-lg shadow-lg flex justify-center '>
      <button className='py-2 text-sm'>
        Send an inquiry →
      </button>
      </div>
      </Link>
    </Card> 
    <Card
      className="max-w-sm p-2"
      renderImage={() => 
      <Image width={500} height={500} src="/neet.svg" alt="NEET image" />
      }>
        <marquee className='bg-chemisphere text-white rounded-md shadow-lg'>
        📣 Admissions open
        </marquee>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        NEET batch
      </h5>
      <div className='flex items items-center justify-left gap-2 pt-1'>
        <div>
        <p className='w-fit bg-white border-[2px] border-opacity-50 border-chemisphere rounded-xl text-black px-2 py-1 text-sm'>👑 Top rated</p>
        </div>
        <div>
        <p className='w-fit bg-slate-900 rounded-xl text-white px-2 py-1 text-sm'>🎤 Interactive</p>
        </div>
      </div>
      <div>
        <p className='w-fit bg-black rounded-xl text-white px-2 py-1 text-sm'>🎁 Free student preparation kit included!</p>
        </div>
      <ul className='space-y-3 pt-4'>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Full syllabus coverage</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Monthly payment system</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Doubt solving sessions</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Assignment after lecture</span>
        </li>
        <li className='flex space-x-3'>
        </li>
      </ul>
      <Link href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20NEET%20batch%of%Chemisphere!">
      <div className='hover:bg-chemisphere bg-black text-white hover:text-white transition 2s  text-center rounded-lg shadow-lg flex justify-center '>
      <button className='py-2 text-sm'>
        Send an inquiry →
      </button>
      </div>
      </Link>
    </Card>
    {/* <Card
      className="max-w-sm p-2"
      renderImage={() => 
      <Image width={500} height={500} src="/jee-main-1.svg" alt="JEE Main image" />
      }>
        <marquee className='bg-chemisphere text-white rounded-md shadow-lg'>
        📣 Admissions open
        </marquee>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        JEE Main batch
      </h5>
      <div className='flex items items-center justify-left gap-2 pt-1'>
        <div>
        <p className='w-fit bg-white border-[2px] border-opacity-50 border-chemisphere rounded-xl text-black px-2 py-1 text-sm'>👑 Top rated</p>
        </div>
        <div>
        <p className='w-fit bg-slate-900 rounded-xl text-white px-2 py-1 text-sm'>🎤 Interactive</p>
        </div>
      </div>
      <ul className='space-y-3 pt-4'>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Full syllabus coverage</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Monthly payment system</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Doubt solving sessions</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Assignment after lecture</span>
        </li>
        <li className='flex space-x-3'>
        <svg
            className="h-5 w-5 shrink-0 text-black opacity-50"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black line-through opacity-50">Advanced topics covered</span>
        </li>
      </ul>
      <Link href='/'>
      <div className='hover:bg-chemisphere bg-black text-white hover:text-white transition 2s  text-center rounded-lg shadow-lg flex justify-center '>
      <button className='py-2 text-sm'>
        Send an inquiry →
      </button>
      </div>
      </Link>
    </Card> 
    <Card
      className="max-w-sm p-2"
      renderImage={() => 
      <Image width={500} height={500} src="/jee-main-1.svg" alt="JEE Main image" />
      }>
        <marquee className='bg-chemisphere text-white rounded-md shadow-lg'>
        📣 Admissions open
        </marquee>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        JEE Main batch
      </h5>
      <div className='flex items items-center justify-left gap-2 pt-1'>
        <div>
        <p className='w-fit bg-white border-[2px] border-opacity-50 border-chemisphere rounded-xl text-black px-2 py-1 text-sm'>👑 Top rated</p>
        </div>
        <div>
        <p className='w-fit bg-slate-900 rounded-xl text-white px-2 py-1 text-sm'>🎤 Interactive</p>
        </div>
      </div>
      <ul className='space-y-3 pt-4'>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Full syllabus coverage</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Monthly payment system</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Doubt solving sessions</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Assignment after lecture</span>
        </li>
        <li className='flex space-x-3'>
        <svg
            className="h-5 w-5 shrink-0 text-black opacity-50"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black line-through opacity-50">Advanced topics covered</span>
        </li>
      </ul>
      <Link href='/'>
      <div className='hover:bg-chemisphere bg-black text-white hover:text-white transition 2s  text-center rounded-lg shadow-lg flex justify-center '>
      <button className='py-2 text-sm'>
        Send an inquiry →
      </button>
      </div>
      </Link>
    </Card>  
    <Card
      className="max-w-sm p-2"
      renderImage={() => 
      <Image width={500} height={500} src="/jee-main-1.svg" alt="JEE Main image" />
      }>
        <marquee className='bg-chemisphere text-white rounded-md shadow-lg'>
        📣 Admissions open
        </marquee>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        JEE Main batch
      </h5>
      <div className='flex items items-center justify-left gap-2 pt-1'>
        <div>
        <p className='w-fit bg-white border-[2px] border-opacity-50 border-chemisphere rounded-xl text-black px-2 py-1 text-sm'>👑 Top rated</p>
        </div>
        <div>
        <p className='w-fit bg-slate-900 rounded-xl text-white px-2 py-1 text-sm'>🎤 Interactive</p>
        </div>
      </div>
      <ul className='space-y-3 pt-4'>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Full syllabus coverage</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Monthly payment system</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Doubt solving sessions</span>
        </li>
        <li className='flex space-x-2'>
        <svg
            className="h-5 w-5 shrink-0 text-tickgreen"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black">Assignment after lecture</span>
        </li>
        <li className='flex space-x-3'>
        <svg
            className="h-5 w-5 shrink-0 text-black opacity-50"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-base font-normal leading-tight text-black line-through opacity-50">Advanced topics covered</span>
        </li>
      </ul>
      <Link href='/'>
      <div className='hover:bg-chemisphere bg-black text-white hover:text-white transition 2s  text-center rounded-lg shadow-lg flex justify-center '>
      <button className='py-2 text-sm'>
        Send an inquiry →
      </button>
      </div>
      </Link>
    </Card>   */}

    </section>
    <Footer />
    </>
  )
}

export default InquiryLanding