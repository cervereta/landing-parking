'use client';

import { motion, useSpring, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
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

function AnimatedValue({ value }: { value: string }) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const numeric = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  const springValue = useSpring(0, {
    stiffness: 60,
    damping: 20,
  });

  useMotionValueEvent(springValue, "change", (latest) => {
    setDisplayNumber(Math.round(latest));
  });

  // Trigger spring to target when component mounts
  const triggered = useRef(false);
  if (!triggered.current) {
    triggered.current = true;
    setTimeout(() => springValue.set(numeric), 100);
  }

  if (isNaN(numeric)) {
    return <span className="text-2xl text-[--fog] sm:text-3xl">{value}</span>;
  }

  return (
    <span className="text-2xl text-[--fog] sm:text-3xl">
      {displayNumber.toLocaleString()}{suffix}
    </span>
  );
}

export const Stats = () => {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel-dark grid gap-3 p-3 sm:grid-cols-2 lg:grid-cols-4 lg:p-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-[24px] border border-[--hairline] bg-[--deep-pit] px-5 py-5"
            >
              <item.icon className="h-5 w-5 text-[--electric]" />
              <AnimatedValue value={item.value} />
              <p className="mt-2 font-body text-xs uppercase tracking-widest text-[--mist]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
