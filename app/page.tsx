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
  const [showVideo, setShowVideo] = useState(false); // Video visibility
  const [fadeInContent, setFadeInContent] = useState(false); // Controls fade-in effect for content

  useEffect(() => {
    // Check if the user has already visited
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      setShowVideo(true); // Show the video on first visit
      localStorage.setItem('hasVisited', 'true'); // Mark as visited
    } else {
      setFadeInContent(true); // Immediately show content for returning users
    }
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false); // Hide video
    setTimeout(() => {
      setFadeInContent(true); // Trigger fade-in for main content
    }, 200); // Slight delay for smooth transition
  };

  return (
    <div className="relative">
      {/* Video Overlay */}
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

      {/* Main Content */}
      <div
        className={`transition-opacity duration-1000 ${
          fadeInContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
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
      </div>
    </div>
  );
};

export default Page;
