import type { Metadata } from "next";
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Clock } from 'lucide-react';
import { Outfit } from 'next/font/google';
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "ParkCar - Aparca sin estrés",
  description: "Encuentra y reserva parking en segundos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.className} antialiased min-h-screen bg-background text-slate-900`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F0F9FF]/80 backdrop-blur-md border-b border-sky-100">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-200 group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-sky-900 tracking-tight">ParkCar</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">
                Características
              </Link>
              <Link href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">
                Cómo funciona
              </Link>
              <Link href="#testimonials" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">
                Testimonios
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hidden sm:inline-flex text-slate-600 hover:text-sky-700 hover:bg-sky-50 font-medium">
                Iniciar Sesión
              </Button>
              <Button size="sm" className="bg-sky-900 text-white hover:bg-sky-800 rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                Regístrate
              </Button>
            </div>
          </div>
        </header>

        <main className="pt-16">{children}</main>

        <footer className="bg-white border-t border-sky-100 py-16 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="font-bold text-sky-900 mb-6 text-lg">Producto</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li><Link href="#" className="hover:text-sky-600 transition-colors">Buscar Parking</Link></li>
                  <li><Link href="#" className="hover:text-sky-600 transition-colors">Precios</Link></li>
                  <li><Link href="#" className="hover:text-sky-600 transition-colors">App Móvil</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sky-900 mb-6 text-lg">Empresa</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li><Link href="#" className="hover:text-sky-600 transition-colors">Sobre Nosotros</Link></li>
                  <li><Link href="#" className="hover:text-sky-600 transition-colors">Empleo</Link></li>
                  <li><Link href="#" className="hover:text-sky-600 transition-colors">Prensa</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sky-900 mb-6 text-lg">Ayuda</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li><Link href="#" className="hover:text-sky-600 transition-colors">Centro de Ayuda</Link></li>
                  <li><Link href="#" className="hover:text-sky-600 transition-colors">Contacto</Link></li>
                  <li><Link href="#" className="hover:text-sky-600 transition-colors">Términos</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sky-900 mb-6 text-lg">Síguenos</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="hover:text-sky-600 transition-colors cursor-pointer">Twitter</li>
                  <li className="hover:text-sky-600 transition-colors cursor-pointer">Instagram</li>
                  <li className="hover:text-sky-600 transition-colors cursor-pointer">LinkedIn</li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-sky-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
              <p>© {new Date().getFullYear()} ParkCar. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Sistemas operacionales</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
