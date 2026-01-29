'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const CTASection = () => {
    return (
        <section className="py-24 bg-[#F0F9FF]">
            <div className="container mx-auto px-4">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-sky-900 px-6 py-20 text-center shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl translate-x-[-30%] translate-y-[-30%]"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl translate-x-[30%] translate-y-[30%]"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
                        >
                            ¿Listo para aparcar mejor?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-sky-100 text-lg md:text-xl mb-10"
                        >
                            Únete a miles de conductores que ya disfrutan de la libertad de tener su plaza garantizada.
                            Empieza hoy mismo.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 h-12 shadow-lg hover:scale-105 transition-transform">
                                Descargar App Gratis
                            </Button>
                            <Button variant="outline" size="lg" className="bg-transparent border-sky-400 text-white hover:bg-sky-800 rounded-full px-8 h-12">
                                Ver Mapa de Parkings
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
