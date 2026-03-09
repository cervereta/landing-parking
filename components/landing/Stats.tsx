'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, MapPin, ShieldCheck, Star } from 'lucide-react';

const items = [
  {
    icon: BadgeCheck,
    value: '+10.000',
    label: 'usuarios ya registrados',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'valoracion media de la experiencia',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'acuerdos con contrato legal',
  },
  {
    icon: MapPin,
    value: 'Toda',
    label: 'Espana disponible',
  },
];

export const Stats = () => {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-4 lg:p-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-[24px] border border-ink/10 bg-pure/75 px-5 py-5"
            >
              <item.icon className="h-5 w-5 text-petrol" />
              <p className="mt-4 text-2xl text-ink">{item.value}</p>
              <p className="mt-2 font-body text-sm text-steel">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
