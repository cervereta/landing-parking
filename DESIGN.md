# Design System: ParkCar

## 1. Visual Theme & Atmosphere

ParkCar transmite **confianza, modernidad y simplicidad**. La estética es:
- **Limpia y profesional**: Espacios generosos, sin clutter visual
- **Amigable y accesible**: Formas redondeadas, colores cálidos
- **Tecnológica pero humana**: 3D moderno sin perder calidez
- **Mobile-first**: Prioridad en experiencia móvil

El mensaje visual es: *"Alquilar parking privado es fácil, seguro y económico"*

## 2. Color Palette & Roles

| Nombre Descriptivo | Hex | Rol Funcional |
|-------------------|-----|---------------|
| **Celeste Eléctrico** | `#3b82f6` | Color primario - botones principales, enlaces, acentos |
| **Azul Profundo** | `#2563eb` | Hover estados, elementos activos |
| **Naranja Cálido** | `#f97316` | Color secundario - CTAs secundarios, destacados, energía |
| **Naranja Intenso** | `#ea580c` | Hover de elementos naranja |
| **Verde Éxito** | `#22c55e` | Confirmaciones, estados positivos, disponibilidad |
| **Rojo Alerta** | `#ef4444` | Errores, advertencias importantes |
| **Gris Claro** | `#f8fafc` | Background principal |
| **Gris Medio** | `#64748b` | Texto secundario, descripciones |
| **Azul Noche** | `#0f172a` | Texto principal, headings |
| **Blanco Puro** | `#ffffff` | Cards, superficies elevadas |

### Gradientes Especiales
- **Hero Gradient**: Degradado sutil de celeste claro a blanco
- **CTA Gradient**: Azul profundo a celeste eléctrico

## 3. Typography Rules

- **Familia Principal**: Inter (sans-serif)
- **Headings**: Peso 700-800, tight letter-spacing (-0.02em)
- **Body**: Peso 400-500, letter-spacing normal
- **Small/Labels**: Peso 500-600, uppercase para etiquetas

### Escala Tipográfica
| Elemento | Tamaño | Peso | Line-height |
|----------|--------|------|-------------|
| H1 (Hero) | 48-64px | 800 | 1.1 |
| H2 | 32-40px | 700 | 1.2 |
| H3 | 24px | 600 | 1.3 |
| Body Large | 18px | 400 | 1.6 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 500 | 1.5 |

## 4. Component Stylings

### Buttons
- **Primario**: Fondo `#3b82f6`, texto blanco, padding 16px 32px
- **Borde**: Redondeado completo (pill-shaped) o 12px radius
- **Sombra**: Sutil shadow-sm, elevación en hover
- **Secundario (Naranja)**: Fondo `#f97316`, para acciones destacadas

### Cards/Containers
- **Borde**: 16px border-radius (generously rounded)
- **Background**: Blanco `#ffffff`
- **Sombra**: Sombra sutil difusa (shadow-md)
- **Borde sutil**: 1px border gray-100 opcional

### Inputs/Forms
- **Border**: 1px solid gray-200, 12px radius
- **Focus**: Ring 2px `#3b82f6`, border-color primary
- **Background**: White o gray-50

## 5. Layout Principles

- **Spacing**: Sistema de 8px base (8, 16, 24, 32, 48, 64, 96)
- **Contenedor máximo**: 1280px (max-w-7xl)
- **Padding móvil**: 16px lateral mínimo
- **Padding desktop**: 24-48px lateral
- **Grid**: 12-columnas en desktop, 1 columna móvil
- **Gap estándar**: 24px entre elementos, 48px entre secciones

## 6. Design System Notes for Stitch Generation

### Paleta de Colores Exacta
- Primary Blue: `#3b82f6`
- Primary Blue Dark: `#2563eb`
- Secondary Orange: `#f97316`
- Secondary Orange Dark: `#ea580c`
- Success Green: `#22c55e`
- Background: `#f8fafc`
- Text Primary: `#0f172a`
- Text Secondary: `#64748b`
- White: `#ffffff`

### Descripción Visual para Stitch
"Modern, clean parking app landing page with friendly 3D aesthetics. Use blue (#3b82f6) as primary with warm orange (#f97316) accents. White cards on light gray background. Generous rounded corners (12-16px). Professional yet approachable feel. Mobile-first responsive design. Trust indicators and clear CTAs."

### Elementos Visuales Clave
- Logo 3D con PARK (azul) + CAR (naranja) + pin ubicación
- Iconos de parking/garaje estilo 3D moderno
- Mapa estilizado (no funcional, solo visual)
- Fotos de garajes/parking reales
- Iconos de seguridad (escudo, contrato)
- Imágenes de personas felices usando la app

### Mensajes para Incluir
- "Gana dinero con tu plaza de parking"
- "Alquila plazas privadas al mejor precio"
- "Contrato seguro entre particulares"
- "Disponible en toda España"
