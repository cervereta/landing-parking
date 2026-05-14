"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarRange, CircleDollarSign, MapPinCheckInside, ShieldCheck, WalletCards } from "lucide-react";

const ownerFeatures = [
  "Publica gratis y activa tu plaza en minutos",
  "Tu decides precio, disponibilidad y condiciones",
  "Contrato listo para cerrar con mas tranquilidad",
];

const driverFeatures = [
  "Compara plazas privadas en zonas clave",
  "Reduce lo que pagas frente al parking tradicional",
  "Encuentra una opcion mas comoda para tu rutina",
];

export function DualFeatures() {
  return (
    <section id="features" className="section-shell px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-copy text-center"
        >
          <span className="section-marker !border-[--hairline] !bg-[--deep-pit]/80 !text-[--mist]">
            Dos formas de usar ParkCar
          </span>
          <h2 className="mt-6 text-4xl text-[--fog] sm:text-5xl lg:text-6xl">
            Una plataforma para monetizar una plaza o dejar de pagar parking de mas.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[--mist] sm:text-xl">
            Tanto si quieres sacar rentabilidad a una plaza vacia como si necesitas aparcar mejor cada dia, aqui encuentras un camino claro para empezar.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.article
            id="owners"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="glow-border relative overflow-hidden rounded-[28px] bg-[--deep-pit] p-8 sm:p-10"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "var(--card-glow)" }}
            />
            <span className="eyebrow relative !border-[--hairline] !bg-[--elevated]/80 !text-[--mist]">
              Para propietarios
            </span>
            <h3 className="relative mt-6 max-w-xl text-3xl text-[--fog] sm:text-4xl">
              Convierte una plaza vacia en un ingreso extra mes a mes.
            </h3>
            <p className="relative mt-5 max-w-xl text-lg leading-8 text-[--mist]">
              Si tienes una plaza que no usas todos los dias, puedes publicarla gratis, definir tus condiciones y empezar a rentabilizarla sin complicarte.
            </p>

            <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: CircleDollarSign, value: '+180 EUR', label: 'media estimada al mes' },
                { icon: CalendarRange, value: 'Flexible', label: 'tu eliges cuando alquilar' },
                { icon: ShieldCheck, value: 'Con contrato', label: 'mas claridad al cerrar' },
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] border border-[--hairline] bg-[--elevated]/50 p-5">
                  <item.icon className="h-5 w-5 text-[--electric]" />
                  <p className="mt-4 text-2xl text-[--fog]">{item.value}</p>
                  <p className="mt-2 font-body text-sm text-[--mist]">{item.label}</p>
                </div>
              ))}
            </div>

            <ul className="relative mt-8 space-y-4">
              {ownerFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 font-body text-base text-[--fog]/80">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[--electric]/15 text-[--electric]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://parking.cerveretadev.es"
              className="relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 font-body text-sm font-semibold text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[--electric] to-[--plasma] opacity-90" />
              <span className="relative z-10">Publicar mi plaza</span>
            </a>
          </motion.article>

          <motion.article
            id="drivers"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="glow-border relative overflow-hidden rounded-[28px] bg-[--deep-pit] p-8 sm:p-10"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "var(--card-glow)" }}
            />
            <span className="eyebrow relative !border-[--hairline] !bg-[--elevated]/80 !text-[--mist]">
              Para conductores
            </span>
            <h3 className="relative mt-6 max-w-lg text-3xl text-[--fog] sm:text-4xl">
              Encuentra parking privado mejor ubicado, mas comodo y a mejor precio.
            </h3>
            <p className="relative mt-5 max-w-lg text-lg leading-8 text-[--mist]">
              Reserva plazas en tu zona para uso diario, mensual o puntual sin depender de parkings impersonales, saturados y caros.
            </p>

            <div className="relative mt-8 rounded-[28px] border border-[--hairline] bg-[--elevated]/30 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-[--hairline] bg-[--elevated]/30 p-5">
                  <MapPinCheckInside className="h-5 w-5 text-[--electric]" />
                  <p className="mt-4 text-2xl text-[--fog]">Mas cerca</p>
                  <p className="mt-2 font-body text-sm text-[--mist]">Elige segun barrio, horario y lo que de verdad te conviene.</p>
                </div>
                <div className="rounded-[22px] border border-[--hairline] bg-[--elevated]/30 p-5">
                  <WalletCards className="h-5 w-5 text-[--electric]" />
                  <p className="mt-4 text-2xl text-[--fog]">Mas ahorro</p>
                  <p className="mt-2 font-body text-sm text-[--mist]">Opciones privadas con mejor equilibrio entre precio, cercania y comodidad.</p>
                </div>
              </div>
            </div>

            <ul className="relative mt-8 space-y-4">
              {driverFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 font-body text-base text-[--fog]/80">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[--electric]/15 text-[--electric]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://parking.cerveretadev.es"
              className="relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 font-body text-sm font-semibold text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[--electric] to-[--plasma] opacity-90" />
              <span className="relative z-10">Buscar parking</span>
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
