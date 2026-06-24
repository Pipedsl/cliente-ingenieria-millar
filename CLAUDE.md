# CLAUDE.md — Ingeniería Millar (proyecto)

Landing page estática para Ingeniería Millar (consultoría técnica minera, Chile).

## Stack

- **Astro 5** (static output) · **React 19** (solo islands) · **Tailwind v4** (`@tailwindcss/vite`, tokens en `@theme`)
- Fuentes self-host (`@fontsource-variable`: Bricolage Grotesque display + Inter body)
- Formulario sin backend: **Web3Forms** · Sitemap: `@astrojs/sitemap` · Deploy: **Vercel** (static, autodetección)

## Comandos

```bash
npm install
npm run dev        # localhost:4321
npm run build      # → dist/
npm run preview
```

## Arquitectura

- **Contenido centralizado:** `src/data/site.ts` — TODO el texto, servicios, sectores, cobertura, contacto. **Editar aquí, nunca hardcodear en componentes.**
- **Tokens visuales:** `src/styles/global.css` (`@theme`). Paleta negro + cobre/naranja. Clases: `bg-ink`, `bg-bone`, `text-copper-bright`, `font-display`, etc.
- **Guía de diseño:** `DESIGN_SYSTEM.md` (derivada de skill ui-ux-pro-max + brief).
- **Layout:** `src/layouts/Layout.astro` — SEO (meta + OG + Twitter + JSON-LD ProfessionalService), fuentes, e IntersectionObserver que activa animaciones `.reveal`.
- **Página:** `src/pages/index.astro` ensambla las secciones.
- **Secciones estáticas:** `src/components/sections/` (Hero, About, Services + ServiceAccordion island, Sectors, Contact, Footer).
- **Islands interactivos:** `src/components/interactive/` (Header + MobileNav, ChileMap, ContactForm, WhatsAppFloat).

## Convenciones

- **Iconos:** Lucide (`lucide-react`), nunca emojis. En `.astro` Astro los renderiza a SVG estático (SSR). En islands, importar **solo los iconos usados** por nombre (no `import *` — infla el bundle).
- **Animaciones:** 150–300ms, `transform`/`opacity`, respetan `prefers-reduced-motion` (global). Para revelar al scroll: clase `reveal` (+ opcional `data-delay`).
- **Accesibilidad:** WCAG 2.2 AA. Foco visible global, contraste ≥4.5:1, touch ≥44px. CTAs usan `text-ink` sobre `bg-copper-bright` (contraste).
- **Idioma:** español. Spanish copy.

## Configuración pendiente

- `PUBLIC_WEB3FORMS_KEY` (en `.env` local y en Vercel) — sin ella el formulario muestra error controlado. Generar gratis en web3forms.com.
- Imágenes: placeholders Unsplash en `Hero.astro` y `About.astro`. Ver `OPCIONES_IMAGENES.md` para los sets que el cliente debe elegir. Migrar definitivas a `src/assets/` + `astro:assets`.
- Teléfono/WhatsApp y redes en `site.ts` (pendientes de confirmación del cliente).

## Calidad (verificado)

Lighthouse desktop: **Performance 100 · Accessibility 100 · Best Practices 100 · SEO 100** · LCP 0.5s · CLS 0.
Antes de cada entrega: `npm run build` + revisar `npm run preview` + (opcional) `/web-quality-audit`.

## Deploy (Vercel)

Vercel autodetecta Astro (build `npm run build`, output `dist/`). Configurar `PUBLIC_WEB3FORMS_KEY` en Environment Variables. Apuntar dominio `ingenieriamillar.cl`. SSL automático.
