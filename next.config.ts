import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilitar React Strict Mode para detecção de problemas
  reactStrictMode: true,

  // Otimizações de imagem
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "youtube.com",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
    ],
  },

  // Suporte a módulos
  swcMinify: true,

  // Habilitar Suspense e streaming
  experimental: {
    serverComponentsExternalPackages: ["sonner"],
  },
};

export default nextConfig;
