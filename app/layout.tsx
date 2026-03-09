import type { Metadata } from "next";
import { Manrope, Sora } from 'next/font/google';
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PARKCAR - Gana dinero con tu plaza o aparca por menos",
  description: "Publica tu plaza gratis o encuentra parking privado a mejor precio. Contrato legal, perfiles verificados y disponible en toda Espana.",
  keywords: "parking, aparcamiento, alquiler parking, plaza parking, parking privado, alquiler garaje, ParkCar, España",
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "PARKCAR - Gana dinero con tu plaza o aparca por menos",
    description: "Publica tu plaza gratis o encuentra parking privado a mejor precio con contrato legal y perfiles verificados.",
    siteName: "PARKCAR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${manrope.variable} font-body antialiased min-h-screen bg-ivory text-ink`}>
        {children}
      </body>
    </html>
  );
}
