# Spec: Landing Page Cinematográfica (Forja)

## Requisitos Funcionales

### RF1 — Video Hero
- **RF1.1**: La landing debe reproducir un video de fondo en la sección Hero (autoplay, muted, loop, playsinline).
- **RF1.2**: El video debe cubrir el viewport completo (`object-fit: cover`, `width: 100vw`, `height: 100vh` o `min-height: 100vh`).
- **RF1.3**: Sobre el video debe aplicarse un overlay gradiente que oscurezca la mitad inferior para legibilidad del texto.
- **RF1.4**: En dispositivos `<768px`, el video debe reemplazarse por una imagen poster estática (ahorro de datos).
- **RF1.5**: El video debe cargarse con `preload="metadata"` y `poster="hero-poster.jpg"` para evitar bloqueo de renderizado.
- **RF1.6**: Si el video falla al cargar, debe mostrarse el poster como fallback definitivo.

### RF2 — Contenido del Hero
- **RF2.1**: Headline principal con gradiente de texto (`--electric` → `--plasma`).
- **RF2.2**: Subtítulo en `--mist`, máximo 2 líneas.
- **RF2.3**: Dos CTAs: primario (glass, gradiente) y secundario (borde translúcido).
- **RF2.4**: Trust chips (valoraciones, estrellas) conservados del diseño original.

### RF3 — Sección Stats
- **RF3.1**: Mostrar 3-4 estadísticas con números animados (count-up al entrar en viewport).
- **RF3.2**: Wrapper con efecto glass (`backdrop-blur`, fondo semitransparente).
- **RF3.3**: Labels en uppercase, tracking ancho, color `--mist`.

### RF4 — Sección Features (Dual)
- **RF4.1**: Cards con borde sutil (`--hairline`), fondo `--deep-pit`.
- **RF4.2**: Hover: borde cambia a `--glow`, aparece sombra luminosa.
- **RF4.3**: Iconos con gradiente de color.
- **RF4.4**: Conservar estructura de dos columnas con imagen/screenshot.

### RF5 — How It Works (Timeline)
- **RF5.1**: Steps conectados por línea vertical con gradiente animado.
- **RF5.2**: En desktop: steps alternados izquierda/derecha.
- **RF5.3**: En mobile: steps apilados, línea a la izquierda.
- **RF5.4**: Cada step con número en círculo glass.

### RF6 — Trust Section
- **RF6.1**: Grid de badges/partners (4-6 columnas en desktop).
- **RF6.2**: Micro-animación hover: opacidad 0.5 → 1, escala 1.05.
- **RF6.3**: Sin bordes, solo logos sobre fondo oscuro.

### RF7 — Testimonials
- **RF7.1**: Cards con gradiente sutil de fondo.
- **RF7.2**: Quote en tipografía serif/itálica.
- **RF7.3**: Avatar del autor con borde gradiente.

### RF8 — CTA Final
- **RF8.1**: Fondo con gradiente radial y partículas flotantes (solo desktop).
- **RF8.2**: Texto principal con gradiente animado.
- **RF8.3**: Botones estilo glass premium.
- **RF8.4**: Las partículas deben ser dots luminosos (3-6px) con movimiento aleatorio vía framer-motion.

### RF9 — Footer
- **RF9.1**: Diseño minimal: logo + links horizontales.
- **RF9.2**: Línea separadora fina (`--hairline`).

### RF10 — Header/Nav
- **RF10.1**: Fondo `--asphalt` con `backdrop-blur` (80% opacidad).
- **RF10.2**: Links y logo en `--fog`.
- **RF10.3**: Sticky en scroll.

## Requisitos No Funcionales

### RNF1 — Rendimiento
- **RNF1.1**: Lighthouse Performance ≥ 90.
- **RNF1.2**: LCP (Largest Contentful Paint) < 2.5s.
- **RNF1.3**: Video hero NO debe bloquear el LCP (poster se pinta primero).
- **RNF1.4**: Todas las animaciones usan `transform` y `opacity` (GPU-accelerated), nunca `width`/`height`/`top`/`left`.

### RNF2 — Accesibilidad
- **RNF2.1**: Respetar `prefers-reduced-motion`: desactivar todas las animaciones y partículas.
- **RNF2.2**: Contraste de texto ≥ 4.5:1 (WCAG AA) en todo el contenido.
- **RNF2.3**: Video hero debe tener `aria-hidden="true"` (es decorativo).
- **RNF2.4**: Todos los elementos interactivos deben ser focusables y tener `:focus-visible` visible.

### RNF3 — Responsive
- **RNF3.1**: Mobile (320-767px): todas las secciones legibles y funcionales.
- **RNF3.2**: Tablet (768-1023px): grids de 2 columnas, video opcional (preferir poster).
- **RNF3.3**: Desktop (≥1024px): experiencia completa con video, partículas, timeline alternado.

### RNF4 — Compatibilidad
- **RNF4.1**: Navegadores: Chrome, Firefox, Safari, Edge (últimas 2 versiones).
- **RNF4.2**: El video debe estar en formato MP4 (H.264) con fallback WebM opcional.
- **RNF4.3**: Tailwind v3 (ya instalado), framer-motion v11+ (ya instalado).

### RNF5 — Mantenibilidad
- **RNF5.1**: Componentes nuevos deben seguir la arquitectura existente (`components/landing/`).
- **RNF5.2**: CSS custom properties centralizadas en `globals.css`.
- **RNF5.3**: Los tokens de diseño existentes (`--ink`, `--steel`, etc.) se conservan intactos.
- **RNF5.4**: Los nuevos componentes deben estar indexados en `components/landing/index.ts`.

## Integración con el Sistema Existente

### Lo que se CONSERVA
- `lib/design-tokens.ts` — tokens de diseño (se pueden extender, no modificar)
- `hooks/` — todos los hooks personalizados
- `components/ui/` — componentes base (Container, Section, Card, Button, Badge)
- `app/layout.tsx` — layout con fuentes Sora/Manrope, metadata SEO
- URLs y enlaces externos
- `ARCHITECTURE.md` y `DESIGN.md` (actualizar post-implementación)

### Lo que se MODIFICA
- `app/globals.css` — agregar tokens `--f-*`, clases utilitarias
- `app/page.tsx` — reemplazar Hero, ajustar importación de secciones
- `components/landing/` — modificar o crear nuevos componentes para cada sección

### Lo que se AGREGA
- `components/landing/HeroCinematic.tsx` (nuevo)
- `components/landing/HowItWorksCinematic.tsx` (nuevo, o adaptar existente)
- `public/video/hero.mp4` + `public/video/hero-poster.jpg` (assets generados)

## Dependencias Externas

- **EvoLink API** (`https://api.evolink.ai/v1`): generación del video hero con Seedance 2.0
- **Vercel**: hosting y deploy automático desde branch `main`
- **GitHub**: repositorio `cervereta/landing-parking`, PRs y code review

## Validación

Cada tarea completada debe verificar:
1. El componente renderiza sin errores en `next dev`
2. El diseño coincide con `design.md` en los 3 breakpoints
3. Las animaciones funcionan y no causan layout shift
4. Los datos y enlaces originales se conservan
