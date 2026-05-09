import "./globals.scss"
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Kadwa, Poppins } from 'next/font/google';
import SmoothScroll from "@/components/commons/SmoothScroll";
import Transitions from "@/components/commons/Transitions";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import OrganizationSchema from "@/components/SEO/OrganizationSchema";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200','300','400','500','600','700','800'],
  variable: '--font-jakarta',
});

const inter = Inter({
  subsets: ["latin"],
  weight: ['200','300','400','500','600','700','800'],
  variable: '--font-inter'

});

const kadwa = Kadwa({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-kadwa',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Reynoso Bienes Raíces | Desarrollos Inmobiliarios en Salta, Argentina",
  description: "Descubre los mejores desarrollos inmobiliarios en Salta. Bienes raíces de calidad, proyectos residenciales y comerciales. ¡Encuentra tu próximo hogar!",
  keywords: "bienes raíces Salta, desarrollos inmobiliarios, inmuebles Argentina, propiedades, viviendas",
  authors: [{ name: "Reynoso Bienes Raíces" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://reynosobienesraices.com.ar",
    siteName: "Reynoso Bienes Raíces",
    title: "Reynoso Bienes Raíces | Desarrollos Inmobiliarios en Salta",
    description: "Descubre los mejores desarrollos inmobiliarios en Salta. Bienes raíces de calidad, proyectos residenciales y comerciales.",
    images: [
      {
        url: "https://reynosobienesraices.com.ar/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reynoso Bienes Raíces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reynoso Bienes Raíces | Desarrollos Inmobiliarios en Salta",
    description: "Descubre los mejores desarrollos inmobiliarios en Salta",
    images: ["https://reynosobienesraices.com.ar/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://reynosobienesraices.com.ar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" >
      <head>
        <OrganizationSchema />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} ${kadwa.variable} ${poppins.variable}`}
      >
        <SmoothScroll>
          <Transitions />
          <GoogleAnalytics />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
