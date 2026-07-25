import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prioriser AVIF et WebP pour des chargements rapides
    formats: ['image/avif', 'image/webp'],
    // Tailles d'écran pour le responsive
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;
