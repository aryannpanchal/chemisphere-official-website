import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
        

        <footer className="bg-gray-100 mt-12">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://chemisphere.in/" className="flex items-center">
                  <img src="/chemisphere-black.svg" className="h-8 me-3" alt="Chemisphere Logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Pages</h2> */}
                  <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline"></a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline"></a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://www.instagram.com/chemisphere.in/" target="__blank" className="hover:underline ">Instagram</a>
                      </li>
                      <li className='mb-4'>
                          <a href="https://www.youtube.com/@Chemisphere" target="__blank" className="hover:underline">Youtube</a>
                      </li>
                      <li className='mb-4'>
                          <a href="https://www.linkedin.com/company/79804759/admin/feed/posts/" target='__blank' className="hover:underline">LinkedIn</a>
                      </li>
                      <li className='mb-4'>
                          <a href="https://www.facebook.com/chemisphere.in?mibextid=ZbWKwL" target="__blank" className="hover:underline">Facebook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                  <ul className="text-gray-500  font-medium">
                      <li className="mb-4">
                          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          {/* <a href="#" className="hover:underline">Terms &amp; Conditions</a> */}
                      </li>
                  </ul>
              </div>
          </div>
      </div>  
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
      <div className="flex items-center justify-center ">
          <span className="text-sm text-gray-500">© 2023 <a href="https://chemisphere.in/" className="hover:underline">Chemisphere™</a>. All Rights Reserved.
          </span>
          
          
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
    <div className="flex items-center justify-center ">
          <span className="text-sm text-gray-500">Website made by <a href="https://www.linkedin.com/in/aryan-panchal-3a22491a9/" target="_blank" className="underline text-blue-600">Aryan Panchal</a>
          </span>
          
          
      </div>

      
    </div>
</footer>


    </div>
  )
}

export default Footer
