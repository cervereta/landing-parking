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
        // Neo-brutalist street signage palette
        asphalt: "#0A0A0A",
        ink: "#0A0A0A",
        concrete: "#2A2A2A",
        safety: {
          DEFAULT: "#FFD700",
          dark: "#E6C200",
          light: "#FFEC8B",
        },
        warning: {
          DEFAULT: "#FF4444",
          dark: "#CC3333",
        },
        pure: "#FFFFFF",
        stripe: {
          gray: "#717171",
          white: "#FFFFFF",
          black: "#000000",
        },
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
        brutal: "4px 4px 0px 0px #0A0A0A",
        "brutal-lg": "6px 6px 0px 0px #0A0A0A",
        "brutal-xl": "8px 8px 0px 0px #0A0A0A",
        "brutal-safety": "4px 4px 0px 0px #FFD700",
        "brutal-white": "4px 4px 0px 0px #FFFFFF",
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
          border: '3px solid #0A0A0A',
          boxShadow: '4px 4px 0px 0px #0A0A0A',
          transition: 'all 0.1s ease',
        },
        '.brutal-card:active': {
          transform: 'translate(2px, 2px)',
          boxShadow: '2px 2px 0px 0px #0A0A0A',
        },
        '.brutal-btn': {
          border: '3px solid #0A0A0A',
          boxShadow: '4px 4px 0px 0px #0A0A0A',
          transition: 'all 0.1s ease',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        },
        '.brutal-btn:active': {
          transform: 'translate(4px, 4px)',
          boxShadow: '0px 0px 0px 0px #0A0A0A',
        },
        '.brutal-btn:hover': {
          transform: 'translate(-2px, -2px)',
          boxShadow: '6px 6px 0px 0px #0A0A0A',
        },
        '.diagonal-stripes': {
          background: 'repeating-linear-gradient(45deg, #FFD700, #FFD700 10px, #0A0A0A 10px, #0A0A0A 20px)',
        },
        '.warning-stripes': {
          background: 'repeating-linear-gradient(45deg, #FF4444, #FF4444 10px, #FFFFFF 10px, #FFFFFF 20px)',
        },
        '.road-marking': {
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, #FFD700 20px, #FFD700 40px)',
        },
      });
    },
  ],
};

export default config;
