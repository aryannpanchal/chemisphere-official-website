import React from 'react'
import Navbar from './../components/Navbar';
import Hero from '@/components/Hero';
import Sticky from '@/components/Sticky';
import OfferSection from '@/components/OfferSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Mockup from '@/components/Mockup';
import FAQ from '@/components/FAQ';
import MarqueeSection from './../components/MarqueeSection';
import FacebookChatPlugin from './../components/Fbchat';
import Stats from './../components/Stats';

const page = () => {
  return (
    
    
    <div  >
      <FacebookChatPlugin />
      <MarqueeSection />
      <Sticky />
      <Navbar />
      <Hero />
      <Stats />
      <OfferSection />
      
      <Testimonials />
      <Mockup />
      <FAQ />
      <Footer />
      
    </div>
  )
}

export default page
