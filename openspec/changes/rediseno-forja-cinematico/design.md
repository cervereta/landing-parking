# Design: Sistema Visual Cinematográfico Forja

## 1. Paleta de Color — "Midnight Asphalt"

```
┌─────────────────────────────────────────────────────────┐
│  BACKGROUNDS                                            │
│  --asphalt:      #0a0a0f  (fondo principal)            │
│  --deep-pit:     #12121a  (cards, secciones alternas)   │
│  --elevated:     #1a1a26  (hover states, modals)        │
│                                                         │
│  ACCENTS                                                │
│  --electric:     #6366f1  (indigo eléctrico - primario) │
│  --ember:        #f59e0b  (ámbar - CTAs, highlights)    │
│  --plasma:       #a855f7  (púrpura - gradientes)        │
│                                                         │
│  TEXT                                                    │
│  --fog:          #e2e8f0  (texto principal)             │
│  --mist:         #94a3b8  (texto secundario)            │
│  --shadow:       #475569  (texto terciario)             │
│                                                         │
│  BORDERS / DIVIDERS                                     │
│  --hairline:     rgba(99,102,241,0.12)                  │
│  --glow:         rgba(99,102,241,0.25)                  │
└─────────────────────────────────────────────────────────┘
```

### Gradientes clave
```css
/* Hero overlay */
--hero-overlay: linear-gradient(
  180deg,
  rgba(10,10,15,0.3) 0%,
  rgba(10,10,15,0.7) 60%,
  rgba(10,10,15,1) 100%
);

/* Card glow */
--card-glow: radial-gradient(
  ellipse at top left,
  rgba(99,102,241,0.08) 0%,
  transparent 60%
);

/* CTA blaze */
--cta-blaze: conic-gradient(
  from 0deg at 50% 50%,
  #6366f1, #a855f7, #6366f1
);
```

## 2. Tipografía

Se **conservan** Sora (display) y Manrope (body). Cambios:
- Pesos: display pasa de `font-bold` a `font-extrabold` en headings principales
- Tracking: `tracking-tight` en h1, `tracking-wide` en labels
- Gradientes de texto en headings clave (`.text-gradient` → `bg-gradient-to-r from-[--electric] to-[--plasma] bg-clip-text text-transparent`)

## 3. Sistema de Componentes Cinematográficos

### Hero (nuevo)
```
┌──────────────────────────────────────────────────┐
│ [VIDEO BACKGROUND - autoplay muted loop]         │
│ [OVERLAY: --hero-overlay gradient]               │
│                                                  │
│   ┌─────────────────────────────┐               │
│   │ PARKCAR                     │ <- Sora extrabold |
│   │ Automatización inteligente  │ <- gradient text  │
│   │ de aparcamientos            │                    │
│   │                             │                    │
│   │ [CTA Primario] [CTA Sec]   │ <- glass buttons   │
│   │ ★★★★★ Trust chips          │                    │
│   └─────────────────────────────┘               │
│                                                  │
│ [PARTÍCULAS: light streaks sutiles]              │
└──────────────────────────────────────────────────┘
```

Tecnología: `<video>` nativo con `object-fit: cover`, `playsinline`, `muted`, `loop`, `autoplay`. Fallback: poster image generada como frame del video.

### Stats (adaptado)
- Contenedor: glassmorphism (`backdrop-blur-xl bg-[--deep-pit]/60`)
- Números: animación `count-up` vía framer-motion `useSpring`
- Labels: `text-[--mist] uppercase tracking-widest text-xs`

### Features (dual)
- Cards con `border border-[--hairline]` y `bg-[--deep-pit]`
- `hover:border-[--glow]` + `hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]`
- Iconos con gradiente (Lucide icons + `text-transparent bg-clip-text bg-gradient-to-br from-[--electric] to-[--plasma]`)

### HowItWorks (timeline)
- Conector vertical: línea con gradiente animado (`.timeline-line` con `animate-pulse`)
- Steps: cards alternadas izq/der en desktop, stacked en mobile
- Números de paso: círculos glass con número gradiente

### TrustSection
- Grid de badges 4-6 columnas
- Cada badge: opacidad 0.5 por defecto, `hover:opacity-100` + escala 1.05
- Transición: `transition-all duration-500`

### Testimonials
- Cards con `bg-gradient-to-br from-[--deep-pit] to-transparent`
- Quotes con `font-serif italic text-2xl text-[--fog]`
- Avatar + nombre con borde gradiente sutil

### CTASection (potenciado)
- Fondo: `bg-[--asphalt]` con gradiente radial centrado
- Partículas flotantes vía `framer-motion` (5-8 dots luminosos con movimiento aleatorio)
- Texto principal con gradiente animado
- Botones glass premium

### Footer
- Minimal: logo + links en row
- Separador: línea fina `border-t border-[--hairline]`
- Sin gradientes excesivos, contrapunto de calma

## 4. Sistema de Animación

### Principios
- Performance > espectáculo. Todo vía `transform` y `opacity` (GPU-accelerated)
- `will-change` solo en elementos animados continuamente
- `prefers-reduced-motion` respetado en todas las animaciones

### Catálogo
| Nombre | Gatillo | Efecto |
|---|---|---|
| `fade-up` | `whileInView` | opacity 0→1, y +20px→0 |
| `scale-in` | `whileInView` | scale 0.95→1, opacity 0→1 |
| `stagger-children` | `whileInView` | retraso escalonado a hijos |
| `glow-pulse` | `animate` | box-shadow pulsa 0→15px→0 |
| `particle-float` | `animate` | movimiento browniano suave |
| `count-up` | `whileInView` | número spring de 0→target |

### Timing
```css
--ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1); /* ease-out-expo */
--duration-fast: 0.3s;
--duration-normal: 0.6s;
--duration-slow: 1s;
--stagger-base: 0.1s;
```

## 5. Responsive Strategy

- Mobile first: Tailwind `sm:` / `md:` / `lg:` breakpoints
- Video hero: poster estático en `<md` (ahorro de datos), video en `>=md`
- Timeline: stacked en mobile, alternado en `>=lg`
- Partículas: desactivadas en mobile (`.particles { display: none } @media (max-width: 767px)`)
- Grids: 1 col mobile, 2 cols tablet, 3-4 cols desktop

## 6. Tokens de Diseño (CSS Custom Properties)

Todas las variables nuevas van en `app/globals.css` bajo un bloque `:root` con prefijo `--f-` (forja). Las variables existentes (`--ink`, `--steel`, etc.) se conservan para no romper componentes no tocados.

Nuevas clases utilitarias: `.text-gradient`, `.glass-card`, `.glow-border`, `.section-dark`.
