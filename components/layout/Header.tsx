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
  { href: '#how-it-works', label: 'Como funciona' },
  { href: '#trust', label: 'Seguridad' },
  { href: '#owners', label: 'Propietarios' },
  { href: '#drivers', label: 'Conductores' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="glass-panel mx-auto max-w-7xl px-4 py-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center group" aria-label="Ir al inicio de ParkCar">
            <div className="relative h-16 w-[172px] md:h-20 md:w-[216px]">
              <Image
                src="/images/logo4.png"
                alt="PARKCAR"
                fill
                sizes="(min-width: 768px) 216px, 172px"
                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 font-body text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://parking.cerveretadev.es"
              className="rounded-full px-4 py-2 font-body text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              Entrar
            </a>
            <a href="https://parking.cerveretadev.es" className="premium-btn">
              Empieza gratis
            </a>
          </div>

          <button
            type="button"
            className="premium-btn-secondary !px-4 !py-3 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 border-t border-ink/10 pt-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl border border-ink/10 bg-pure/70 px-4 py-3 font-body text-sm font-medium text-ink/80"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <a
                href="https://parking.cerveretadev.es"
                className="premium-btn-secondary justify-center"
              >
                Entrar
              </a>
              <a href="https://parking.cerveretadev.es" className="premium-btn justify-center">
                Empieza gratis
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
