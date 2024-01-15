import React from 'react'
import Navbar from './../components/Navbar';
import Hero from '@/components/Hero';
import Sticky from '@/components/Sticky';
import OfferSection from '@/components/OfferSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Mockup from '@/components/Mockup';
import FAO from '@/components/FAQ';
const page = () => {
  return (
    
    
    <div  >
      <Sticky />
      <Navbar />
      <Hero />
      <OfferSection />
      <Testimonials />
      <Mockup />
      <FAQ />
      <Footer />
      
    </div>
  )
}

export default page
