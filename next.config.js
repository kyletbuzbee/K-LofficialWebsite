/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  eslint: { ignoreDuringBuilds: false },

  images: {
    // Allow external images from placehold.co
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],

    // If you’re doing a static export (next export),
    // disable built-in optimization so local images won’t throw null
    unoptimized: process.env.NEXT_EXPORT === "true",
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  env: {
    SITE_URL: process.env.SITE_URL || "https://www.klrecycling.com",
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
