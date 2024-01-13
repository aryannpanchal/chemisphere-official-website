import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
        

<footer className=" rounded-lg shadow  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://chemisphere.in/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image src="chemisphere-black.svg" className="h-8" alt="Chemisphere Logo" height={100} width={100} />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 dark:text-gray-900">
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">About Us</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Blogs</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline me-4 md:me-6">Inquiry</Link>
                </li>
            
            </ul>
        </div>
        <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-900 lg:my-8" />
        <p className='text-center text-sm  text-gray-500'>Website created by <Link href='https://www.linkedin.com/in/aryan-panchal-3a22491a9/'><span>Aryan Panchal</span></Link></p>

    </div>
</footer>


    </div>
  )
}

export default Footer
