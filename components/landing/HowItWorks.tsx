'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, CreditCard, Car } from 'lucide-react';

const steps = [
    {
        icon: <MapPin className="w-8 h-8 text-sky-600" />,
        title: 'Busca',
        description: 'Introduce tu destino y encuentra parkings cercanos en tiempo real.'
    },
    {
        icon: <Calendar className="w-8 h-8 text-sky-600" />,
        title: 'Reserva',
        description: 'Elige tu plaza y el tiempo que necesitas. Reserva al instante.'
    },
    {
        icon: <CreditCard className="w-8 h-8 text-sky-600" />,
        title: 'Paga',
        description: 'Pago seguro a través de la app. Sin efectivo ni colas.'
    },
    {
        icon: <Car className="w-8 h-8 text-sky-600" />,
        title: 'Aparca',
        description: 'Accede al parking con tu móvil y disfruta de tu día.'
    }
];

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">Proceso Simple</span>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mt-2 mb-4">
                        Aparcar nunca fue tan fácil
                    </h2>
                    <p className="text-lg text-slate-600">
                        En solo 4 pasos tendrás tu plaza asegurada.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-sky-100 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl text-center group hover:bg-sky-50 transition-colors duration-300"
                            >
                                <div className="w-20 h-20 mx-auto bg-sky-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-white border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
