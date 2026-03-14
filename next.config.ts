import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'export' to enable API routes for form handling
  // Vercel handles this automatically
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
