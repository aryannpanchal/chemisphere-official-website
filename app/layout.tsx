import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local'
import { Metadata } from "next";

const myFont = localFont({  
  src: [
  {
    path: '../fonts/CircularStd-Book.ttf',
  }
  ] })

  export const metadata: Metadata = {
    title: "Chemisphere.in",
    description: "Looking to excel in JEE Main and Advanced, NEET, MHCET, or Class 12th boards? Look no further! Chandan Biswas, CEO of Chemisphere and a renowned Chemistry professor, offers personalized classes and mentorship to help you achieve your goals. ",
    openGraph: {
      title: "Chemisphere.in",
      description: "Looking to excel in JEE Main and Advanced, NEET, MHCET, or Class 12th boards? Look no further! Chandan Biswas, CEO of Chemisphere and a renowned Chemistry professor, offers personalized classes and mentorship to help you achieve your goals. ",
      url: "https://www.chemisphere.in/", // Replace with your actual URL
      siteName: "Chemisphere.in",
      images: [
        {
          url: "/meta.png", // Path to your local image
          width: 1200,  // Adjust width as needed
          height: 630,  // Adjust height as needed
          type: "image/png", // Change to 'image/png'
        },
      ],
      type: "website",
    },
  };
  

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
     <link rel="icon" href='/favicon.ico' sizes="any" />
     </head>
      <body className={myFont.className}>{children}<Analytics /><SpeedInsights/>
      </body>
    </html>
    
  )
}






