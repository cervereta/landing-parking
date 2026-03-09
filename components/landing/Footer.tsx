"use client";

import { ArrowUpRight, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const footerLinks = {
  producto: [
    { label: "Para propietarios", href: "#owners" },
    { label: "Para conductores", href: "#drivers" },
    { label: "Como funciona", href: "#how-it-works" },
    { label: "Seguridad", href: "#trust" },
  ],
  ayuda: [
    { label: "Centro de ayuda", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Prensa", href: "#" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Terminos", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-10">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-ink/10 bg-concrete px-6 py-8 text-pure shadow-[0_30px_90px_-42px_rgba(23,23,23,0.68)] sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_repeat(4,0.7fr)]">
          <div>
            <h2 className="text-3xl text-pure sm:text-4xl">ParkCar</h2>
            <p className="mt-5 max-w-sm font-body text-base leading-7 text-pure/70">
              Una forma mas inteligente, segura y rentable de conectar plazas privadas con quienes las necesitan.
            </p>

            <div className="mt-6 space-y-3 font-body text-sm text-pure/70">
              <a href="mailto:contacto@parkcar.es" className="flex items-center gap-3 transition-colors hover:text-pure">
                <Mail className="h-4 w-4 text-safety-light" />
                contacto@parkcar.es
              </a>
              <a href="tel:+34900123456" className="flex items-center gap-3 transition-colors hover:text-pure">
                <Phone className="h-4 w-4 text-safety-light" />
                900 123 456
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-pure/10 bg-pure/10 text-pure/80 transition-colors hover:text-pure"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm uppercase tracking-[0.24em] text-safety-light">{group}</h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="group inline-flex items-center gap-1 font-body text-sm text-pure/70 transition-colors hover:text-pure">
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 divider-road opacity-30" />

        <div className="mt-6 flex flex-col gap-3 font-body text-sm text-pure/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ParkCar. Todos los derechos reservados.</p>
          <p>Hecho para una movilidad urbana mas clara y rentable.</p>
        </div>
      </div>
    </footer>
  );
}
