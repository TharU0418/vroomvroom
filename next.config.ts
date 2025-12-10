import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'vroomvroom-rents3.s3.amazonaws.com', // <-- Add this line
      'avatar.iran.liara.run',
      'drive.google.com',
      "promova.com",
    ],
  },
};

export default nextConfig;
