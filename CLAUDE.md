# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos de Desarrollo

```bash
npm run dev          # Servidor de desarrollo (localhost:3000)
npm run build        # Build de producción
npm run lint         # ESLint
npm run test         # Jest tests
npm run test:watch   # Tests en modo watch
npm run test:coverage # Tests con cobertura
npm run storybook    # Storybook (localhost:6006)
npm run build-storybook # Build de Storybook
```

## Deploy a Producción

```bash
# Landing principal
vercel --prod

# Storybook
npm run build-storybook && cd storybook-static && vercel --prod
```

## Stack Tecnológico

- **Next.js 16** con App Router y React 19
- **React Compiler** habilitado (`reactCompiler: true` en next.config.ts)
- **Tailwind CSS v4** con PostCSS
- **Framer Motion** para animaciones
- **class-variance-authority (cva)** para variantes de componentes
- **Lucide React** para iconos

## Arquitectura

### Sistema de Diseño

Los tokens de diseño centralizados están en `lib/design-tokens.ts`:
- Paleta de colores (primary, secondary, neutral, semantic)
- Sistema de espaciado basado en escala de 4px
- Tipografía con Outfit como fuente principal
- Breakpoints, radios de borde y sombras estandarizados

### Estructura de Componentes

- **`components/ui/`**: Componentes base reutilizables (Button, Card, Container, Section, Pill)
- **`components/landing/`**: Secciones específicas de la landing (Hero, Features, Stats, HowItWorks, Testimonials, CTASection)
- **`components/layout/`**: Estructura de página (Header, Footer, MainLayout)

### Hooks Personalizados

- `lib/hooks/useInView.ts`: Animaciones scroll-triggered con IntersectionObserver
- `lib/hooks/useAnalytics.ts`: Integración con analytics
- `lib/hooks/useServiceWorker.ts`: Registro de service worker

### Patrones de Variantes

Los componentes usan `cva` para variantes consistentes. Ejemplo:
```typescript
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { primary: "...", secondary: "..." },
    size: { sm: "...", md: "...", lg: "..." }
  }
});
```

### Path Aliases

Configurado `@/*` que mapea a la raíz del proyecto.

## Testing

- Tests en `__tests__/` usando Jest + React Testing Library
- Configuración en `jest.config.ts` con setup en `jest.setup.ts`
- Test individual: `npm test -- __tests__/ui/Button.test.tsx`
