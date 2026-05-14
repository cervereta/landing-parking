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
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_repeat(4,0.7fr)]">
          <div>
            <h2 className="text-3xl text-[#4A4F57] sm:text-4xl">ParkCar</h2>
            <p className="mt-5 max-w-sm font-body text-base leading-7 text-[--mist]">
              Una forma mas inteligente, segura y rentable de conectar plazas privadas con quienes las necesitan.
            </p>

            <div className="mt-6 space-y-3 font-body text-sm text-[--mist]">
              <a href="mailto:contacto@parkcar.es" className="flex items-center gap-3 transition-colors hover:text-[--fog]">
                <Mail className="h-4 w-4 text-[--electric]" />
                contacto@parkcar.es
              </a>
              <a href="tel:+34900123456" className="flex items-center gap-3 transition-colors hover:text-[--fog]">
                <Phone className="h-4 w-4 text-[--electric]" />
                900 123 456
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[--hairline] bg-white/5 text-[--mist] transition-colors hover:text-[--fog]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm uppercase tracking-[0.24em] text-[--electric]">{group}</h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="group inline-flex items-center gap-1 font-body text-sm text-[--mist] transition-colors hover:text-[--fog]">
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t"
          style={{ borderColor: "var(--hairline)" }}
        />

        <div className="mt-6 flex flex-col gap-3 font-body text-sm text-[--mist] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} ParkCar. Todos los derechos reservados.</p>
          <p>Hecho para una movilidad urbana mas clara y rentable.</p>
        </div>
      </div>
    </footer>
  );
}
