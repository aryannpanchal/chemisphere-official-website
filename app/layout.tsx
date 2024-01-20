import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter } from "@next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

// Extend the Metadata type to include the 'image' property
interface ExtendedMetadata extends Metadata {
  image?: string;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400','700'],
});

export const metadata: ExtendedMetadata = {
  title: 'Chemisphere. Chemistry made easy!',
  description: 'Premium Chemistry Lectures by Chandan Biswas',
  image: '/your-image.jpg', // Replace with the actual path to your image
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href='/favicon.ico' sizes="any" />

        {/* Open Graph tags for social media sharing */}
        <meta property="og:title" content={metadata.title ?? ''} />
        <meta property="og:description" content={metadata.description ?? ''} />
        {metadata.image && <meta property="og:image" content={`https://www.chemisphere.in${metadata.image}`} />}
        <meta property="og:url" content="https://www.chemisphere.in" />
        <meta property="og:type" content="website" />

        <style>{inter.styles}</style>
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

