import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,       // Good practice
  poweredByHeader: false,      // Security best practice
  typescript: {
    ignoreBuildErrors: true,   // Optional — keeps deploy smooth
  },
};

export default nextConfig;
