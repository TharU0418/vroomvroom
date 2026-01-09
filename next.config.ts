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
      "t4.ftcdn.net",
      "dynamic-media-cdn.tripadvisor.com",
      "images.unsplash.com",
      "static.toiimg.com",
      "mediawtravel.s3.ap-southeast-1.amazonaws.com",
      "www.travelmapsrilanka.com",
      "encrypted-tbn0.gstatic.com",
      "www.barcelo.com"

    ],
  },
};

export default nextConfig;
