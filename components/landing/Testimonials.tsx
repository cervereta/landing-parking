'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Laura M.',
    role: 'Propietaria en Valencia',
    quote: 'Tenia una plaza parada y ahora me deja un ingreso extra cada mes sin complicarme la vida.',
  },
  {
    name: 'David R.',
    role: 'Conductor diario en Madrid',
    quote: 'He dejado de perder tiempo dando vueltas y ahora aparco cerca por bastante menos.',
  },
  {
    name: 'Marta C.',
    role: 'Usuario mensual en Barcelona',
    quote: 'Lo que mas valoro es saber cuanto pago, donde aparco y que todo queda mucho mas claro.',
  },
];

export const Testimonials = () => {
  return (
    <section className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-copy text-center"
        >
          <span className="section-marker">Prueba social</span>
          <h2 className="mt-6 text-4xl text-ink sm:text-5xl lg:text-6xl">
            Cuando el ahorro y la comodidad se notan, se nota tambien en la opinion.
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel sm:text-xl">
            Propietarios y conductores ya usan ParkCar para rentabilizar plazas, ahorrar tiempo y reducir lo que pagan por aparcar.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="premium-card p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-safety-dark">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-safety/40" />
              </div>

              <p className="mt-8 text-2xl leading-9 text-ink">&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-petrol text-sm font-semibold text-pure">
                  {testimonial.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="font-body text-base font-semibold text-ink">{testimonial.name}</p>
                  <p className="font-body text-sm text-steel">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
