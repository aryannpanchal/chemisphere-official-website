import React from 'react'
import Navbar from './../components/Navbar';
import Hero from '@/components/Hero';
import Sticky from '@/components/Sticky';
import OfferSection from '@/components/OfferSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const page = () => {
  return (
    
    
    <div  >
      <Sticky />
      <Navbar />
      <Hero />
      <OfferSection />
      <Testimonials />
      <Footer />
      
    </div>
  )
}

export default page