import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"], // Add allowed domains here
  },
};

export default nextConfig;
