"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const trustItems = [
  "Publicacion gratuita",
  "Contrato legal incluido",
  "Perfiles verificados",
];

function Particles() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 15, -10, 0],
            opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function HeroCinematic() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = useCallback(() => {
    setVideoError(true);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] w-full items-center overflow-hidden">
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/hero-poster.jpg"
          aria-hidden="true"
          onError={handleVideoError}
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      )}

      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <Particles />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h1 className="text-gradient max-w-3xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Gana dinero con tu plaza.
            <span className="mt-2 block text-[--fog]">
              Encuentra parking privado sin pagar de mas.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[--mist] sm:text-xl">
            Publica una plaza que no usas o reserva una cerca de ti. ParkCar conecta propietarios y conductores con contrato legal, perfiles verificados y un proceso claro de principio a fin.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://parking.cerveretadev.es"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-body text-sm font-semibold text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[--electric] to-[--plasma] opacity-90" />
              <span className="relative z-10 flex items-center gap-2">
                Quiero publicar mi plaza
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
            <a
              href="https://parking.cerveretadev.es"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-body text-sm font-semibold text-[--fog] backdrop-blur transition-all hover:bg-white/10"
            >
              Buscar parking
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[--hairline] bg-white/5 px-4 py-2 text-sm text-[--fog] backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-[--electric]" />
                <span className="font-body text-sm font-medium text-[--fog]/80">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
