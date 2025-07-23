"use client"
import HeaderDashboard from "@/components/HeaderDashboard";
import HeaderMobileDashboard from "@/components/HeaderMobileDashboard";
import Footer from "@/components/Footer";
import React from "react";
import Form from "@/components/Form";

const DashboardPage = () => {

    return(
     <>
     <HeaderDashboard />
     <HeaderMobileDashboard />
     
    <div className='bg-red my-[100px] '>
      <Form />
      </div>
     <Footer />  
    </>
    )
  }

export default DashboardPage;
