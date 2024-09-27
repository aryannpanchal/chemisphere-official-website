import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";
import localFont from "next/font/local";

// Custom font for styling
const myFont2 = localFont({
  src: [
    {
      path: "../fonts/hand.ttf",
    },
  ],
});

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = ["Chemistry made easy!"];

  // Typing effect for the text
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

  // Image rotation logic (fade effect)
  const [currentImage, setCurrentImage] = useState(0);
  const mobileImages = ["/ChemisphereBanner.svg", "/ChemisphereBannerMobile.svg"];
  const laptopImages = ["/ChemisphereBannerPC.svg", "/ChemisphereBannerPC2.svg"];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % mobileImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, [mobileImages.length]);

  // Framer motion animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
  };

  const fadeVariants = {
    fadeOut: { opacity: 0, transition: { duration: 1 } },
    fadeIn: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div>
      <section className="laptop:mx-24 mobile:mx-4">
        <div className="mobile:mb-24 grid mx-auto gap-16 xl:gap-0 laptop:pb-8 lg:grid-cols-12 mobile:mt-12">
          {/* Image at the top for mobile */}
          <motion.div
            className="mobile:block laptop:mt-0 laptop:col-span-12 laptop:flex justify-center mb-2"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <motion.div
              key={mobileImages[currentImage]}
              initial="fadeOut"
              animate="fadeIn"
              exit="fadeOut"
              variants={fadeVariants}
            >
              <Image
                src={mobileImages[currentImage]}
                width={500}
                height={500}
                className="rounded-lg shadow-lg mobile:visible laptop:hidden"
                alt="Mobile Top Image"
              />
            </motion.div>
          </motion.div>

          {/* Image for laptop/PC only */}
          <motion.div
            className="mobile:hidden laptop:col-span-12 laptop:flex justify-center mb-2"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <motion.div
              key={laptopImages[currentImage]}
              initial="fadeOut"
              animate="fadeIn"
              exit="fadeOut"
              variants={fadeVariants}
            >
              <Image
                src={laptopImages[currentImage]}
                width={1080}
                height={300}
                className="rounded-lg shadow-lg laptop:mb-12"
                alt="Laptop Top Image"
              />
            </motion.div>
          </motion.div>

          {/* Heading and description */}
          <motion.div
            className="place-self-center lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <h1 className="text-slate-900 font-bold laptop:text-5xl mobile:text-3xl mobile:text-center tracking-tight laptop:text-left">
              Premium chemistry coaching <br />
              for JEE (Main & Advanced),<br /> NEET & Boards.
            </h1>
            {/* Inquiry link button */}
            <div className="mobile:text-center laptop:text-left mobile:mt-6">
              <Link
                href="/inquiry"
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group mobile:text-center md:text-left"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-chemisphere rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="mobile:text-center relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  Proceed to inquiry →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Booking section */}
          <motion.div
            className="lg:mt-0 lg:col-span-5 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <div className="NeoButton shadow-3xl p-10 rounded-xl bg-white">
              <div className="laptop:flex laptop:flex-col gap-4">
                <p className="font-thin text-center mobile:text-2xl laptop:text-3xl mb-4">
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
                  <div>
                    <div>
                      <Link
                        target="__blank"
                        href="https://wa.me/+918850436230?text=I'm%20interested%20in%20inquiring%20about%20classes%20of%20Chemisphere!"
                      >
                        <button className="NeoButton2 text-center hover:border-chemisphere rounded-lg hover:bg-chemisphere hover:text-white transition p-2 my-4">
                          Book via WhatsApp 🚀
                        </button>
                      </Link>
                    </div>
                    <p className="text-center py-2 text-gray-600">
                      ⚡Get a faster response
                    </p>
                  </div>
                </div>
                <p className="font-base pt-2 text-gray-500 text-center text-sm">
                  On booking, you will agree to the terms and conditions of
                  chemisphere.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
