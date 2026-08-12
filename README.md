# TGloves — sitio web

Sitio corporativo y catálogo de guantes de protección industrial TGloves (Ecuador).

## Stack

- **Next.js 15 (App Router)** con generación estática (SSG) de todas las rutas — mejor base para SEO y LCP.
- **TypeScript** y **Tailwind CSS**.
- **Poppins** vía `next/font` (self-hosted, sin CLS por fuentes).
- Despliegue en **Vercel**.

## Estructura de rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Home: hero, catálogo con filtros, bloques T-Elite y T-MAX, guía de tallas, normativa EN 388 y EN ISO 374, CTA |
| `/guantes-proteccion-mecanica` | PLP mecánica con filtros de propiedades |
| `/guantes-proteccion-mecanica/[slug]` | 6 fichas de producto |
| `/guantes-proteccion-quimica` | PLP química con filtro de tipo de recubrimiento y químicos ensayados |
| `/guantes-proteccion-quimica/[slug]` | 3 fichas de producto T-MAX |
| `/contacto` | Sedes Quito y Guayaquil + solicitud de información |
| `/sitemap.xml`, `/robots.txt` | Generados por Next.js |

## Contenido

Los 9 productos viven en `src/lib/products.ts` (marcaje EN 388, niveles de permeación EN ISO 374, materiales,
tallas, embalaje, certificados y casos de uso extraídos de las fichas técnicas). Los datos de contacto,
el número de WhatsApp y los mensajes precargados por tipo de usuario están en `src/lib/site.ts`.

Las fichas técnicas en PDF se sirven desde `public/fichas/` y las imágenes optimizadas a WebP desde `public/images/`.

## SEO

- Metadatos por página con canónicas, Open Graph y Twitter Cards.
- Datos estructurados JSON-LD: `Organization`, `WebSite`, `ItemList`, `CollectionPage`, `Product` y `BreadcrumbList`.
- `priority` + `fetchPriority="high"` en las imágenes del hero, banners de categoría y primeras tarjetas del grid.
- Imágenes con `width`/`height` o `fill` y `sizes` explícitos para evitar CLS.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Pendiente

El logotipo y el favicon son provisionales (`public/logo-tgloves.svg`, `public/icon.svg`): reemplazarlos por
los archivos oficiales de marca manteniendo los nombres.
