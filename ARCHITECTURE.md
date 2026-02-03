# ParkCar Landing - Arquitectura de Diseño

## Resumen de Decisiones de Diseño

### 1. Sistema de Diseño

**Tokens Centralizados** (`lib/design-tokens.ts`)
- Paleta de colores completa con primarios, secundarios, neutros y semánticos
- Sistema de espaciado consistente basado en una escala de 4px
- Tipografía con font-family, tamaños y pesos predefinidos
- Breakpoints, radios de borde y sombras estandarizados

**Componentes Base**
- **Container**: Responsivo con variantes de tamaño (sm, md, lg, full)
- **Section**: Gestiona background y espaciado de secciones
- **Card**: Variantes (default, elevated, outline) con hover effects
- **Pill**: Componente para badges y etiquetas
- **Button**: Refactorizado para usar variantes consistentes y eliminar duplicación

### 2. Arquitectura de Componentes

**Layout**
- **Header**: Navegación responsiva con menú hamburguesa en móvil
- **Footer**: Secciones dinámicas basadas en configuración
- **MainLayout**: Wrapper principal que combina Header y Footer

**Landing Components**
- **Hero**: Animaciones framer-motion con staggered children
- **Features**: Grid de FeatureCard con variantes de color
- **Stats**: Animaciones CountUp con IntersectionObserver
- **HowItWorks**: StepCard con números de paso
- **Testimonials**: Carrusel infinito con hover pause
- **CTASection**: Background pattern con gradiente

**Hooks Personalizados**
- **useInView**: Hook genérico para animaciones scroll-triggered usando IntersectionObserver

### 3. Optimizaciones de Rendimiento

**CSS**
- Utilidades reutilizables: `.text-balance`, `.animate-in-view`
- Animaciones blob optimizadas con combinación de keyframes
- Sistema de elevaciones para sombras consistentes

**Componentes**
- Uso de `loading="lazy"` en imágenes
- Props memoizadas donde es aplicable
- React Compiler habilitado en next.config.ts

### 4. Accesibilidad

- `aria-labels` en elementos interactivos
- Focus states visibles
- Menú hamburguesa con `aria-expanded`
- Contraste de color WCAG AA compliant

### 5. Estructura de Carpetas

```
app/
├── layout.tsx          # Configuración principal
├── page.tsx            # Landing page
└── globals.css         # Estilos globales

components/
├── layout/             # Componentes de layout
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── MainLayout.tsx
├── landing/            # Componentes de landing
│   ├── Hero/
│   ├── Features/
│   ├── Stats/
│   ├── HowItWorks/
│   ├── Testimonials/
│   └── CTASection/
└── ui/                 # Componentes de UI reutilizables
    ├── Button.tsx
    ├── Container.tsx
    ├── Section.tsx
    ├── Card.tsx
    ├── Pill.tsx
    ├── CountUp.tsx
    ├── FeatureCard.tsx
    ├── StepCard.tsx
    └── TestimonialCard.tsx

lib/
├── utils.ts            # Funciones utilitarias
├── design-tokens.ts    # Tokens de diseño
└── hooks/
    └── useInView.ts    # Hook para animaciones

types/
└── index.ts            # Tipos TypeScript compartidos
```

### 6. Dependencias Tecnológicas

**Framework**: Next.js 16 con React 19
**Estilos**: Tailwind CSS v4
**Animaciones**: Framer Motion
**Tipografía**: Outfit (Google Fonts)
**Iconos**: Lucide React
**Variantes**: class-variance-authority (cva)

### 7. Próximos Pasos Sugeridos

- [ ] Implementar Storybook para documentación de componentes
- [ ] Añadir tests con Jest + React Testing Library
- [ ] Implementar sistema de tema claro/oscuro
- [ ] Añadir integración con analytics
- [ ] Crear componentes de loading/skeleton
- [ ] Implementar progressive web app (PWA) features

### 8. Despliegue en Producción (Vercel)

**Proyectos configurados:**
- **Landing principal**: `landing-parking` 
  - URL: https://landing-parking-h5sywllpw-cerveretadevs-projects.vercel.app
  - Comando: `vercel --prod`
- **Storybook**: `landing-parking-storybook`
  - URL: https://landing-parking-storybook-572r00tyk-cerveretadevs-projects.vercel.app
  - Comandos: `npm run build-storybook && cd storybook-static && vercel --prod`

**Receta rápida para futuros deploys:**
```bash
# 1. Deploy landing (desde repo root)
vercel --prod

# 2. Deploy Storybook (desde repo root)
npm run build-storybook
cd storybook-static && vercel --prod
```

**Notas importantes:**
- Ambos proyectos usan URLs automáticas de Vercel (no dominio personalizado)
- El proyecto principal usa framework preset Next.js
- Storybook se despliega como proyecto "Other" apuntando a la carpeta `storybook-static`
