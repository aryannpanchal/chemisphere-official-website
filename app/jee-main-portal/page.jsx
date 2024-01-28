import React from 'react'
import NavbarSection from '../../components/NavbarSection';
import Footer from '../../components/Footer'
import JeeMainPortalBreadcrumb from '../../components/JeeMainPortalBreadcrumb'
import JeePortal from './../../components/JeePortal';



const JeeMainPage = () => {
  return (
    <div>
      <NavbarSection />
      <JeeMainPortalBreadcrumb />
      <JeePortal />     
      <Footer />
    </div>
  )
}

export default JeeMainPage
