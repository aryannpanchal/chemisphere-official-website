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
import {PageWrapper} from '../components/page-wrapper';
import { AnimatedChild } from '../components/page-wrapper';


const page = () =>  {

  return (
    
 <div>
      <PageWrapper>
      <AnimatedChild><FacebookChatPlugin /></AnimatedChild>
        <AnimatedChild><MarqueeSection /></AnimatedChild>
        <AnimatedChild><Indicator /></AnimatedChild>
        <AnimatedChild><NavbarSection /></AnimatedChild>      
        <AnimatedChild><Hero /></AnimatedChild>
        <AnimatedChild><Stats /></AnimatedChild>
        <AnimatedChild><OfferSection /></AnimatedChild>
        <AnimatedChild><Testimonials /></AnimatedChild>
        <AnimatedChild><Mockup /></AnimatedChild>
        <AnimatedChild><FAQ /></AnimatedChild>
        <AnimatedChild><Footer /></AnimatedChild>        
      </PageWrapper>


      
    </div>
  )
}

export default page
