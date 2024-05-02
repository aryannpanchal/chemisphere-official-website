import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "swiper/css/pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Label, TextInput } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import '../app/globals.css'
import localFont from 'next/font/local'


const myFont2 = localFont({  
  src: [
  {
    path: '../fonts/hand.ttf',
  }
  ] })


const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = ["Chemistry made easy!"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < phrases[0].length) {
        setText((prevText) => prevText + phrases[0][index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed here (milliseconds)

    return () => clearInterval(interval);
  }, [index]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
  };

  return (
    <div>
      <section>
        <div className="grid px-10 mx-auto gap-8 xl:gap-0 laptop:py-8 lg:grid-cols-12 laptop:mb-44 mobile:mt-12 ">
          <motion.div
            className="mr-auto place-self-center lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <h1 className="text-slate-900 font-extrabold laptop:text-6xl mobile:text-3xl mobile:text-center mb-3 tracking-tight laptop:text-left pb-5">
              Premium chemistry coaching for JEE (Main & Advanced),<br /> NEET & Boards.
            </h1>
            <p className={`text-chemisphere mobile:text-center mobile:text-2xl laptop:text-6xl laptop:text-left pb-5 ${myFont2.className}`} >
              {text}
            </p>

<div className='mobile:text-center laptop:text-left'>
  <Link href="/" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group mobile:text-center md:text-left">
  <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-chemisphere rounded group-hover:-mr-4 group-hover:-mt-4">
    <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
  </span>
  <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
  <span class="mobile:text-center relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Proceed to inquiry →</span>
</Link>
</div>


            
          </motion.div>
          <motion.div
            className="lg:mt-0 lg:col-span-5 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <div className="NeoButton shadow-3xl p-10 rounded-xl bg-white">
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-center mobile:text-2xl laptop:text-3xl">
                  Book a free demo class NOW!
                </p>
                <div className="laptop:mx-20">
                  <Image
                    src="/chandan.svg"
                    width={1139}
                    height={654}
                    alt="chandan-sir-image"
                  />
                </div>
                <div className="flex laptop:flex-row mobile:flex-col justify-center item-center laptop:gap-10 mobile:gap-5 mobile:pt-3 mobile:text-center laptop:pt-5">
                  <Link href="/sign-up">
                    <button className="NeoButton2 text-center hover:border-chemisphere rounded-lg hover:bg-chemisphere hover:text-white transition p-2">
                      Book via form
                    </button>
                  </Link>
                  <div>
                    <div>
                      <Link
                        target="__blank"
                        href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20classes%20of%20Chemisphere!"
                      >
                        <button className="NeoButton2 text-center hover:border-chemisphere rounded-lg hover:bg-chemisphere hover:text-white transition p-2">
                          Book via WhatsApp
                        </button>
                      </Link>
                    </div>
                    <p className="text-center py-2 text-gray-600">⚡Faster way</p>
                  </div>
                </div>
                <p className="font-base pt-2 text-gray-500 text-center text-sm">
                  On booking, you will agree to the terms and conditions of chemisphere.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default Hero;
