"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Lock, Users, Star } from "lucide-react";

const trustIndicators = [
  {
    icon: FileText,
    title: "CONTRATO LEGAL",
    description: "Generamos automáticamente un contrato de arrendamiento válido que protege a ambas partes.",
  },
  {
    icon: Lock,
    title: "PAGOS SEGUROS",
    description: "Procesamos los pagos de forma segura. El propietario recibe el dinero cuando el inquilino ocupa la plaza.",
  },
  {
    icon: Shield,
    title: "VERIFICACIÓN",
    description: "Todos los usuarios pasan por un proceso de verificación para garantizar la seguridad.",
  },
  {
    icon: Users,
    title: "COMUNIDAD",
    description: "Sistema de valoraciones y reseñas para que siempre sepas con quién tratas.",
  },
];

const stats = [
  { value: "5K+", label: "Plazas disponibles", suffix: "" },
  { value: "10K+", label: "Usuarios activos", suffix: "" },
  { value: "4.9", label: "Valoración media", suffix: "/5" },
  { value: "50", label: "Ahorro medio", suffix: "%" },
];

export function TrustSection() {
  return (
    <section id="trust" className="py-20 lg:py-32 bg-concrete text-pure relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-full">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-24 border-b-[4px] border-pure" />
          ))}
        </div>
      </div>

      {/* Warning Stripes Corner */}
      <div className="absolute -top-10 -right-10 w-40 h-40 pattern-warning rotate-45" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="brutal-card bg-pure text-ink text-center p-6 md:p-8"
            >
              <div className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-safety text-stroke-thin mb-2">
                {stat.value}
                <span className="text-concrete text-2xl md:text-3xl">{stat.suffix}</span>
              </div>
              <div className="font-display font-bold text-xs md:text-sm uppercase tracking-wider text-concrete">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <span className="section-marker mb-6 !bg-warning !text-pure">SEGURIDAD MÁXIMA</span>
            
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-6 leading-tight">
              Tu seguridad es<br />
              <span className="text-safety text-stroke">PRIORIDAD</span>
            </h2>
            
            <p className="font-body text-lg text-concrete mb-8 leading-relaxed border-l-[6px] border-safety pl-6">
              En PARKCAR nos tomamos muy en serio la seguridad de tus transacciones. 
              Por eso hemos implementado múltiples capas de protección para que puedas 
              alquilar con total tranquilidad.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 bg-pure border-[3px] border-ink px-4 py-3 w-fit"
              style={{ boxShadow: '3px 3px 0px 0px #0A0A0A' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-safety" fill="#FFD700" strokeWidth={2.5} />
              ))}
              <span className="font-display font-black text-xl text-ink ml-2">4.9/5</span>
              <span className="font-body text-sm text-concrete ml-2">2.000+ opiniones</span>
            </div>
          </motion.div>

          {/* Right - Trust Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {trustIndicators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`brutal-card p-6 ${index % 2 === 0 ? 'bg-pure text-ink' : 'bg-safety text-ink'}`}
              >
                <div className={`w-14 h-14 border-[3px] border-ink flex items-center justify-center mb-4 ${
                  index % 2 === 0 ? 'bg-safety' : 'bg-pure'
                }`}>
                  <item.icon className="w-7 h-7 text-ink" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-black text-sm uppercase tracking-wider mb-3">
                  {item.title}
                </h3>
                <p className={`font-body text-sm leading-relaxed ${
                  index % 2 === 0 ? 'text-concrete' : 'text-concrete'
                }`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
