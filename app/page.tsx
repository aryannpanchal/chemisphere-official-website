'use client';
import React from 'react'
import NavbarSection from '../components/NavbarSection';
import Hero from '@/components/Hero';
import OfferSection from '@/components/OfferSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Mockup from '@/components/Mockup';
import FAQ from '@/components/FAQ';
import MarqueeSection from '../components/MarqueeSection';
import FacebookChatPlugin from '../components/Fbchat';
import Stats from '../components/Stats';
import Indicator from '../components/Indicator';
import { AnimatedChild} from '../components/page-wrapper';


const page = () =>  {

  return (
    
 <div>
     <FacebookChatPlugin />
       <MarqueeSection />
        <Indicator />
        <NavbarSection />  
        <Hero />
        <Testimonials />
        <Stats />
        <OfferSection />
        <Mockup />
        <FAQ />
        <Footer />       
      


      
    </div>
  )
}

export default page
