'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-background">
            {/* Premium Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-200/40 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-100/30 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-sky-100/30 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Social Proof Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-sky-100 shadow-sm mb-8"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-1 ml-2">
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                            <span className="text-sm font-semibold text-sky-900">+10k conductores felices</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-sky-900 mb-6 leading-[1.1]"
                    >
                        Aparca con confianza, <br />
                        <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                            disfruta tu destino
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
                    >
                        Encuentra y reserva tu plaza de parking en segundos. Ahorra tiempo, evita multas y paga de forma segura desde tu móvil.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold rounded-full px-10 h-14 shadow-xl shadow-orange-200 hover:scale-105 transition-all">
                            Buscar Parking Ahora
                        </Button>
                        <Button variant="outline" size="lg" className="bg-white/50 backdrop-blur-sm border-sky-200 text-sky-900 text-lg font-semibold rounded-full px-10 h-14 hover:bg-sky-50 transition-all">
                            Saber más
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
                    >
                        <div className="flex items-center gap-3 text-slate-500">
                            <Shield className="w-5 h-5 text-sky-500" />
                            <span className="font-medium text-sm">Pago 100% Seguro</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-500">
                            <Clock className="w-5 h-5 text-sky-500" />
                            <span className="font-medium text-sm">Reservas en Tiempo Real</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-500 md:col-span-1 col-span-2 justify-center">
                            <Star className="w-5 h-5 text-sky-500 fill-sky-500" />
                            <span className="font-medium text-sm">Rating 4.9/5 Estrellas</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
