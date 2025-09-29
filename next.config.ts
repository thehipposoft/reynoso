import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'propiedades.reynosobienesraices.com.ar',
        port: '', // vacío si no usás un puerto custom
        pathname: '/**', // permite cualquier ruta
      },
    ],
  },
};

export default nextConfig;
