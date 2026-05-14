"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock3, MapPinned } from "lucide-react";

const microItems = ["Publicacion gratuita", "Alta en minutos", "Disponible en toda Espana"];

function Particles() {
  const dots = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    x: 20 + Math.random() * 60,
    y: 20 + Math.random() * 60,
    size: 3 + Math.random() * 3,
    duration: 5 + Math.random() * 5,
    delay: Math.random() * 3,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full bg-[--electric]/40"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
          }}
          animate={{
            x: [0, 20, -15, 10, 0],
            y: [0, -15, 10, -20, 0],
            opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="section-shell px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-8 lg:px-12 lg:py-12"
          style={{
            background: "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 60%), var(--asphalt)",
          }}
        >
          <Particles />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <div>
              <span className="eyebrow !border-[--hairline] !bg-white/5 !text-[--mist]">
                <MapPinned className="h-4 w-4 text-[--electric]" />
                Empieza hoy en toda Espana
              </span>
              <h2 className="mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-[--electric] to-[--plasma] bg-clip-text text-transparent">
                  Saca rentabilidad a tu plaza o deja de pagar parking de mas.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[--mist] sm:text-xl">
                Regstrate gratis, elige tu camino y empieza a usar una plataforma pensada para monetizar plazas privadas o encontrar una opcion mejor para aparcar.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[--hairline] bg-white/5 px-4 py-2 text-sm text-[--fog] backdrop-blur">
                  <BadgeCheck className="h-4 w-4 text-[--electric]" />
                  <span className="text-[--fog]/80">Registro gratuito</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[--hairline] bg-white/5 px-4 py-2 text-sm text-[--fog] backdrop-blur">
                  <Clock3 className="h-4 w-4 text-[--electric]" />
                  <span className="text-[--fog]/80">Activacion en minutos</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-[18rem]">
              <a
                href="https://parking.cerveretadev.es"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-body text-sm font-semibold text-white"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[--electric] to-[--plasma] opacity-90" />
                <span className="relative z-10 flex items-center gap-2">
                  Publicar mi plaza
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
              <a
                href="https://parking.cerveretadev.es"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-body text-sm font-semibold text-[--fog] backdrop-blur transition-all hover:bg-white/10"
              >
                Buscar parking
              </a>
            </div>
          </div>

          <div className="relative z-10 mt-8 h-px w-full"
            style={{ background: "var(--hairline)" }}
          />

          <div className="relative z-10 mt-6 flex flex-wrap gap-3">
            {microItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[--hairline] bg-white/5 px-4 py-2 font-body text-sm text-[--mist]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
