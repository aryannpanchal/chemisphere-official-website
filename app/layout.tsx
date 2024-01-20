import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "@next/font/google"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
})
interface Metadata extends NextMetadata {
  image?: string;
}


export const metadata: Metadata = {
  title: 'Chemisphere. Chemistry made easy!',
  description: 'Premium Chemistry Lectures by Chandan Biswas',
  // Add OG image URL based on your public folder structure
  image: '/meta.png',
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
        {/* Add Open Graph meta tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}



