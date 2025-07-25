import React from 'react'
import Header from '@/components/Header';
import HeaderMobile from '@/components/HeaderMobile';
import Footer from '@/components/Footer';
import Physixcel_Scroll_Cards from '@/components/Physixcel_Scroll_Cards';
import Physixcel from '@/components/Physixcel';
import PhysicsSection from '@/components/Physics';

const Physics = () => {
  return (
    <>
    <Header />
    <HeaderMobile />
    <Physixcel />
    <Physixcel_Scroll_Cards />
    <PhysicsSection />
    <Footer />
    </>
  )
}

export default Physics