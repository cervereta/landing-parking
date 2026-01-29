'use client';

import { motion } from 'framer-motion';
import { Smartphone, Clock, Shield, MapPin, CreditCard, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
    {
        title: 'Búsqueda Inteligente',
        description: 'Encuentra las plazas más baratas y cercanas con nuestro algoritmo de IA en tiempo real.',
        icon: <MapPin className="w-6 h-6" />,
        className: 'md:col-span-2 bg-sky-50',
        iconBg: 'bg-sky-500',
        accent: 'text-sky-600'
    },
    {
        title: 'Pago sin Contacto',
        description: 'Olvida el efectivo. Paga con Apple Pay, Google Pay o tarjeta.',
        icon: <CreditCard className="w-6 h-6" />,
        className: 'md:col-span-1 bg-orange-50',
        iconBg: 'bg-orange-500',
        accent: 'text-orange-600'
    },
    {
        title: 'Seguridad Garantizada',
        description: 'Solo trabajamos con parkings verificados y con videovigilancia 24/7.',
        icon: <Shield className="w-6 h-6" />,
        className: 'md:col-span-1 bg-white border border-sky-100 shadow-lg shadow-sky-100/50',
        iconBg: 'bg-slate-900',
        accent: 'text-slate-900'
    },
    {
        title: 'Ahorro de Tiempo',
        description: 'Reserva en 3 clics y navega directamente a tu plaza. Sin vueltas innecesarias.',
        icon: <Clock className="w-6 h-6" />,
        className: 'md:col-span-2 bg-gradient-to-br from-sky-600 to-indigo-700 text-white',
        iconBg: 'bg-white/20 backdrop-blur-sm',
        accent: 'text-sky-100'
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sky-600 font-bold tracking-tight mb-4"
                    >
                        <Sparkles className="w-5 h-5" />
                        <span>CARACTERÍSTICAS PREMIUM</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-2xl leading-tight">
                        Todo lo que necesitas para un <br />
                        <span className="text-sky-500">aparcamiento perfecto</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "relative p-8 rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500",
                                feature.className
                            )}
                        >
                            <div className={cn(
                                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500",
                                feature.iconBg,
                                feature.accent === 'text-sky-100' ? 'text-white' : 'text-white'
                            )}>
                                {feature.icon}
                            </div>
                            <div className="relative z-10">
                                <h3 className={cn(
                                    "text-2xl font-bold mb-4",
                                    feature.accent === 'text-sky-100' ? 'text-white' : 'text-slate-900'
                                )}>
                                    {feature.title}
                                </h3>
                                <p className={cn(
                                    "text-lg leading-relaxed opacity-80",
                                    feature.accent === 'text-sky-100' ? 'text-sky-50' : 'text-slate-600'
                                )}>
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative background circle */}
                            {!feature.className.includes('bg-gradient') && (
                                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-sky-50 rounded-full group-hover:scale-150 transition-transform duration-500 z-0" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
