'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className=" text-black py-16 laptop:mt-24 px-4 md:px-12 mt-12">
      <div className="max-w-8xl mx-auto laptop:pl-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Textual Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tighter">
            Behind in
            <span className="text-chemisphere font-bold tracking-tighter"> Chemistry?</span>
          </h1>
          <h2 className='mobile:text-3xl laptop:text-4xl font-semibold tracking-tighter'>Not for long.</h2>
          <p className="text-gray-900 text-lg">
            Elite mentorship for <span className='font-semibold'>JEE & NEET.</span> <br />
            Results that speak.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/sign-up">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-chemisphere text-white border border-black font-semibold px-6 py-3 rounded-full shadow-lg transition hover:brightness-110"
              >
                Get started
              </motion.button>
            </Link>
            <Link href="https://chemisphere.store" target="_blank">
              <button className="border border-chemisphere px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
                Visit Store
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right - Image + Video */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6"
        >
          <Image 
            src="/cb-new.svg"
            alt="Chemisphere Hero"
            width={550}
            height={500}
            className="rounded-3xl"
          />

          {/* <div className="aspect-video rounded-3xl overflow-hidden ">
            <iframe 
              src="https://www.youtube.com/embed/765qd0vmxmM?start=11"
              title="Why Chemisphere?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div> */}
        </motion.div>
      </div>

      {/* Feature Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-16 grid md:grid-cols-3 gap-6 text-center"
      >
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">Customized Learning</h3>
          <p className="text-gray-900 text-sm">
            Study plans tailored just for you — target JEE, NEET or Boards with focus.
          </p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">Track Progress</h3>
          <p className="text-gray-900 text-sm">
            Weekly & monthly tests, progress tracking dashboard and parent updates.
          </p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">Top-Class Resources</h3>
          <p className="text-gray-900 text-sm">
            Notes, recorded lectures, mock tests & previous year questions curated by experts.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
