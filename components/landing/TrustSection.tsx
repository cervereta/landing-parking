"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FileText, Headset, ShieldCheck, Star } from "lucide-react";

const pillars = [
  {
    icon: FileText,
    title: "Contrato legal automatizado",
    description: "El acuerdo queda mejor definido desde el inicio para que propietario y conductor cierren con mas claridad.",
  },
  {
    icon: BadgeCheck,
    title: "Perfiles y actividad verificados",
    description: "Mas trazabilidad, mas confianza y menos incertidumbre antes de aceptar una reserva o un alquiler.",
  },
  {
    icon: ShieldCheck,
    title: "Proceso mas seguro",
    description: "Cada paso esta pensado para reducir dudas, mejorar la transparencia y facilitar la decision.",
  },
  {
    icon: Headset,
    title: "Soporte y reputacion",
    description: "Resenas, historial y acompanamiento para que la confianza no dependa solo de una primera impresion.",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-concrete px-6 py-8 text-pure sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <span className="eyebrow !border-pure/10 !bg-pure/10 !text-pure/70">Confianza real</span>
            <h2 className="mt-6 text-4xl text-pure sm:text-5xl lg:text-6xl">
              Cierra acuerdos con mas confianza desde el primer paso.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-pure/70 sm:text-xl">
              Cuando hay dinero, acceso a una plaza y trato entre particulares, la confianza importa. Por eso ParkCar pone claridad, contrato y verificacion en el centro de la experiencia.
            </p>

            <div className="mt-8 premium-card-dark border-pure/10 bg-pure/5 p-6">
              <div className="flex items-center gap-1 text-safety-light">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-2xl text-pure">Mas seguridad para monetizar o reservar sin improvisar.</p>
              <p className="mt-3 font-body text-sm leading-7 text-pure/60">
                La plataforma combina contrato, verificacion y reputacion para que cada operacion se sienta mas seria, mas clara y mas confiable.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-[28px] border border-pure/10 bg-pure/5 p-6 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-safety/20 text-safety-light">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 text-2xl text-pure">{item.title}</h3>
                <p className="mt-4 font-body text-base leading-7 text-pure/70">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
