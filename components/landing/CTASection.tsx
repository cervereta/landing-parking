"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, CheckCircle, Mail } from "lucide-react";

const benefits = [
  "Registro gratuito",
  "Sin compromiso", 
  "Cancelación flexible",
];

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-safety relative overflow-hidden">
      {/* Background Pattern - Road Hazard Style */}
      <div className="absolute top-0 left-0 right-0 h-8 pattern-warning" />
      <div className="absolute bottom-0 left-0 right-0 h-8 pattern-warning" />
      
      {/* Diagonal Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-2 h-full bg-ink transform rotate-12" />
        <div className="absolute top-0 right-1/4 w-2 h-full bg-ink transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-ink text-pure border-[3px] border-pure px-4 py-2 font-display font-bold text-sm uppercase tracking-wider mb-8"
              style={{ boxShadow: '4px 4px 0px 0px #0A0A0A' }}>
              <MapPin className="w-5 h-5 text-safety" fill="#FFD700" strokeWidth={2.5} />
              Disponible en toda España
            </div>

            {/* Headline */}
            <div className="mb-8">
              <div className="highway-sign !text-3xl sm:!text-4xl lg:!text-5xl !leading-tight !p-6 md:!p-10 inline-block">
                <span className="text-safety">¿LISTO PARA</span>
                <br />
                <span className="text-pure">EMPEZAR?</span>
              </div>
            </div>

            <p className="font-body text-lg md:text-xl text-ink mb-10 max-w-2xl mx-auto font-medium">
              Únete a miles de usuarios que ya están ahorrando en parking o generando 
              ingresos extra con sus plazas.
            </p>

            {/* Email Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-concrete" strokeWidth={2.5} />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full h-14 bg-pure border-[3px] border-ink pl-12 pr-4 font-body text-lg focus:outline-none focus:shadow-[4px_4px_0px_0px_#0A0A0A] transition-shadow"
                />
              </div>
              <a href="https://parking.cerveretadev.es" className="brutal-btn-dark !h-14 !text-base whitespace-nowrap">
                Empezar gratis
                <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
              </a>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-ink">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-pure border-[3px] border-ink px-3 py-2"
                  style={{ boxShadow: '2px 2px 0px 0px #0A0A0A' }}>
                  <CheckCircle className="w-5 h-5 text-safety" fill="#FFD700" strokeWidth={2.5} />
                  <span className="font-display font-bold text-xs uppercase tracking-wider">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
