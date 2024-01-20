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
     <link rel="icon" href='/favicon.ico' sizes="any" />
     </head>
      <body className={inter.className}>{children}<Analytics /><SpeedInsights/></body>
    </html>
  )
}


