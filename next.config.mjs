/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "cdn.sanity.io", // Sanity image CDN
    ],
  },

  experimental: {
    // App Router is already default in Next 15, but safe to keep modern features
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
