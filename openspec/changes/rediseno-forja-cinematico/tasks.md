# Tasks: Rediseño Cinematográfico Forja

## Pre-implementación

- [ ] **T0 — Setup**: Instalar `openspec` CLI en el entorno (si aplica) o trabajar con spec manual
- [ ] **T0.1 — Branch**: Crear branch `feat/rediseno-cinematico` desde `main`

## Fase 1: Fundamentos Visuales

- [ ] **T1 — CSS Tokens**: Agregar custom properties `--f-*` en `app/globals.css`
  - Paleta Midnight Asphalt (--asphalt, --deep-pit, --elevated, --electric, --ember, --plasma)
  - Gradientes (--hero-overlay, --card-glow, --cta-blaze)
  - Clases utilitarias (.text-gradient, .glass-card, .glow-border, .section-dark)
  - Timing tokens (--ease-cinematic, --stagger-base)

- [ ] **T2 — Background global**: Cambiar `body` bg de claro a `--asphalt`, texto a `--fog`
  - Links y selecciones adaptados a la paleta oscura

## Fase 2: Video Hero

- [ ] **T3 — Generar video hero**: Ejecutar `scripts/generate_hero.py` con prompt ParkCar
  - API: EvoLink + Seedance 2.0
  - Descargar resultado a `public/video/hero.mp4`
  - Generar poster frame: `public/video/hero-poster.jpg`

- [ ] **T4 — Nuevo componente `HeroCinematic.tsx`**
  - `<video>` con autoplay, muted, loop, playsinline, object-fit: cover
  - Overlay gradiente `--hero-overlay`
  - Contenido: headline gradiente, subtitle, CTAs glass, trust chips
  - Partículas sutiles vía framer-motion (opcional, solo desktop)
  - Fallback: `<768px` muestra poster estático en vez de video

- [ ] **T5 — Integrar HeroCinematic en `app/page.tsx`**
  - Reemplazar `<Hero />` por `<HeroCinematic />`
  - Conservar datos de contenido originales (títulos, CTAs)

## Fase 3: Secciones

- [ ] **T6 — StatsSection** (ya existe `StatsSection.tsx`)
  - Nuevo wrapper glassmorphism (`backdrop-blur-xl bg-[--deep-pit]/60`)
  - Animación count-up en números vía `useSpring`
  - Conservar datos originales

- [ ] **T7 — DualFeatures** (ya existe `DualFeatures.tsx`)
  - Cards con `border border-[--hairline]` y `bg-[--deep-pit]`
  - Hover: `border-[--glow]` + glow shadow
  - Iconos con gradiente
  - Conservar datos y estructura

- [ ] **T8 — HowItWorks** (ya existe `HowItWorks.tsx`)
  - Nuevo `HowItWorksCinematic.tsx` o adaptación del existente
  - Timeline con línea gradiente animada
  - Steps alternados en desktop, stacked en mobile
  - Números de paso: círculos glass

- [ ] **T9 — TrustSection + Stats** (ya existe `TrustSection.tsx`)
  - Badge grid con micro-animaciones
  - Opacidad 0.5 → 1 en hover + escala
  - Conservar datos

- [ ] **T10 — Testimonials** (ya existe `Testimonials.tsx`)
  - Cards con `bg-gradient-to-br from-[--deep-pit] to-transparent`
  - Quotes con `font-serif italic`
  - Avatar con borde gradiente

- [ ] **T11 — CTASection** (ya existe `CTASection.tsx`)
  - Fondo con gradiente radial centrado
  - Partículas flotantes (framer-motion, 5-8 dots)
  - Botones glass premium
  - Texto principal con gradiente

- [ ] **T12 — Footer** (ya existe `Footer.tsx`)
  - Minimal dark: logo + links
  - Línea separadora `border-[--hairline]`

## Fase 4: Pulido

- [ ] **T13 — Header/Nav** (ya existe `Header.tsx`)
  - Adaptar a dark: fondo `--asphalt/80` con `backdrop-blur`
  - Links y logo en `--fog`

- [ ] **T14 — Responsive QA**
  - Verificar todas las secciones en mobile (375px), tablet (768px), desktop (1440px)
  - Asegurar que partículas y video se desactivan en mobile
  - Test `prefers-reduced-motion`

- [ ] **T15 — Performance**
  - Lazy load del video hero (`preload="metadata"`)
  - Poster image optimizada (WebP, <50KB)
  - Lighthouse audit → objetivo ≥ 90 Performance

## Fase 5: Deploy

- [ ] **T16 — PR**: Crear PR desde `feat/rediseno-cinematico` → `main`
  - Descripción: resumen del proposal.md
  - Screenshots antes/después (si es posible)
  - Checklist de secciones

- [ ] **T17 — Vercel Deploy**
  - `vercel --prod` desde el branch `main` post-merge
  - Verificar URL `cerveretadev.pages.dev`
  - Smoke test: todas las secciones, video, responsive
