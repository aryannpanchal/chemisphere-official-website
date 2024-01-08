"use client"
import React from 'react'
import { useState} from 'react';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';



const ModalButton = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const [name, setname] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    
    
    const handleSubmit = async (e) => {

    e.preventDefault();

    console.log("Full name: ", name);
    console.log("Mobile Number: ", phonenumber);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        phonenumber,
        
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setname("");
      setphonenumber("");
      handleHideModal();
      router.push("/")
      alertSuccess();
    }
  };

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleHideModal = () => {
    setModalOpen(false);
  };
  const alertSuccess = () => {
    return(
      <>
      <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
  </div></>
    )
  }
  

 return (
    <div>
 <Button  data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal" type="button"
        onClick={handleToggleModal} className="bg-chemisphere rounded-full active:bg-white hover:bg-tickgreen transition ease-in-out duration-300">
                      Book a free demo class now
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
</Button>
{modalOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen max-h-full bg-opacity-75 bg-black"
          onClick={handleHideModal}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-slate-800" onClick={(e) => e.stopPropagation()}>
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Book a free demo class NOW!
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-900 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:chemisphere dark:hover:text-white"
                  onClick={handleHideModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e)=> setname(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter your full name here"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Mobile Number
          </label>
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            value={phonenumber}
            onChange={(e)=> setphonenumber(e.target.value) }
            placeholder="+YY XXXXXXXXXX"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
                  
                  <button
                    type="submit" 
                    className=" mt-6 w-full text-white bg-chemisphere hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-chemisphere dark:hover:bg-chemisphere dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                  <div
                      className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      <p>Upon submission, our team will reach out to you!</p>
                    </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default ModalButton