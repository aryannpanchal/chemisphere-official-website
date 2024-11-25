'use client';

import React, { useState, useEffect } from 'react';

// Components
import Header from './../components/Header';
import HeaderMobile from './../components/HeaderMobile';
import Hero from '@/components/Hero';
import Chandan from './../components/Chandan';
import Testimonials from '@/components/Testimonials';
import Stats from '../components/Stats';
import ExamCard from './../components/ExamCard';
import OfferSection from '@/components/OfferSection';
import Mockup from '@/components/Mockup';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FacebookChatPlugin from '../components/Fbchat';
import Indicator from '../components/Indicator';

const Page = () => {
  const [showContent, setShowContent] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Check if the user has already visited
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      // Show the video if it's the first visit
      setShowVideo(true);
      localStorage.setItem('hasVisited', 'true'); // Mark the user as having visited
    } else {
      // Directly show the content
      setShowContent(true);
    }
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
    setShowContent(true);
  };

  return (
    <div>
      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <video
            src="/intro.mp4"
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {showContent && (
        <>
          {/* Facebook Chat Plugin */}
          <FacebookChatPlugin />

          {/* Header for Desktop and Mobile */}
          <HeaderMobile />
          <Header />

          {/* Indicator Section */}
          <Indicator />

          {/* Main Content */}
          <Hero />
          <Chandan />
          <Testimonials />
          <Stats />
          <ExamCard />
          <OfferSection />

          {/* Additional Sections */}
          <Mockup />
          <FAQ />

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
