'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
    {
        name: 'Carlos Rodríguez',
        role: 'Conductor Diario',
        content: 'Increíble app. Ya no pierdo 20 minutos buscando sitio cada mañana. La reserva es instantánea.',
        avatar: 'https://i.pravatar.cc/150?u=1'
    },
    {
        name: 'Elena Martínez',
        role: 'Usuario Premium',
        content: 'Poder pagar desde el móvil y entrar al parking sin ticket es un cambio de vida total. Muy recomendado.',
        avatar: 'https://i.pravatar.cc/150?u=2'
    },
    {
        name: 'Juan Pérez',
        role: 'Mensajero',
        content: 'Para mi trabajo es vital encontrar sitio rápido. ParkCar es mi herramienta número uno en la ciudad.',
        avatar: 'https://i.pravatar.cc/150?u=3'
    },
    {
        name: 'Sofía García',
        role: 'Turista',
        content: 'Visitamos la ciudad el fin de semana y tener el parking reservado nos quitó un gran peso de encima.',
        avatar: 'https://i.pravatar.cc/150?u=4'
    }
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-sky-50/30 overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
                    Lo que dicen nuestros conductores
                </h2>
                <p className="text-lg text-slate-600">
                    Más de 10,000 usuarios ya han simplificado su vida con ParkCar.
                </p>
            </div>

            <div className="relative">
                {/* Fade overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-sky-50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sky-50 to-transparent z-10" />

                <div className="flex animate-scroll hover:[animation-play-state:paused]">
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className="flex-none w-[350px] px-4">
                            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-sky-100/50 border border-sky-50 h-full flex flex-col items-start relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                                <Quote className="absolute top-4 right-6 w-12 h-12 text-sky-50 group-hover:text-sky-100 transition-colors" />
                                <div className="flex items-center gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
                                    ))}
                                </div>
                                <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                                    "{t.content}"
                                </p>
                                <div className="mt-auto flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-sky-100 border-2 border-white shadow-sm">
                                        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sky-900">{t.name}</h4>
                                        <p className="text-sm text-slate-500">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
            </div>
        </section>
    );
};
