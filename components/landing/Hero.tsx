"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CreditCard, Clock, MapPin, Car, Coins } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Logo fijo (sin animación de flotación) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 lg:mb-8"
            >
              <div className="relative w-48 h-28 md:w-64 md:h-36 mx-auto lg:mx-0">
                <Image
                  src="/images/logo-parkcar-hero.png"
                  alt="ParkCar"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-orange-100 text-orange-600 hover:bg-orange-100 border-none text-sm font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                Alquiler de plazas de parking privadas
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Gana dinero con tu{" "}
              <span className="text-blue-500">plaza</span> o alquila al{" "}
              <span className="text-orange-500">mejor precio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              ParkCar conecta propietarios de plazas de parking con personas que
              necesitan aparcar. Contrato seguro entre particulares, disponible
              en toda <strong>España</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
              >
                <Coins className="w-5 h-5 mr-2" />
                Quiero alquilar mi plaza
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-400 text-orange-500 hover:bg-orange-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
              >
                <Car className="w-5 h-5 mr-2" />
                Buscar parking disponible
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Contrato legal</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-green-500" />
                <span>Pagos seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span>Disponible 24/7</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-500/5 to-orange-500/5 rounded-3xl p-8 lg:p-12">
              {/* 3D-style illustration */}
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Parking building base */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-slate-200 to-slate-100 rounded-2xl shadow-2xl"
                />
                
                {/* Building floors */}
                <div className="absolute inset-x-8 bottom-8 top-1/4 space-y-4">
                  {[1, 2, 3].map((floor) => (
                    <div
                      key={floor}
                      className="h-16 bg-white/80 rounded-lg shadow-md flex items-center justify-center"
                    >
                      <div className="flex gap-8">
                        <div className="w-12 h-8 bg-slate-300/50 rounded" />
                        <div className="w-12 h-8 bg-slate-300/50 rounded" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Car */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute bottom-16 left-1/2 -translate-x-1/2"
                >
                  <div className="w-32 h-16 bg-blue-500 rounded-2xl shadow-xl flex items-center justify-center relative">
                    <div className="absolute -top-3 left-2 right-2 h-6 bg-blue-400 rounded-t-xl" />
                    <Car className="w-12 h-12 text-white" />
                    {/* Wheels */}
                    <div className="absolute -bottom-2 left-3 w-6 h-6 bg-slate-700 rounded-full" />
                    <div className="absolute -bottom-2 right-3 w-6 h-6 bg-slate-700 rounded-full" />
                  </div>
                </motion.div>

                {/* Location pins */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="absolute top-8 right-8"
                >
                  <div className="w-12 h-12 bg-orange-500 rounded-full shadow-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  className="absolute top-16 left-4"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full shadow-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </motion.div>

                {/* Floating coins */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-1/4"
                >
                  <div className="w-14 h-14 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center border-4 border-yellow-300">
                    <span className="text-yellow-700 font-bold text-lg">€</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/3 right-4"
                >
                  <div className="w-10 h-10 bg-yellow-400 rounded-full shadow-md flex items-center justify-center border-4 border-yellow-300">
                    <span className="text-yellow-700 font-bold">€</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
