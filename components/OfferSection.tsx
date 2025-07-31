'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: '/demo2.png' }, // Image 0
  { src: '/demo1.png' }, // Image 1
  { src: '/demo.png' }, // Image 2
  { src: '/demo.png' }, // Image 3
  { src: '/demo.png' }, // Image 4
  { src: '/demo.png' }, // Image 5
  { src: '/demo.png' }, // Image 6
  { src: '/demo.png' }, // Image 7
];

// Separate JSX content for each modal
const modals: JSX.Element[] = [
  <div>
    <h2 className="text-xl font-bold mb-2">Card 1: Basic Overview</h2>
    <p>This is a simple modal with basic text for Card 1.</p>
  </div>,
  <div>
    <h2 className="text-xl font-bold mb-2">Card 2: Details</h2>
    <ul className="list-disc pl-4">
      <li>Point A</li>
      <li>Point B</li>
      <li>Point C</li>
    </ul>
  </div>,
  <div>
    <h2 className="text-xl font-bold mb-2">Card 3: Image with Caption</h2>
    <Image src="/demo.png" alt="Sample" width={200} height={200} className="rounded-lg mb-2" />
    <p className="text-sm text-gray-600">A sample image with description.</p>
  </div>,
  <div>
    <h2 className="text-xl font-bold mb-2">Card 4: Call to Action</h2>
    <p>Click below to proceed with something amazing.</p>
    <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded">Proceed</button>
  </div>,
  <div>
    <h2 className="text-xl font-bold mb-2">Card 5: Code Snippet</h2>
    <pre className="bg-gray-100 p-3 rounded text-sm">
      {`const hello = () => console.log("Hello World!");`}
    </pre>
  </div>,
  <div>
    <h2 className="text-xl font-bold mb-2">Card 6: Info Block</h2>
    <p><strong>Status:</strong> Active</p>
    <p><strong>Date:</strong> July 2025</p>
  </div>,
  <div>
    <h2 className="text-xl font-bold mb-2">Card 7: Stats</h2>
    <div className="grid grid-cols-2 gap-2">
      <div className="p-2 bg-green-100 rounded">Users: 1200</div>
      <div className="p-2 bg-blue-100 rounded">Views: 54k</div>
    </div>
  </div>,
  <div>
    <h2 className="text-xl font-bold mb-2">Card 8: Quote</h2>
    <blockquote className="italic border-l-4 border-gray-400 pl-4">
      "The best way to predict the future is to create it."
    </blockquote>
  </div>,
];

export default function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = 260;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full relative px-4 pb-8">
      {/* Scrollable Cards */}
     <div className='text-center text-4xl font-bold text-chemisphere tracking-tighter' id="faq-section">
          <h4>What Makes Chemisphere Unique?</h4>
        </div> <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 p-16 scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
         

        {images.map((img, i) => (
          <motion.div
            key={i}
            className="min-w-[240px] h-[600px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg cursor-pointer snap-start"
            onClick={() => setActiveIndex(i)}
            whileHover={{
              scale: 1.06,
              y: -10,
              boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.2)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Image
              src={img.src}
              alt={`Image ${i + 1}`}
              width={240}
              height={600}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-between mt-6 px-4">
        <button
          onClick={() => scroll('left')}
          className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-1"
        >
          ←
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-1"
        >
          →
        </button>
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {activeIndex !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setActiveIndex(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed top-1/2 left-1/2 w-[80%] max-w-xl bg-white rounded-xl shadow-lg z-50 p-6"
              initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {modals[activeIndex]}
              <button
                className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setActiveIndex(null)}
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
