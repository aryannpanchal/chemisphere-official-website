'use client';
import React from 'react'
import NavbarSectionDashboard from '../../../../components/NavbarSectionDashboard';
import HeroDashboard from '../../../../components/HeroDashboard';
import OfferSection from '../../../../components/OfferSection';
import Testimonials from '../../../../components/Testimonials';
import Footer from '../../../../components/Footer';
import Mockup from '../../../../components/Mockup';
import FAQ from '@/components/FAQ';
import MarqueeSection from '../../../../components/MarqueeSection';
import FacebookChatPlugin from '../../../../components/Fbchat';
import Stats from '../../../../components/Stats';
import Indicator from '../../../../components/Indicator';


const page = () =>  {

  return (
    
 <div>
   
      <FacebookChatPlugin />
      <MarqueeSection />
      <Indicator />
      <NavbarSectionDashboard />      
      <HeroDashboard />
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
