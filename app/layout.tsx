import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local'

const myFont = localFont({  
  src: [
  {
    path: '../fonts/CircularStd-Book.ttf',
  }
  ] })



export const metadata: Metadata = {
  title: 'Chemisphere. Chemistry made easy!'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <head>
     <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
     <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>

<title>Chemisphere. Chemistry made easy!</title>
<meta name="description" content=

"Looking to excel in JEE Main and Advanced, NEET, MHCET, or Class 12th boards? Look no further! Chandan Biswas, CEO of Chemisphere and a renowned Chemistry professor, offers personalized classes and mentorship to help you achieve your goals. With over a decade of experience and having mentored thousands of successful students, Chandan provides comprehensive resources, including video lectures, class notes, and regular tests, tailored to your needs. His expertise and guidance will not only make learning Chemistry enjoyable but also significantly boost your marks and ranking. Sign up for a free demo class now and embark on a journey to master Chemistry with ease!"/>

<meta property="og:url" content="https://www.chemisphere.in" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Chemisphere. Chemistry made easy!" />
<meta property="og:description" content="Premium Chemistry Lectures by Chandan Biswas" />
<meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/3116a3d5-10eb-4ba3-b710-032c605566aa.png?token=teQQGETxXm9ueSefetJlfGHTNA7ioB15ziWYrV0goGs&height=630&width=1200&expires=33241761321" />

     <link rel="icon" href='/favicon.ico' sizes="any" />

     </head>
      <body className={myFont.className}>{children}<Analytics /><SpeedInsights/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

     
      </body>
    </html>
  )
}






