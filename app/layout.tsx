import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from 'next/font/google';
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        <script>
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
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1440575971141238&ev=PageView&noscript=1"
/></noscript>
          <meta name="facebook-domain-verification" content="1tc0meng0ifa67yzp1whrppkee1p44" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={inter.className}>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
