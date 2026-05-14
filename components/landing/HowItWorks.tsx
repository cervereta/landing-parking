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

export function HowItWorks() {
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
          <span className="section-marker">Como funciona</span>
          <h2 className="mt-6 text-4xl text-[#4A4F57] sm:text-5xl lg:text-6xl">
            Empieza en minutos y sin complicaciones.
          </h2>
          <p className="mt-5 text-lg leading-8 text-steel sm:text-xl">
            El proceso esta pensado para reducir friccion: publicas, buscas, cierras el acuerdo y empiezas a usar la plataforma con rapidez.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="premium-card p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl text-safety-dark">{step.number}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-petrol/10 text-petrol">
                  <step.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-10 text-2xl text-ink">{step.title}</h3>
              <p className="mt-4 font-body text-base leading-7 text-steel">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
