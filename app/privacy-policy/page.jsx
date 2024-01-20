import React from 'react'
import Navbar from './../../components/Navbar';
import PrivacyPolicyBreadcrumb from './../../components/PrivacyPolicyBreadcrumb';
import PrivacyPolicy from './../../components/PrivacyPolicy'
import Footer from './../../components/Footer'



const aboutUs = () => {
  return (
    <div>
      <Navbar />
      <PrivacyPolicyBreadcrumb />
      <PrivacyPolicy />
      <Footer />
    </div>
  )
}

export default aboutUs
