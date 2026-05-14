# Proposal: Rediseño Cinematográfico Forja → landing-parking

## Resumen

Transformar la landing actual de ParkCar (`cervereta/landing-parking`) aplicando la estética cinematográfica del skill `forja-landing`: video hero generado por IA, dark premium, partículas, gradientes líquidos y scroll narrativo.

## Motivación

La landing actual tiene un diseño limpio y profesional (neo-brutalista ligero, paleta azul/naranja), pero carece del impacto emocional que un producto de automatización de parking merece. El video hero de Seedance 2.0 + la estética dark premium elevarán la percepción de marca de "herramienta funcional" a "experiencia aspiracional".

## Alcance

### Secciones a transformar
| Sección actual | Acción | Nuevo estilo |
|---|---|---|
| Hero | Reemplazar por video hero | Seedance 2.0 vía EvoLink, overlay gradiente oscuro |
| Stats | Conservar datos, nuevo wrapper | Glassmorphism dark + contador animado |
| DualFeatures | Adaptar cards | Cards con borde luminoso + hover glow |
| HowItWorks | Conservar lógica, nuevo skin | Timeline con partículas conectivas |
| TrustSection | Fusionar con stats | Badge grid con micro-animaciones |
| Testimonials | Estilo cinematográfico | Cards con parallax sutil + quotes estilizados |
| CTASection | Potenciar | CTA inmersivo con partículas de fondo |
| Footer | Minimal dark | Footer con gradiente sutil |

### Lo que NO se toca
- Lógica de negocio (datos, hooks, enlaces)
- SEO metadata
- URLs de redirección (`parking.cerveretadev.es`)
- `ARCHITECTURE.md` y `DESIGN.md` (se actualizarán post-implementación)

## Stack
- **Base**: Next.js 16 + React 19 + Tailwind 3 + framer-motion (ya presente)
- **Nuevo**: Video HTML5 `<video>` (Hero), Canvas/partículas (framer-motion `useMotionValue`)
- **Generación video**: Seedance 2.0 vía EvoLink API (script `generate_hero.py`)
- **Fuentes**: Sora (display) + Manrope (body) → se conservan

## Riesgos
- El video hero puede pesar >5MB → lazy load + placeholder poster
- Seedance puede tardar en generar → se usa un video placeholder temporal mientras se genera
- Compatibilidad mobile → `object-fit: cover` + fallback estático en redes lentas

## Éxito
- Landing desplegada en Vercel con URL `cerveretadev.pages.dev`
- Video hero funcionando (autoplay, muted, loop)
- Estética dark premium consistente en todas las secciones
- Lighthouse ≥ 90 en Performance
