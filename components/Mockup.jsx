import Link from 'next/link';
import Image from 'next/image';

const mockup = () => {
  return (
    <> 
<section className="text-gray-600 body-font mb-24 ">
    
<div className=" p-4 py-16 mt-6 text-center rounded-lg sm:p-8  sm:flex-col md:flex gap-5 justify-center align-center items-center">
      <div className='flex justify-center'>
        <Image src='/mob2.png' alt='mobile-image' width={700} height={700} className='flex items-center justify-center' />
    </div>
    <div>

 <h2 className="mb-2 text-2xl font-extrabold text-black mobile:pt-5">Entire student dashboard, now on your mobile.</h2>
     
     <p className="mb-5 laptop:text-base text-black mobile:pt-5 mx-6 mobile:text-l font-thin max-w-md">Our app is the go-to solution for students across the country with a simple user interface, design and exciting features.</p>
      <div>
         <ul role="list" class="space-y-4 text-black mobile:pt-5 pb-6 px-2 md:hidden block text-base">
               <li class="flex space-x-2 rtl:space-x-reverse items-center">
                   <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                   </svg>
                   <span class="leading-tight text-base">Interactive Live Classes</span>
               </li>
               <li class="flex space-x-2 rtl:space-x-reverse items-center">
                   <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                   </svg>
                   <span class="leading-tight text-base">Course Material</span>
               </li>
               <li class="flex space-x-2 rtl:space-x-reverse items-center">
                   <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                   </svg>
                   <span class="leading-tight text-base">Tests and performance reports</span>
               </li>
               <li class="flex space-x-2 rtl:space-x-reverse items-center">
                   <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                   </svg>
                   <span class="leading-tight text-md">Doubt clearance portal open 24x7</span>
               </li>
               <li class="flex space-x-2 rtl:space-x-reverse items-center">
                   <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                   </svg>
                   <span class="leading-tight text-md">User friendly Interface</span>
               </li>
               <li class="flex rtl:space-x-reverse items-center">
                   <span class=" leading-tight text-md text-gray-500">and much more.</span>
               </li>

               </ul>
      </div>
     
     <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
       <Link href="https://apps.apple.com/in/app/classplus/id1324522260" target='__blank'>
         <div className=" w-full sm:w-auto bg-slate-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-slate-900 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
           <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
           <div className="text-left rtl:text-right">
             <div className="mb-1 text-xs">Download on the</div>
             <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
           </div></div>
         </Link>
         <div>
       <Link href="https://play.google.com/store/apps/details?id=co.lily.nydae" target='__blank'>
         <div className="w-full sm:w-auto bg-slate-900 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-slate-900 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
           <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
           <div className="text-left rtl:text-right">
             <div className="mb-1 text-xs">Get in on</div>
             <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
           </div>
         </div>
       </Link>
       </div>
       
     </div> 
    </div>
    </div>
   
      
   
  </section>
 </>
   
  )
}

export default mockup

