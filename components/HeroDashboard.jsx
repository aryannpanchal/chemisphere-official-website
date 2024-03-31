"use client";
import React, { useState, useEffect, useRef } from "react"
import 'swiper/css/pagination';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Label, TextInput } from "flowbite-react";
import Link from 'next/link'

const HeroDashboard = () => {
  const [fullname, setFullname] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        phoneno,
        email,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setPhoneno("");
      setEmail("");
    }
  };
  return (
   
    <div>
      <section class="bg-bg-bg-hero bg-center bg-cover ">
    <div class="grid px-10 py-8 mx-auto gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <h1 className="text-slate-900 font-extrabold laptop:text-6xl mobile:text-5xl mobile:text-center mb-3 tracking-tight laptop:text-left">
            Chemisphere by Chandan Biswas.
        </h1>
            <p class="mobile:text-center text-slate-800 laptop:text-5xl mobile:text-xl my-6 tracking-tight laptop:text-left font-extrabold">Premium chemistry coaching for JEE (Main & Advanced),<br /> NEET & Boards.</p>
            <p className='mobile:text-center laptop:text-6xl mobile:text-3xl font-extrabold text-chemisphere tracking-tighter laptop:text-left'>ADMISSIONS OPEN</p>

           
          
        </div>
        <div class="lg:mt-0 lg:col-span-5 flex justify-center ">
        <div className=' shadow-2xl p-10 rounded-xl bg-white'> 

<form className="flex  flex-col gap-4 "
onSubmit={handleSubmit}
>
  <p className='font-semibold text-center mobile:text-2xl laptop:text-3xl '>Book a free demo class NOW!</p>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="fullName" value="Your full name" />
    </div>
    <TextInput id="fullname" type="text" placeholder="Enter your full name here" required shadow 
         onChange={(e) => setFullname(e.target.value)}
         value={fullname}
    />
  </div>
  <div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="phoneno" value="Your contact number" />
    </div>
    <TextInput id="phoneno" type="tel" placeholder="+91XXXXXXXXXX" required shadow pattern="^\+91[0-9]{10}$"
           onChange={(e) => setPhoneno(e.target.value)}
           value={phoneno}
    />
  </div></div>
  <div>
    <div className="mb-2 block">
      <Label htmlFor="email" value="Your email" />
    </div>
    <TextInput id="email" type="email" placeholder="Enter your email address here" required shadow 
           onChange={(e) => setEmail(e.target.value)}
           value={email}
    />
  </div>
<p className='italic'>Valid only for first-time users</p>
  <button type="submit" className='text-black border-2  bg-slate-900 py-2 rounded-xl hover:bg-chemisphere hover:text-white transition transition-smooth'
  >
    Proceed to booking →
  </button>
</form>
<div className=" flex flex-col">
  {error &&
    error.map((e, index) => (
      <div
        key={index}
        className={`${
          success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        } border border-green-400 rounded p-4 my-2`}
        role="Alert"
      >
      {e}
      </div>   


    ))}
</div>

   </div>        
   </div>                
    </div>
</section>
       <div>
        
        
    
</div>
</div>

  )
}

export default HeroDashboard
