import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  
  // Performance optimizations
  compress: true,
  
  // TypeScript configuration
  typescript: {
    // Set to true to allow production builds even with TypeScript errors
    // Set to false for stricter builds
    ignoreBuildErrors: false,
  },
  
  // Enable experimental features for better performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@react-three/fiber',
      '@react-three/drei',
    ],
  },
};

export default nextConfig;
