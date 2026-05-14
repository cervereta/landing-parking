import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: "#171717",
        ink: "#171717",
        concrete: "#2F343B",
        ivory: "#F5F1E8",
        steel: "#6E7681",
        petrol: "#23443C",
        safety: {
          DEFAULT: "#D6A928",
          dark: "#B68C1B",
          light: "#E4C86A",
        },
        warning: {
          DEFAULT: "#B4543A",
          dark: "#8F3D28",
        },
        pure: "#FCFBF8",
        stripe: {
          gray: "#A8ADB4",
          white: "#FCFBF8",
          black: "#000000",
        },
        fog: "#e2e8f0",
        mist: "#94a3b8",
        electric: "#6366f1",
        plasma: "#a855f7",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        slide: "slide 0.3s ease-out",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      boxShadow: {
        brutal: "0 24px 60px -28px rgba(23, 23, 23, 0.35)",
        "brutal-lg": "0 32px 90px -42px rgba(23, 23, 23, 0.42)",
        "brutal-xl": "0 40px 120px -52px rgba(23, 23, 23, 0.48)",
        "brutal-safety": "0 18px 50px -28px rgba(214, 169, 40, 0.45)",
        "brutal-white": "0 14px 40px -24px rgba(252, 251, 248, 0.75)",
      },
      borderWidth: {
        brutal: "3px",
      },
    },
  },
  plugins: [
    function({
      addComponents,
    }: {
      addComponents: (components: Record<string, Record<string, string>>) => void;
    }) {
      addComponents({
        '.brutal-card': {
          border: '1px solid rgba(23, 23, 23, 0.12)',
          boxShadow: '0 24px 60px -28px rgba(23, 23, 23, 0.35)',
          transition: 'all 0.2s ease',
        },
        '.brutal-card:active': {
          transform: 'translateY(1px)',
          boxShadow: '0 18px 40px -28px rgba(23, 23, 23, 0.3)',
        },
        '.brutal-btn': {
          border: '1px solid rgba(23, 23, 23, 0.12)',
          boxShadow: '0 18px 50px -28px rgba(23, 23, 23, 0.35)',
          transition: 'all 0.2s ease',
          fontWeight: '700',
          letterSpacing: '0.01em',
        },
        '.brutal-btn:active': {
          transform: 'translateY(1px)',
          boxShadow: '0 14px 35px -24px rgba(23, 23, 23, 0.28)',
        },
        '.brutal-btn:hover': {
          transform: 'translateY(-1px)',
          boxShadow: '0 24px 60px -28px rgba(23, 23, 23, 0.35)',
        },
        '.diagonal-stripes': {
          background: 'repeating-linear-gradient(45deg, rgba(214, 169, 40, 0.9), rgba(214, 169, 40, 0.9) 12px, rgba(23, 23, 23, 0.9) 12px, rgba(23, 23, 23, 0.9) 24px)',
        },
        '.warning-stripes': {
          background: 'repeating-linear-gradient(45deg, rgba(180, 84, 58, 0.85), rgba(180, 84, 58, 0.85) 12px, rgba(252, 251, 248, 0.9) 12px, rgba(252, 251, 248, 0.9) 24px)',
        },
        '.road-marking': {
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(214, 169, 40, 0.75) 28px, rgba(214, 169, 40, 0.75) 56px)',
        },
      });
    },
  ],
};

export default config;
