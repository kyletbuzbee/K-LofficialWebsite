// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable SWC minifier for faster builds
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["maps.googleapis.com"], // Add domains for external images
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
};

module.exports = nextConfig;
