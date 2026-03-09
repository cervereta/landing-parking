"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, CarFront, CheckCircle2, CircleDollarSign, MapPinned, ShieldCheck } from "lucide-react";

const trustItems = [
  "Publicacion gratuita",
  "Contrato legal incluido",
  "Perfiles verificados",
];

const marketStats = [
  { label: "Ingreso mensual estimado por plaza", value: "+180 EUR" },
  { label: "Ahorro frente a parking tradicional", value: "Hasta 50%" },
];

export function Hero() {
  return (
    <section className="section-shell px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_right,rgba(35,68,60,0.16),transparent_32%),radial-gradient(circle_at_left,rgba(214,169,40,0.18),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(252,251,248,0.92))]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="eyebrow mb-6">
            <MapPinned className="h-4 w-4 text-safety" />
            Parking privado para ganar mas o pagar menos
          </span>

          <h1 className="max-w-3xl text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            Gana dinero con tu plaza.
            <span className="mt-2 block text-concrete">Encuentra parking privado sin pagar de mas.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel sm:text-xl">
            Publica una plaza que no usas o reserva una cerca de ti. ParkCar conecta propietarios y conductores con contrato legal, perfiles verificados y un proceso claro de principio a fin.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="https://parking.cerveretadev.es" className="premium-btn group">
              Quiero publicar mi plaza
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="https://parking.cerveretadev.es" className="premium-btn-secondary">
              Buscar parking
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <div key={item} className="metric-chip">
                <CheckCircle2 className="h-4 w-4 text-petrol" />
                <span className="font-body text-sm font-medium text-ink/80">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-safety/18 blur-3xl lg:block" />
          <div className="absolute -right-6 bottom-6 hidden h-36 w-36 rounded-full bg-petrol/18 blur-3xl lg:block" />

          <div className="premium-card relative overflow-hidden p-5 sm:p-6 lg:p-7">
            <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(214,169,40,0.12),transparent)]" />

            <div className="relative rounded-[28px] border border-ink/10 bg-concrete p-6 text-pure shadow-[0_30px_90px_-42px_rgba(23,23,23,0.7)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="font-body text-sm font-medium uppercase tracking-[0.24em] text-pure/50">
                    Vista de oportunidad
                  </p>
                  <h2 className="mt-3 max-w-sm text-3xl leading-tight text-pure">
                    Convierte una plaza vacia en ingresos o aparca mejor cada semana.
                  </h2>
                </div>
                <span className="rounded-full border border-pure/10 bg-pure/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-safety-light">
                  Oportunidad activa
                </span>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[24px] border border-pure/10 bg-pure/5 p-5">
                  <div className="flex items-center justify-between text-pure/60">
                    <span className="font-body text-sm">Centro de ciudad</span>
                    <MapPinned className="h-4 w-4 text-safety-light" />
                  </div>

                  <div className="mt-6 rounded-[22px] border border-pure/10 bg-[linear-gradient(180deg,rgba(252,251,248,0.08),rgba(252,251,248,0.02))] p-4">
                    <div className="grid grid-cols-3 gap-3">
                      {[0, 1, 2, 3, 4, 5].map((slot) => (
                        <div
                          key={slot}
                          className={`flex h-20 items-end justify-center rounded-[18px] border border-pure/10 ${slot === 1 ? "bg-safety/20" : "bg-pure/5"}`}
                        >
                          <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-2xl ${slot === 1 ? "bg-safety text-ink" : "bg-pure/10 text-pure/70"}`}>
                            <CarFront className="h-5 w-5" />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-[18px] border border-safety/20 bg-safety/10 px-4 py-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-safety-light/75">Plaza destacada</p>
                        <p className="mt-1 font-body text-base font-semibold text-pure">Garaje privado listo para alquilar</p>
                      </div>
                      <Building2 className="h-5 w-5 text-safety-light" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {marketStats.map((item) => (
                    <div key={item.label} className="rounded-[22px] border border-pure/10 bg-pure/5 p-5">
                      <p className="font-body text-sm text-pure/60">{item.label}</p>
                      <p className="mt-4 text-3xl text-pure">{item.value}</p>
                    </div>
                  ))}

                    <div className="rounded-[22px] border border-petrol/20 bg-petrol/80 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pure/10">
                        <ShieldCheck className="h-5 w-5 text-safety-light" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-pure">Confianza integrada</p>
                        <p className="mt-1 font-body text-sm text-pure/70">Contrato y verificacion para alquilar con menos riesgo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { icon: CircleDollarSign, label: "Mas rentabilidad" },
                { icon: CarFront, label: "Menos vueltas para aparcar" },
                { icon: ShieldCheck, label: "Mas confianza al cerrar" },
              ].map((item) => (
                <div key={item.label} className="rounded-[22px] border border-ink/10 bg-pure/70 px-4 py-4 backdrop-blur">
                  <item.icon className="h-5 w-5 text-safety-dark" />
                  <p className="mt-3 font-body text-sm font-semibold text-ink">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
