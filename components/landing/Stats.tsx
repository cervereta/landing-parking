'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(Math.floor(end * ease));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(updateCount);
            }
        };

        animationFrame = requestAnimationFrame(updateCount);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <>{count.toLocaleString()}</>;
};

export const Stats = () => {
    return (
        <section className="py-10 bg-white border-y border-sky-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-4xl font-bold text-sky-600 mb-1">
                            <CountUp end={50000} />+
                        </p>
                        <p className="text-slate-600 font-medium">Usuarios Activos</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-center"
                    >
                        <p className="text-4xl font-bold text-sky-600 mb-1">
                            <CountUp end={120} />+
                        </p>
                        <p className="text-slate-600 font-medium">Ciudades</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center"
                    >
                        <p className="text-4xl font-bold text-sky-600 mb-1">
                            <CountUp end={8500} />
                        </p>
                        <p className="text-slate-600 font-medium">Plazas Disponibles</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center"
                    >
                        <p className="text-4xl font-bold text-sky-600 mb-1">4.9/5</p>
                        <p className="text-slate-600 font-medium">Valoración Media</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
