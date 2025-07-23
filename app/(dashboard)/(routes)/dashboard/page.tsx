"use client"
import HeaderDashboard from "@/components/HeaderDashboard";
import HeaderMobile from "@/components/HeaderMobile";
import Footer from "@/components/Footer";
import React from "react";
import Form from "@/components/Form";

const DashboardPage = () => {

    return(
     <>
     <HeaderDashboard />
     <HeaderMobile />
     
    <div className='bg-red my-44 '>
      <Form />
      </div>
     <Footer />  
    </>
    )
  }

export default DashboardPage;
