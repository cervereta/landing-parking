import Link from 'next/link';

interface FooterSection {
  title: string;
  links: { href: string; label: string }[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Producto',
    links: [
      { href: '#', label: 'Buscar Parking' },
      { href: '#', label: 'Precios' },
      { href: '#', label: 'App Móvil' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { href: '#', label: 'Sobre Nosotros' },
      { href: '#', label: 'Empleo' },
      { href: '#', label: 'Prensa' },
    ],
  },
  {
    title: 'Ayuda',
    links: [
      { href: '#', label: 'Centro de Ayuda' },
      { href: '#', label: 'Contacto' },
      { href: '#', label: 'Términos' },
    ],
  },
  {
    title: 'Síguenos',
    links: [
      { href: '#', label: 'Twitter' },
      { href: '#', label: 'Instagram' },
      { href: '#', label: 'LinkedIn' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-sky-100 py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-sky-900 mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-sky-600 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-sky-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} ParkCar. Todos los derechos reservados.</p>
          <div className="flex gap-6 items-center">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Sistemas operacionales</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
