'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#features', label: 'Características' },
  { href: '#how-it-works', label: 'Cómo funciona' },
  { href: '#trust', label: 'Seguridad' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="brutal-card bg-pure max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-3">
          {/* Logo - Image */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <div className="relative h-16 w-[172px] md:h-20 md:w-[216px]">
              <Image
                src="/images/logo4.png"
                alt="PARKCAR"
                fill
                sizes="(min-width: 768px) 216px, 172px"
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-display font-bold text-sm uppercase tracking-wide hover:bg-safety border-[3px] border-transparent hover:border-ink transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a href="https://parking.cerveretadev.es" className="hidden sm:block font-display font-bold text-xs uppercase tracking-wider hover:text-safety-dark transition-colors">
              Entrar
            </a>
            <a href="https://parking.cerveretadev.es" className="brutal-btn !py-2 !px-4 !text-sm">
              Registro
            </a>
            
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden brutal-btn !p-2 !bg-pure"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" strokeWidth={3} /> : <Menu className="w-5 h-5" strokeWidth={3} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t-[3px] border-ink">
            <nav className="flex flex-col p-4 gap-2 bg-concrete">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 font-display font-bold text-sm uppercase tracking-wide bg-pure border-[3px] border-ink hover:bg-safety transition-all"
                  style={{ boxShadow: '3px 3px 0px 0px #0A0A0A' }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t-[3px] border-ink mt-2 pt-4 flex flex-col gap-2">
                <a href="https://parking.cerveretadev.es" className="w-full brutal-btn !bg-pure !text-ink text-center">
                  Iniciar Sesión
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
