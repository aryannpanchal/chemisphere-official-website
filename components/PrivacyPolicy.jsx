import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const AboutUsHome = () => {
  return (
    <div>
      <section className=" mx-auto max-w-screen-xl mb-0 px-4 items-center laptop:flex-row laptop:px-8 flex flex-col-reverse mt-5 ">
        
        <div className="space-y-8 mobile:mx-2 flex-1 laptop:my-20 mobile:my-16 mobile:text-center laptop:text-left">
            <h1 className="text-slate-800 font-bold text-4xl xl:text-5xl">
                Privacy Policy of <span className='text-chemisphere'>Chemisphere!</span>
            </h1>
            <p className="text-gray-900 text-left">
            Welcome to Chemisphere.in. We respect your privacy and want to protect your personal information. This Privacy Policy explains how we collect, use, and disclose your information.  <br /></p>
            <h3  className="text-slate-800 font-bold text-left text-2xl xl:text-2xl">
            Policies
            </h3>
            <div className='ml-6 text-slate-900  text-left'>
              <li className='font-bold  text-left'>
              Information We Collect: 
              </li>
              <p className='ml-6 mb-3  text-left'>We may collect personal identification information from users in a variety of ways, including, but not limited to, when users message us on WhatsApp after visiting our site.</p>
              <li className='font-bold'>
              How We Use Collected Information: 
              </li>
              <p className='ml-6 mb-3'>Chemisphere.in collects and uses users' personal information for the following purposes: to improve customer service, to personalize user experience, to improve our site</p>
              <li className='font-bold'>
              How We Protect Your Information:
              </li>
              <p className='ml-6 mb-3'>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>
              <li className='font-bold'>
              Sharing Your Personal Information: 
              </li>
              <p className='ml-6 mb-3'>We do not sell, trade, or rent users' personal identification information to others. We do not share your personal information with any third parties.
</p>
              <li className='font-bold'>
              Changes to This Privacy Policy:
              </li>
              <p className='ml-6 mb-3'>Chemisphere.in has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.</p>
              <li className='font-bold'>
              Your Acceptance of These Terms:
              </li>
              <p className='ml-6 mb-3'>By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site. Your continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
              <li className='font-bold'>
              Contacting Us:
              </li>
              <p className='ml-6 mb-3'>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <br />
<a href="mailto:info@chemisphere.in" className="text-blue-400">info@chemisphere.in</a><br />
+91 88504 36230</p>
            
            
            
            </div>
              
            
        </div>         
</section>

    </div>
  )
}

export default AboutUsHome
