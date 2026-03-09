"use client";

import { motion } from "framer-motion";
import { Car, MapPin, Coins, Shield, ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-pure">
      {/* Background Pattern - Road Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 right-0 h-4 pattern-road-lines" />
        <div className="absolute top-1/2 left-0 right-0 h-4 pattern-road-lines" />
        <div className="absolute top-3/4 left-0 right-0 h-4 pattern-road-lines" />
      </div>

      {/* Diagonal Warning Stripes - Corner */}
      <div className="absolute -top-20 -right-20 w-64 h-64 pattern-warning opacity-20 rotate-45" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 pattern-diagonal opacity-20 rotate-12" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Safety Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mb-6"
            >
              <span className="safety-badge">
                <Zap className="w-4 h-4" fill="#0A0A0A" />
                Alquiler de plazas privadas
              </span>
            </motion.div>

            {/* Main Headline - Highway Sign Style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-8"
            >
              <div className="highway-sign !text-3xl sm:!text-4xl lg:!text-5xl !leading-tight !p-6 md:!p-8 inline-block">
                <span className="text-safety">TU PLAZA</span>
                <br />
                <span className="text-pure">TU DINERO</span>
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl font-body font-medium text-concrete max-w-lg mb-8 leading-relaxed border-l-[6px] border-safety pl-6"
            >
              Conectamos propietarios de plazas de parking con personas que necesitan aparcar. 
              <strong className="text-ink"> Contrato legal incluido.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a href="https://parking.cerveretadev.es" className="brutal-btn !text-base !py-4 !px-8 group">
                <Coins className="w-5 h-5 mr-3" strokeWidth={2.5} />
                Quiero alquilar MI PLAZA
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </a>
              <a href="https://parking.cerveretadev.es" className="brutal-btn-secondary !text-base !py-4 !px-8 group">
                <Car className="w-5 h-5 mr-3" strokeWidth={2.5} />
                Buscar parking
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: Shield, text: "Contrato legal" },
                { icon: MapPin, text: "Toda España" },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 bg-pure border-[3px] border-ink px-4 py-2"
                  style={{ boxShadow: '3px 3px 0px 0px #0A0A0A' }}
                >
                  <item.icon className="w-5 h-5 text-safety" fill="#FFD700" strokeWidth={2.5} />
                  <span className="font-display font-bold text-xs uppercase tracking-wider">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="brutal-container relative bg-concrete !p-0 overflow-hidden">
              {/* Pattern Header */}
              <div className="h-8 pattern-diagonal" />
              
              {/* Content */}
              <div className="p-6 md:p-10">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: "50%", label: "Más barato" },
                    { value: "10K+", label: "Plazas activas" },
                    { value: "4.9", label: "Valoración" },
                    { value: "0€", label: "Sin comisiones" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1, duration: 0.3 }}
                      className="brutal-card bg-pure p-4 text-center"
                    >
                      <div className="font-display font-black text-2xl md:text-3xl text-safety text-stroke-thin">
                        {stat.value}
                      </div>
                      <div className="font-display font-bold text-xs uppercase tracking-wider text-concrete mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Visual Illustration - Parking Theme */}
                <div className="relative h-48 bg-pure border-[3px] border-ink overflow-hidden">
                  {/* Road */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-concrete" />
                  <div className="absolute bottom-6 left-0 right-0 h-1 pattern-road-lines" />
                  
                  {/* Parking Lines */}
                  <div className="absolute bottom-0 left-1/4 w-1 h-16 bg-safety" />
                  <div className="absolute bottom-0 right-1/4 w-1 h-16 bg-safety" />

                  {/* Car */}
                  <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                    className="absolute bottom-4 left-1/3 transform -translate-x-1/2"
                  >
                    <div className="w-24 h-12 bg-safety border-[3px] border-ink relative">
                      <div className="absolute -top-4 left-2 right-2 h-5 bg-safety-light border-[3px] border-ink border-b-0" />
                      <Car className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-ink" strokeWidth={2.5} />
                    </div>
                    {/* Wheels */}
                    <div className="absolute -bottom-2 left-1 w-5 h-5 bg-ink border-2 border-pure" />
                    <div className="absolute -bottom-2 right-1 w-5 h-5 bg-ink border-2 border-pure" />
                  </motion.div>

                  {/* Location Pin */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute top-4 right-8"
                  >
                    <div className="w-12 h-12 bg-warning border-[3px] border-ink flex items-center justify-center relative">
                      <MapPin className="w-6 h-6 text-pure" fill="white" strokeWidth={2.5} />
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-warning" />
                    </div>
                  </motion.div>

                  {/* Floating Coin */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 left-6"
                  >
                    <div className="w-14 h-14 bg-safety border-[3px] border-ink rounded-full flex items-center justify-center">
                      <span className="font-display font-black text-xl">€</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Pattern Footer */}
              <div className="h-6 pattern-warning" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
              className="absolute -bottom-4 -right-4 brutal-card bg-safety !p-3"
            >
              <div className="font-display font-black text-sm uppercase">Disponible 24/7</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Road Line */}
      <div className="absolute bottom-0 left-0 right-0 h-6 pattern-diagonal" />
    </section>
  );
}
