"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, FileCheck, Key, ArrowRight, Shield } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "REGÍSTRATE",
    description: "Crea tu cuenta en menos de 2 minutos. Solo necesitas email y teléfono.",
    color: "safety",
    number: "01",
  },
  {
    icon: Search,
    title: "ENCUENTRA",
    description: "Busca la plaza perfecta en tu zona o publica la tuya para empezar a ganar.",
    color: "ink",
    number: "02",
  },
  {
    icon: FileCheck,
    title: "CONTRATO",
    description: "Generamos automáticamente un contrato legal que protege a ambas partes.",
    color: "safety",
    number: "03",
  },
  {
    icon: Key,
    title: "DISFRUTA",
    description: "Recibe las llaves y empieza a usar tu plaza de parking segura.",
    color: "ink",
    number: "04",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-safety relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-full">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-20 border-b-[4px] border-ink" />
          ))}
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 pattern-warning" />
      <div className="absolute bottom-0 right-0 w-32 h-32 pattern-warning rotate-180" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-ink text-pure border-[3px] border-pure px-4 py-2 font-display font-bold text-sm uppercase tracking-widest mb-6"
            style={{ boxShadow: '4px 4px 0px 0px #0A0A0A' }}>
            RUTA A SEGUIR
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase text-ink mb-6">
            ¿Cómo funciona?
          </h2>
          <p className="font-body text-lg md:text-xl text-concrete max-w-2xl mx-auto">
            En 4 simples pasos, empieza a ganar dinero o encuentra tu plaza ideal
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Road Sign Style Card */}
              <div className={`brutal-container !p-0 h-full ${step.color === 'safety' ? '!bg-pure' : '!bg-ink'}`}>
                {/* Step Number Badge */}
                <div className={`border-b-[3px] border-ink p-4 ${step.color === 'safety' ? 'bg-safety' : 'bg-concrete'}`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-display font-black text-4xl ${step.color === 'safety' ? 'text-ink' : 'text-pure'}`}>
                      {step.number}
                    </span>
                    {/* Connecting Arrow (hidden on mobile and last item) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-ink" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Icon */}
                <div className="p-6 pb-0">
                  <div className={`w-16 h-16 border-[3px] border-ink flex items-center justify-center mb-4 ${
                    step.color === 'safety' ? 'bg-safety' : 'bg-pure'
                  }`}>
                    <step.icon className={`w-8 h-8 ${step.color === 'safety' ? 'text-ink' : 'text-ink'}`} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-4">
                  <h3 className={`font-display font-black text-xl uppercase mb-3 ${
                    step.color === 'safety' ? 'text-ink' : 'text-pure'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`font-body leading-relaxed ${
                    step.color === 'safety' ? 'text-concrete' : 'text-concrete'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className={`h-3 border-t-[3px] border-ink ${
                  step.color === 'safety' ? 'bg-concrete' : 'bg-safety'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-ink text-pure border-[3px] border-pure px-6 py-4 font-display font-bold text-sm uppercase tracking-wider"
            style={{ boxShadow: '4px 4px 0px 0px #0A0A0A' }}>
            <Shield className="w-5 h-5 text-safety" fill="#FFD700" strokeWidth={2.5} />
            Todos los alquileres incluyen contrato legal y seguro de responsabilidad civil
          </div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-ink" />
    </section>
  );
}
