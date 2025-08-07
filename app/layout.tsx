'use client';

import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Script from 'next/script';
import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Chemisphere",
  description: "Looking to excel in JEE Main and Advanced, NEET, MHCET, or Class 12th boards? Look no further! Chandan Biswas, CEO of Chemisphere and a renowned Chemistry professor, offers personalized classes and mentorship to help you achieve your goals.",
  openGraph: {
    title: "Chemisphere",
    description: "Looking to excel in JEE Main and Advanced, NEET, MHCET, or Class 12th boards? Look no further! Chandan Biswas, CEO of Chemisphere and a renowned Chemistry professor, offers personalized classes and mentorship to help you achieve your goals.",
    url: "https://www.chemisphere.in/",
    siteName: "Chemisphere.in",
    images: [
      {
        url: "https://www.chemisphere.in/meta.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Type declarations
declare global {
  interface Window {
    fbq: any;
    _fbq?: any;
  }
}

// Facebook Pixel Init
function FacebookPixel() {
  useEffect(() => {
    if (!window.fbq) {
      window.fbq = function () {
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments)
          : window.fbq.queue.push(arguments);
      };
      window._fbq = window.fbq;
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];

      window.fbq('init', '1440575971141238');
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1440575971141238&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}

// Google Tag Manager Script
function GoogleTagManager() {
  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NC6HMZLP');`,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="facebook-domain-verification" content="1tc0meng0ifa67yzp1whrppkee1p44" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <GoogleTagManager />
        </head>
        <body className={inter.className}>
          {/* GTM Noscript */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NC6HMZLP"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>

          {/* Facebook Pixel */}
          <FacebookPixel />

          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
