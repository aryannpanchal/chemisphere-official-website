import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local'

const myFont = localFont({  
  src: [
  {
    path: '../fonts/CircularStd-Black.ttf',
  }
  ] })



export const metadata: Metadata = {
  title: 'Chemisphere. Chemistry made easy!',
  description: 'Premium Chemistry Lectures by Chandan Biswas',
 
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
<meta name="description" content="Premium Chemistry Lectures by Chandan Biswas" />

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






