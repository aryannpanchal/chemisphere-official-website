'use client';
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
    <div className="bg-bgg bg-cover rounded-3xl mobile:pb-2 laptop:mt-32 laptop:mx-4">
      <section className="laptop:mx-24 mobile:mx-4 pt-0">
        <div className="grid gap-4 mx-auto laptop:pb-8 laptop:mb-0 laptop:grid-cols-12">
          {/* Heading and description */}
          <div className="laptop:col-span-7">
            <div className="bg-white p-4 rounded-b-3xl">
              <h1 className="laptop:text-slate-900  mobile:text-black mobile:mt-24 text-center laptop:text-left font-bold text-3xl laptop:text-4xl tracking-tight laptop:mt-0">
                Premium chemistry coaching <br />
                for JEE (Main & Advanced), <br /> NEET & Boards.
              </h1>
            </div>

            <div className="bg-white p-4 rounded-3xl laptop:mt-4 mobile:mt-12">
              <div className="mx-auto p-5">
                <div className="rounded flex flex-col max-w-fit mx-auto w-full">
                  <iframe
                    className="rounded-3xl w-full aspect-video"
                    src="https://www.youtube.com/embed/hYblxRG5WrY?si=ozHJrn8MsvxQzdjb"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div className="relative px-6 pt-5 pb-5 bg-black rounded-3xl mt-4">
                    <a
                      href="#"
                      className="font-normal text-lg text-white hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      Why choose Chemisphere?
                    </a>
                    <p className="text-gray-400 text-sm">
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
          <div className="laptop:col-span-5 flex justify-center">
            <div className=" mx-auto mobile:my-12 px-16 laptop:px-12 laptop:mx-0  bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="text-center py-4">
                <img
                  src="/newChemisphereHeroPhoto.svg"
                  className="w-[300px] mx-auto rounded-3xl"
                  alt="Chemisphere Hero"
                />
              </div>
              <form className="py-4 laptop:px-0" onSubmit={handleSubmit} method="POST">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="flex justify-center mt-8">
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
