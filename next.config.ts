import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
    images: {
    // Next 16 solo permite los valores de "quality" declarados acá (default: [75]).
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'propiedades.reynosobienesraices.com.ar',
        port: '', // vacío si no usás un puerto custom
        pathname: '/**', // permite cualquier ruta
      },
    ],
  },
  async redirects() {
    return [
      // Slug anterior (nombre mal escrito); puede estar grabado en tarjetas NFC/QR ya impresas.
      {
        source: '/miembros/denise-de-oliveira',
        destination: '/miembros/denise-de-olivera',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
