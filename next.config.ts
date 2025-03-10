import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.dummyjson.com"], // Allow external images from this domain
  },
};

export default nextConfig;
