import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Plus_Jakarta_Sans } from "@next/font/google"



const inter = Plus_Jakarta_Sans({
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
<meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/3116a3d5-10eb-4ba3-b710-032c605566aa.png?token=teQQGETxXm9ueSefetJlfGHTNA7ioB15ziWYrV0goGs&height=630&width=1200&expires=33241761321" />

<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="chemisphere.in" />
<meta property="twitter:url" content="https://www.chemisphere.in" />
<meta name="twitter:title" content="Chemisphere. Chemistry made easy!" />
<meta name="twitter:description" content="Premium Chemistry Lectures by Chandan Biswas" />
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/3116a3d5-10eb-4ba3-b710-032c605566aa.png?token=teQQGETxXm9ueSefetJlfGHTNA7ioB15ziWYrV0goGs&height=630&width=1200&expires=33241761321" />

     <link rel="icon" href='/favicon.ico' sizes="any" />
     </head>
      <body className={inter.className}>{children}<Analytics /><SpeedInsights/></body>
    </html>
  )
}






