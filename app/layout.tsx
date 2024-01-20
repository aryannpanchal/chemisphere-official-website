import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "@next/font/google"
import { Analytics } from '@vercel/analytics/react';
 import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({
  subsets: ['latin'],
  weight: ['400','700'],
  
})

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
      
<title>Chemisphere. Chemistry made easy!</title>
<meta name="description" content="Premium Chemistry Lectures by Chandan Biswas" />

<meta property="og:url" content="https://www.chemisphere.in" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Chemisphere. Chemistry made easy!" />
<meta property="og:description" content="Premium Chemistry Lectures by Chandan Biswas" />
<meta property="og:image" content="/meta.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="chemisphere.in" />
<meta property="twitter:url" content="https://www.chemisphere.in" />
<meta name="twitter:title" content="Chemisphere. Chemistry made easy!" />
<meta name="twitter:description" content="Premium Chemistry Lectures by Chandan Biswas" />
<meta name="twitter:image" content="/meta.png" />

     <link rel="icon" href='/favicon.ico' sizes="any" />
     </head>
      <body className={inter.className}>{children}<Analytics /><SpeedInsights/></body>
    </html>
  )
}






