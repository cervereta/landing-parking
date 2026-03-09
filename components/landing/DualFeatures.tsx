"use client";

import { motion } from "framer-motion";
import { Home, Car, TrendingUp, Shield, Calendar, CheckCircle, ArrowUpRight } from "lucide-react";

const propietariosFeatures = [
  { icon: TrendingUp, text: "Genera ingresos pasivos" },
  { icon: Shield, text: "Contrato legal incluido" },
  { icon: Calendar, text: "Tú decides cuándo alquilar" },
];

const usuariosFeatures = [
  { icon: CheckCircle, text: "Hasta 50% más barato" },
  { icon: Shield, text: "Plazas verificadas" },
  { icon: Calendar, text: "Por horas, días o meses" },
];

export function DualFeatures() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-pure relative overflow-hidden">
      {/* Background Road Lines */}
      <div className="absolute top-0 left-0 right-0 h-4 pattern-diagonal" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-marker mb-4">ELIGE TU ROL</span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl uppercase mt-4 mb-6">
            ¿Cómo usas <span className="text-safety text-stroke">PARKCAR</span>?
          </h2>
          <p className="font-body text-lg md:text-xl text-concrete max-w-2xl mx-auto border-l-[6px] border-safety pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            Sea cual sea tu situación, tenemos la solución perfecta para ti
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Propietarios Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="brutal-container h-full !bg-concrete !p-0 overflow-hidden group">
              {/* Header with Icon */}
              <div className="bg-safety border-b-[3px] border-ink p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-ink text-pure flex items-center justify-center border-[3px] border-pure">
                    <Home className="w-8 h-8" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl uppercase text-ink">PROPIETARIO</div>
                    <div className="font-body font-bold text-concrete">Gana dinero extra</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <p className="font-body text-lg text-pure mb-8 leading-relaxed">
                  ¿Tienes una plaza de parking que no usas? Conviértela en una fuente de <strong className="text-safety">ingresos pasivos</strong>.
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {propietariosFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 bg-safety border-[3px] border-ink flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-ink" strokeWidth={2.5} />
                      </div>
                      <span className="font-body text-pure font-medium">{feature.text}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="https://parking.cerveretadev.es" className="w-full brutal-btn !bg-safety group">
                  Publicar mi plaza
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} />
                </a>
              </div>

              {/* Bottom Pattern */}
              <div className="h-4 pattern-road-lines" />
            </div>
          </motion.div>

          {/* Usuarios Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="brutal-container h-full !bg-pure !p-0 overflow-hidden group">
              {/* Header with Icon */}
              <div className="bg-ink border-b-[3px] border-ink p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-safety text-ink flex items-center justify-center border-[3px] border-pure">
                    <Car className="w-8 h-8" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl uppercase text-pure">USUARIO</div>
                    <div className="font-body font-bold text-concrete">Ahorra en parking</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <p className="font-body text-lg text-ink mb-8 leading-relaxed">
                  ¿Buscas parking diario o mensual? Encuentra plazas privadas al <strong className="text-safety">mejor precio</strong>.
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {usuariosFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 bg-ink border-[3px] border-ink flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-safety" strokeWidth={2.5} />
                      </div>
                      <span className="font-body text-ink font-medium">{feature.text}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="https://parking.cerveretadev.es" className="w-full brutal-btn-dark group">
                  Buscar parking
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} />
                </a>
              </div>

              {/* Bottom Pattern */}
              <div className="h-4 pattern-diagonal opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
