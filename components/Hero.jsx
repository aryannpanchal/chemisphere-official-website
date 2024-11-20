'use client'
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Hero = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(""); // Clear previous status
    emailjs
      .sendForm(
        "service_584nbo7", // Replace with your EmailJS service ID
        "template_ryhh51o", // Replace with your EmailJS template ID
        e.target,
        "BpLl6GlYWdp4RpFjQ" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setFormStatus("Booking request sent successfully to Chemisphere!");
          e.target.reset(); // Reset form fields
        },
        (error) => {
          setFormStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-bgg bg-cover mobile:pb-[2px] rounded-3xl laptop:mt-32 laptop:mx-4">
      <section className="laptop:mx-24 mobile:mx-4 mt-0 pt-0">
        <div className="mobile:mb-24 grid mx-auto gap-4 laptop:pb-8 laptop:mb-0 laptop:grid-cols-12 mt-8">
          {/* Heading and description */}
          <div className="laptop:col-span-7 laptop:mt-[-12px]">
            <div className="laptop:bg-white p-4 rounded-b-3xl flex-col justify-center">
              <h1 className="laptop:text-slate-900 mobile:text-white laptop:pb-12 mobile:mt-12 font-bold laptop:text-4xl mobile:text-3xl text-center tracking-tight laptop:text-left mobile:pb-0 mobile:mb-0">
                Premium chemistry coaching <br />
                for JEE (Main & Advanced),<br /> NEET & Boards.
              </h1>
            </div>

            <div className="bg-white p-4 rounded-3xl mt-4 mobile:hidden laptop:block">
              <div className="max-w-screen-xl mx-auto p-5">
                <div className="rounded overflow-hidden flex flex-col max-w-fit mx-auto">
                  <iframe
                    className="rounded-3xl mobile:w-fit mobile:h-fit laptop:w-[670px] laptop:h-[370px]"
                    src="https://www.youtube.com/embed/hYblxRG5WrY?si=ozHJrn8MsvxQzdjb"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <div className="relative px-10 pt-5 pb-5 bg-black rounded-3xl mt-4">
                    <a
                      href="#"
                      className="font-normal text-lg text-white inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2"
                    >
                      Why choose Chemisphere?
                    </a>
                    <p className="text-gray-400 text-base">
                      There are customized classes for you to suit your needs.
                      Also, you will get a lot of video and text resources to
                      learn along with the most neat class notes which will
                      probably make you fall in love with Chemistry again! You
                      will be able to track your progress at every level with
                      weekly and monthly tests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking section */}
          <div className="laptop:mt-0 laptop:col-span-5 flex justify-center max-h-fit mobile:mt-0 mobile:pt-0">
            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden max-h-fit mobile:mt-0 mobile:pt-0">
              <div className="text-2xl py-4 px-6 bg-white text-white text-center font-bold uppercase max-h-fit mobile:mt-0 mobile:pt-0">
                <img
                  src="/newChemisphereHeroPhoto.svg"
                  className="w-[350px] pt-0 mt-0 max-h-fit rounded-3xl"
                  alt="Chemisphere Hero"
                />
              </div>
              <form
                className="py-4 px-6"
                onSubmit={handleSubmit}
                method="POST"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="from_name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="from_email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="flex items-center justify-center mb-4 mt-8">
                  <button
                    className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Book Appointment
                  </button>
                </div>
                {formStatus && (
                  <p className="text-center text-sm text-gray-500 mt-2">
                    {formStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
