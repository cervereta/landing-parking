import type { Metadata } from "next";
import { MainLayout } from '@/components/layout/MainLayout';
import { Outfit } from 'next/font/google';
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "ParkCar - Aparca sin estrés",
  description: "Encuentra y reserva parking en segundos. Ahorra tiempo, evita multas y paga de forma segura desde tu móvil.",
  keywords: "parking, aparcamiento, reserva, app, móvil, sin estrés",
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "ParkCar - Aparca sin estrés",
    description: "Encuentra y reserva parking en segundos",
    siteName: "ParkCar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${outfit.className} antialiased min-h-screen bg-background text-slate-900`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
