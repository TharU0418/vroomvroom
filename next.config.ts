import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // 👈 Add the domain of your external image source
  },
};

export default nextConfig;
