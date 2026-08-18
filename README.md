# ML y JV Corretajes e Inversiones — sitio web

Sitio construido con **Astro + Tailwind CSS**, inspirado en el diseño entregado
(Google Stitch) pero reorganizado como un proyecto real de componentes, con
tipografía, paleta y estructura pensadas específicamente para una corredora
independiente especializada en la Región de Ñuble.

## Dirección de diseño

- **Paleta**: navy `#1a365d` (marca), dorado champagne `#c9a24a` (acento),
  fondo papel cálido `#f8f6f1`, grises piedra para texto secundario.
- **Tipografía**: Playfair Display (serif, titulares) + Manrope (UI, botones,
  navegación) + Work Sans (cuerpo de texto), tal como pide el brief.
- **Elemento de firma**: las coordenadas de la Región de Ñuble (36.6°S 72.1°W)
  aparecen como un pequeño "eyebrow" recurrente, reforzando el posicionamiento
  de experta hiperlocal.

## Estructura

```
src/
  components/   Header, Footer, BottomNav, PropertyCard, ContactForm, Coordinates
  data/         properties.js — catálogo de propiedades (fuente única de datos)
  layouts/      Layout.astro — <head>, header, footer y nav inferior compartidos
  pages/
    index.astro                Home
    propiedades/index.astro    Listado con filtros (comuna / tipo) en cliente
    propiedades/[slug].astro   Ficha de propiedad (ruta dinámica)
    sobre-mi.astro             Sobre mí
    contacto.astro             Contacto (formulario + mapa)
    terminos.astro             Términos y condiciones
  styles/global.css
```

Las 6 pantallas del brief están cubiertas, más una página de detalle de
propiedad generada dinámicamente para cada ítem de `properties.js` (basta con
agregar un objeto nuevo al arreglo para publicar una propiedad más).

## Cómo correrlo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera /dist (sitio estático)
npm run preview   # sirve /dist localmente
```

## Notas

- El formulario de contacto y el de la ficha de propiedad están maquetados
  pero no conectados a un backend: apuntan a `action="#"`. Para producción,
  conéctalos a un endpoint (Formspree, Resend, un endpoint de Astro, etc.).
- El mapa de Contacto usa un iframe de Google Maps embebido (sin API key).
- Los filtros de "Propiedades" funcionan en el cliente con JavaScript simple
  (sin dependencias externas).
- Los números de teléfono/WhatsApp/correo son placeholders del brief original;
  reemplázalos por los datos reales antes de publicar.
