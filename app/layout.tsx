import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tu Abuelito Te La Presta - Préstamos Rápidos para Electrodomésticos",
  description: "Consigue esa televisión, computadora o electrodoméstico que tanto necesitas. Préstamos rápidos, fáciles y confiables. Aprobación en minutos.",
  keywords: "préstamos, electrodomésticos, televisiones, computadoras, financiamiento, crédito rápido, México",
  authors: [{ name: "Tu Abuelito Te La Presta" }],
  creator: "Tu Abuelito Te La Presta",
  publisher: "Tu Abuelito Te La Presta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tuabuelitotelapresta.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tu Abuelito Te La Presta - Préstamos Rápidos para Electrodomésticos",
    description: "Consigue esa televisión, computadora o electrodoméstico que tanto necesitas. Préstamos rápidos, fáciles y confiables.",
    url: "https://tuabuelitotelapresta.com",
    siteName: "Tu Abuelito Te La Presta",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Tu Abuelito Te La Presta - Préstamos Rápidos",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Abuelito Te La Presta - Préstamos Rápidos para Electrodomésticos",
    description: "Consigue esa televisión, computadora o electrodoméstico que tanto necesitas. Préstamos rápidos, fáciles y confiables.",
    images: ["/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-de-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#d97706" />
        <meta name="msapplication-TileColor" content="#d97706" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
