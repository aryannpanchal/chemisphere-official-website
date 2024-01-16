import React from 'react'
import Navbar from './../../components/Navbar';
import AboutUsPageBreadcrumb from './../../components/AboutUsPageBreadcrumb';
import AboutUsHome from './../../components/AboutUsHome'
import Footer from './../../components/Footer'



const aboutUs = () => {
  return (
    <div>
      <Navbar />
      <AboutUsPageBreadcrumb />
      <AboutUsHome />
      <Footer />
    </div>
  )
}

export default aboutUs
