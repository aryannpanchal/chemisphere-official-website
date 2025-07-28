'use client';

import React from 'react';
import Header from '@/components/Header';
import HeaderMobile from '@/components/HeaderMobile';
import Footer from '@/components/Footer';
import Image from 'next/image';

const Results = () => {
  const images = Array.from({ length: 31 }, (_, i) => `/r${i + 2}.jpg`);

  return (
    <>
      <Header />
      <HeaderMobile />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-chemisphere mt-20 tracking-tighter">Captured Moments</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mt-6 text-lg">
              A visual journey through our most memorable events
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-square overflow-hidden rounded-lg group"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Results;
