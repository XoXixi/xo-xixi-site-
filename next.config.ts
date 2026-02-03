import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Libera imagens do Blog
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Libera imagens de exemplo (Hero)
      },
    ],
  },
};

export default nextConfig;