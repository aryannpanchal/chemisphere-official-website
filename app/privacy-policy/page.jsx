import React from 'react'
import NavbarSection from '../../components/NavbarSection';
import PrivacyPolicyBreadcrumb from './../../components/PrivacyPolicyBreadcrumb';
import PrivacyPolicy from './../../components/PrivacyPolicy'
import Footer from './../../components/Footer'



const aboutUs = () => {
  return (
    <div>
      <NavbarSection />
      <PrivacyPolicyBreadcrumb />
      <PrivacyPolicy />
      <Footer />
    </div>
  )
}

export default aboutUs
