import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from 'next/font/google';
import { ClerkProvider } from "@clerk/nextjs";
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>Chemisphere</title>
          <meta name="description" content="Looking to excel in JEE Main and Advanced, NEET, MHCET, or Class 12th boards? Look no further! Chandan Biswas, CEO of Chemisphere and a renowned Chemistry professor, offers personalized classes and mentorship to help you achieve your goals." />
          <meta property="og:title" content="Chemisphere" />
          <meta property="og:description" content="Looking to excel in JEE Main and Advanced, NEET, MHCET, or Class 12th boards? Look no further! Chandan Biswas, CEO of Chemisphere and a renowned Chemistry professor, offers personalized classes and mentorship to help you achieve your goals." />
          <meta property="og:url" content="https://www.chemisphere.in/" />
          <meta property="og:site_name" content="Chemisphere.in" />
          <meta property="og:image" content="https://www.chemisphere.in/meta.png" />
          <meta name="robots" content="index, follow" />
          <meta name="facebook-domain-verification" content="1tc0meng0ifa67yzp1whrppkee1p44" />

          <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
          <link rel="icon" href="/favicon.ico" sizes="any" />

          {/* ✅ Google Tag Manager Script */}
          <Script id="gtm-head" strategy="beforeInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NC6HMZLP');
            `}
          </Script>

          {/* ✅ Facebook Pixel Script */}
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1440575971141238');
              fbq('track', 'PageView');
            `}
          </Script>
        </head>
        <body className={inter.className}>
          
          {/* ✅ Google Tag Manager (noscript) */}
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NC6HMZLP"
              height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>

          {/* ✅ Facebook Pixel (noscript) */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1440575971141238&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>

          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
