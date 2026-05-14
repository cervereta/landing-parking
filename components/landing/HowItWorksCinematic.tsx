"use client";

import { motion } from "framer-motion";
import { FileCheck2, Search, UserRoundPlus, Wallet } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserRoundPlus,
    title: "Crea tu cuenta",
    description: "Registrate en pocos minutos y elige si quieres publicar una plaza o empezar a buscar parking.",
  },
  {
    number: "02",
    icon: Search,
    title: "Publica o busca",
    description: "Activa tu anuncio o compara plazas segun ubicacion, disponibilidad, horario y precio.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Confirma con seguridad",
    description: "Cierra el acuerdo con contrato legal y un proceso pensado para que todo quede mas claro.",
  },
  {
    number: "04",
    icon: Wallet,
    title: "Empieza a usar o a cobrar",
    description: "Empieza a generar ingresos con tu plaza o aparca con mas tranquilidad desde el primer dia.",
  },
];

export function HowItWorksCinematic() {
  return (
    <section id="how-it-works" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-copy text-center"
        >
          <span className="section-marker !border-[--hairline] !bg-[--deep-pit]/80 !text-[--mist]">
            Como funciona
          </span>
          <h2 className="mt-6 text-4xl text-[#4A4F57] sm:text-5xl lg:text-6xl">
            Empieza en minutos y sin complicaciones.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[--mist] sm:text-xl">
            El proceso esta pensado para reducir friccion: publicas, buscas, cierras el acuerdo y empiezas a usar la plataforma con rapidez.
          </p>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-8 top-0 hidden h-full w-px animate-pulse lg:left-1/2 lg:-translate-x-px lg:block"
            style={{
              background: "linear-gradient(180deg, var(--electric), var(--plasma), var(--electric))",
            }}
          />

          <div className="relative space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col items-start gap-6 lg:flex-row lg:items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-[calc(50%-2rem)] ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="glow-border rounded-[28px] bg-[--deep-pit] p-6 sm:p-7">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[--hairline] bg-white/5 backdrop-blur">
                          <span className="text-gradient text-lg font-bold">{step.number}</span>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[--electric]/15 text-[--electric]">
                          <step.icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="mt-6 text-2xl text-[--fog]">{step.title}</h3>
                      <p className="mt-4 font-body text-base leading-7 text-[--mist]">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex lg:w-8 lg:justify-center">
                    <div className="z-10 h-4 w-4 rounded-full border-2 border-[--electric] bg-[--asphalt]" />
                  </div>

                  <div className="lg:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
