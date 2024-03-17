/**
 */
const nextConfig = {  
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.sanity.io",
          },
        ],
      },
      experimental: {
        taint: true,
      },
}

module.exports = nextConfig


// next.config.js
