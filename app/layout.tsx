import type { Metadata } from "next";
import { Lexend_Mega, Space_Grotesk } from 'next/font/google';
import "./globals.css";

const lexendMega = Lexend_Mega({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PARKCAR - Alquiler de Plazas de Parking",
  description: "Gana dinero con tu plaza de parking o alquila al mejor precio. Contrato seguro entre particulares en toda España.",
  keywords: "parking, aparcamiento, alquiler parking, plaza parking, parking privado, alquiler garaje, ParkCar, España",
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "PARKCAR - Alquiler de Plazas de Parking",
    description: "Alquila plazas de parking privadas en España. Más barato que los parkings públicos, con contrato legal.",
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
      <body className={`${lexendMega.variable} ${spaceGrotesk.variable} font-body antialiased min-h-screen bg-asphalt text-ink`}>
        {children}
      </body>
    </html>
  );
}
