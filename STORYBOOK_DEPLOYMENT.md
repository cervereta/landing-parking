# Storybook - Guía de Despliegue en Producción

## ¿Qué es Storybook?

**Storybook** es una herramienta de desarrollo que sirve como **"catálogo interactivo"** de todos los componentes de tu aplicación.

### Beneficios clave:

1. **Documentación visual**: Muestra cada componente (Button, Card, Hero, etc.) en diferentes estados y variantes
2. **Desarrollo aislado**: Puedes crear y probar componentes sin depender del resto de la aplicación
3. **Pruebas interactivas**: Cambias props, tamaños, colores en tiempo real para ver cómo se comporta
4. **Colaboración**: Diseñadores y PMs pueden ver los componentes sin tocar código
5. **Consistencia**: Garantiza que todos los componentes sigan el sistema de diseño

### Estructura en producción:

```
+-------------------------------------------+
|  [Button]  [FeatureCard]  [Container]    |  ← Componentes
+-------------------------------------------+
|                                           |
|  +-------------------------------------+  |
|  |  Primary  |  Secondary  |  Outline |  |  ← Variantes
|  +-------------------------------------+  |
|                                           |
|  [ Botón interactivo aquí ]              |
|                                           |
|  Props:                                  |
|  • variant: primary                      |
|  • size: medium                          |
|  • disabled: false                       |
+-------------------------------------------+
```

## Comandos disponibles

```bash
# Modo desarrollo (localhost:6006)
npm run storybook

# Construir para producción
npm run build-storybook
```

## Opciones de despliegue en producción

### Opción 1: Desplegar Storybook por separado (Recomendado)

Construye Storybook como un sitio estático independiente:

```bash
npm run build-storybook
```

Esto genera una carpeta `storybook-static/` que puedes subir a:

- **Netlify/Vercel**: Configura un nuevo proyecto apuntando a esa carpeta
- **GitHub Pages**: Automatiza con GitHub Actions
- **Cualquier hosting estático**: AWS S3, Firebase, etc.

**URL resultante**: `https://storybook-tuproyecto.vercel.app`

**Pasos detallados:**

1. Ejecuta `npm run build-storybook`
2. Sube el contenido de `storybook-static/` a tu hosting
3. Configura el dominio (opcional)

### Opción 2: Subdominio en tu mismo dominio

Si tu landing es `parkcar.com`, puedes tener `storybook.parkcar.com`

**Ventajas**: Mantienes todo bajo tu marca

**Ejemplo con Vercel:**
```bash
# En tu proyecto de Storybook
vercel --prod
# Configura el subdominio: storybook.parkcar.com
```

### Opción 3: Ruta protegida (No recomendado)

**⚠️ ADVERTENCIA**: No es la práctica estándar y tiene desventajas.

Podrías servir Storybook desde `/storybook` en tu Next.js, pero:
- Aumenta el bundle innecesariamente
- Expone código interno
- No es la práctica estándar
- Consume recursos del servidor principal

## Configuración recomendada por plataforma

### Vercel (Más fácil)

1. Crea un nuevo proyecto en Vercel
2. Conecta el mismo repositorio
3. Configura:
   - **Framework Preset**: `Other`
   - **Build Command**: `npm run build-storybook`
   - **Output Directory**: `storybook-static`
   - **Install Command**: `npm install`

4. Asigna un dominio personalizado: `storybook.tudominio.com`

### Netlify

1. Crea un nuevo site
2. Configura:
   - **Build command**: `npm run build-storybook`
   - **Publish directory**: `storybook-static`
3. Deploy

### GitHub Pages

Crea un workflow en `.github/workflows/storybook.yml`:

```yaml
name: Storybook

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build-storybook
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

## Seguridad y acceso

### Privado (Recomendado para equipos)

- **VPN**: Solo accesible desde red de la empresa
- **Autenticación**: Basic Auth o OAuth en el servidor
- **IP Whitelisting**: Restringe por direcciones IP

### Público (Solo si no expones lógica sensible)

- Despliega sin restricciones
- Útil para proyectos open source
- Muestra tu sistema de diseño al mundo

## Variables de entorno en producción

Si usas alguna integración que necesite variables de entorno:

```bash
# .env.production
STORYBOOK_GA_ID=GA-XXXXXXXX
```

Pero recuerda: **Storybook es para documentación, no para lógica de negocio**.

## Optimización para producción

Agrega a `.storybook/main.ts`:

```typescript
const config: StorybookConfig = {
  // ... tu config actual
  
  // Optimizaciones para producción
  features: {
    storyStoreV7: true, // Mejora el rendimiento
  },
  
  // Desactiva addons no necesarios en prod
  managerHead: (head) => `
    ${head}
    <meta name="robots" content="noindex"> <!-- Evita indexación -->
  `,
};
```

## Verificación post-despliegue

Una vez desplegado, verifica:

1. **✅ Todos los componentes se muestran**
2. **✅ Las stories funcionan interactivamente**
3. **✅ No hay errores en la consola**
4. **✅ El rendimiento es aceptable** (Lighthouse)
5. **✅ Los controles de props funcionan**
6. **✅ La documentación es clara**

## Mantenimiento

- **Automatiza**: Configura CI/CD para que se actualice en cada push a main
- **Monitorea**: Usa Google Analytics en Storybook si es público
- **Documenta**: Asegúrate de que cada componente tenga descripción
- **Actualiza**: Mantén Storybook y sus addons actualizados
```bash
npm update @storybook/*
```

## FAQ

### ¿Por qué no incluir Storybook en la build de Next.js?

Porque:
- Aumenta el bundle en 10-20MB innecesarios
- Expone código de desarrollo
- Ralentiza la carga de tu landing
- Rompe el propósito de la landing (ventas vs docs)

### ¿Cuándo debería ser público vs privado?

**Público**: Proyectos open source, showcases, design systems compartidos
**Privado**: Productos comerciales, componentes con IP propietaria, equipos grandes

### ¿Qué pasa si no tengo un dominio propio?

Usa las URLs que te dan Vercel/Netlify:
`https://tu-proyecto.vercel.app` o `https://tu-proyecto.netlify.app`

### ¿Y si mi proyecto es privado en GitHub?

Vercel y Netlify pueden acceder a repos privados conectando tu cuenta.

## Próximos pasos

1. Elige tu método de despliegue (recomiendo Vercel)
2. Ejecuta `npm run build-storybook` localmente para probar
3. Configura CI/CD para automatizar
4. Comparte la URL con tu equipo
5. Actualiza esta documentación con tus decisiones específicas

---

**Última actualización**: 2026-01-29  
**Storybook versión**: 10.2.1  
**Next.js versión**: 16.1.6
