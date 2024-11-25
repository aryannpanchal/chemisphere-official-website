import React from 'react'
import PrivacyPolicyBreadcrumb from './../../components/PrivacyPolicyBreadcrumb';
import PrivacyPolicy from './../../components/PrivacyPolicy'
import Footer from './../../components/Footer'
import Header from './../../components/Header'
import HeaderMobile from './../../components/HeaderMobile'


const aboutUs = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <PrivacyPolicyBreadcrumb />
      <PrivacyPolicy />
      <Footer />
    </div>
  )
}

export default aboutUs
