// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude test files from being treated as pages during production builds.
  pageExtensions: ["ts", "tsx", "js", "jsx"].flatMap((ext) =>
    process.env.NODE_ENV === "development"
      ? [`test.${ext}`, `spec.${ext}`, ext]
      : [ext],
  ),
  reactStrictMode: true,
  swcMinify: true,

  eslint: { ignoreDuringBuilds: false },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

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
