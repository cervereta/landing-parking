"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock3, MapPinned } from "lucide-react";

const microItems = ["Publicacion gratuita", "Alta en minutos", "Disponible en toda Espana"];

export function CTASection() {
  return (
    <section className="section-shell px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[36px] border border-ink/10 bg-[linear-gradient(135deg,#1f2f2a_0%,#2f343b_55%,#171717_100%)] px-6 py-10 text-pure shadow-[0_36px_110px_-48px_rgba(23,23,23,0.72)] sm:px-8 lg:px-12 lg:py-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <div>
              <span className="eyebrow !border-pure/10 !bg-pure/10 !text-pure/70">
                <MapPinned className="h-4 w-4 text-safety-light" />
                Empieza hoy en toda Espana
              </span>
              <h2 className="mt-6 max-w-3xl text-4xl text-pure sm:text-5xl lg:text-6xl">
                Saca rentabilidad a tu plaza o deja de pagar parking de mas.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-pure/70 sm:text-xl">
                Regstrate gratis, elige tu camino y empieza a usar una plataforma pensada para monetizar plazas privadas o encontrar una opcion mejor para aparcar.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="metric-chip !border-pure/10 !bg-pure/10 !text-pure">
                  <BadgeCheck className="h-4 w-4 text-safety-light" />
                  <span className="text-pure/80">Registro gratuito</span>
                </div>
                <div className="metric-chip !border-pure/10 !bg-pure/10 !text-pure">
                  <Clock3 className="h-4 w-4 text-safety-light" />
                  <span className="text-pure/80">Activacion en minutos</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:min-w-[18rem]">
              <a href="https://parking.cerveretadev.es" className="premium-btn justify-center">
                Publicar mi plaza
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="https://parking.cerveretadev.es" className="premium-btn-secondary justify-center !border-pure/10 !bg-pure/10 !text-pure">
                Buscar parking
              </a>
            </div>
          </div>

          <div className="mt-8 divider-road opacity-40" />

          <div className="mt-6 flex flex-wrap gap-3">
            {microItems.map((item) => (
              <span key={item} className="rounded-full border border-pure/10 px-4 py-2 font-body text-sm text-pure/70">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
