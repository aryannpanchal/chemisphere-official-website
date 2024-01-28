import React from 'react'
import NavbarSection from './../../components/NavbarSection';
import AboutUsPageBreadcrumb from './../../components/AboutUsPageBreadcrumb';
import AboutUsHome from './../../components/AboutUsHome'
import Footer from './../../components/Footer'



const aboutUs = () => {
  return (
    <div>
      <NavbarSection />
      <AboutUsPageBreadcrumb />
      <AboutUsHome />
      <Footer />
    </div>
  )
}

export default aboutUs
