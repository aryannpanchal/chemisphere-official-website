'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className=" text-black py-16 laptop:mt-32 px-4 md:px-12 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Textual Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Premium Coaching for<br />
            <span className="text-chemisphere">JEE, NEET & Boards</span>
          </h1>
          <p className="text-gray-900 text-lg">
            Join India’s most loved science platform! Tailored study plans, interactive classes, and resources designed to make you fall in love with Chemistry again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/sign-up">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#25D366] text-black font-semibold px-6 py-3 rounded-full shadow-lg transition hover:brightness-110"
              >
                ENROLL NOW
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
          {/* <Image 
            src="/newChemisphereHeroPhoto.svg"
            alt="Chemisphere Hero"
            width={500}
            height={500}
            className="rounded-3xl mx-auto"
          /> */}

          <div className="aspect-video rounded-3xl overflow-hidden ">
            <iframe 
              src="https://www.youtube.com/embed/765qd0vmxmM?start=11"
              title="Why Chemisphere?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
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
