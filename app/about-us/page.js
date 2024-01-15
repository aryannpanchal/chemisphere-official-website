import React from 'react'
import Navbar from './../../components/Navbar';
import AboutUsPageBreadcrumb from './../../components/AboutUsPageBreadcrumb';
import AboutUsHome from './../../components/AboutUsHome'

const blogs = () => {
  return (
    <div>
      <Navbar />
      <AboutUsPageBreadcrumb />
      <AboutUsHome />
    </div>
  )
}

export default blogs