"use client";

import { Mail, Phone, Instagram, Twitter, Facebook, Linkedin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  producto: [
    { label: "Para Propietarios", href: "#" },
    { label: "Para Usuarios", href: "#" },
    { label: "Cómo funciona", href: "#" },
    { label: "Precios", href: "#" },
    { label: "Seguridad", href: "#" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Prensa", href: "#" },
    { label: "Trabaja con nosotros", href: "#" },
  ],
  soporte: [
    { label: "Centro de ayuda", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Estado del servicio", href: "#" },
  ],
  legal: [
    { label: "Términos de uso", href: "#" },
    { label: "Privacidad", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Aviso legal", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-pure">
      {/* Top Pattern */}
      <div className="h-4 pattern-diagonal" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="highway-sign !py-3 !px-5 !text-base">
                <span className="text-safety">PARK</span>
                <span className="text-pure">CAR</span>
              </div>
            </div>
            
            <p className="font-body text-concrete mb-6 max-w-xs leading-relaxed">
              La forma más fácil y segura de alquilar plazas de parking privadas en España.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:contacto@parkcar.es" className="flex items-center gap-3 font-body text-sm hover:text-safety transition-colors group">
                <div className="w-8 h-8 bg-concrete border-[2px] border-pure flex items-center justify-center group-hover:bg-safety group-hover:border-safety transition-colors">
                  <Mail className="w-4 h-4" strokeWidth={2.5} />
                </div>
                contacto@parkcar.es
              </a>
              <a href="tel:+34900123456" className="flex items-center gap-3 font-body text-sm hover:text-safety transition-colors group">
                <div className="w-8 h-8 bg-concrete border-[2px] border-pure flex items-center justify-center group-hover:bg-safety group-hover:border-safety transition-colors">
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                </div>
                900 123 456
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-concrete border-[3px] border-pure flex items-center justify-center hover:bg-safety hover:border-safety transition-all"
                  style={{ boxShadow: '2px 2px 0px 0px #FFFFFF' }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-4 text-safety">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-concrete hover:text-pure hover:underline transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-4 text-safety">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-concrete hover:text-pure hover:underline transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-4 text-safety">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-concrete hover:text-pure hover:underline transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-sm uppercase tracking-wider mb-4 text-safety">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-body text-sm text-concrete hover:text-pure hover:underline transition-colors flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-[3px] border-concrete">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-concrete">
              © {new Date().getFullYear()} PARKCAR. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-safety" />
              <span className="font-display font-bold text-xs uppercase tracking-wider text-concrete">
                Hecho en España
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
