# Plan de Implementación — Landing Ingeniería Millar

**CTO/CEO · 2026-06-24**
**Repo:** cliente-ingenieria-millar · **Carpeta:** `/WebiadosClientes/BenjaminMillar`

---

## Objetivo

Landing page estática, moderna, minimalista-profesional-aspiracional. Negro + cobre/naranja (temática minera). Interactiva pero rápida. Sin backend. Deploy Vercel.

## Stack (justificado)

| Capa | Elección | Por qué |
|---|---|---|
| Framework | **Astro 5** | Static-first, islands, Lighthouse 95+ default |
| Interactividad | **React 19** (solo islands) | Mapa, formulario, acordeones — nada más hidrata |
| Estilos | **Tailwind v4** (`@tailwindcss/vite`) | Tokens en `@theme`, cero runtime |
| Fuentes | **@fontsource-variable** (Bricolage Grotesque + Inter) | Self-host, sin latencia Google |
| Formulario | **Web3Forms** | Email a contacto@ sin backend, tier gratis, solo access key pública |
| Sitemap/SEO | **@astrojs/sitemap** + meta + JSON-LD | Contrato exige SEO básico + GSC |
| Deploy | **Vercel** (static output) | Gratis, sin hosting para el cliente |

## Contenido (fuente: Briefing — ya centralizado en `src/data/site.ts`)

- **Hero:** "Ingeniería Millar" / "Asesoría técnica, ingeniería y soluciones para la industria minera" + CTA Contáctanos
- **Sobre Nosotros:** texto largo + 3 pills (+20 años / presencia nacional / enfoque técnico). Fundador: Richard Millar Díaz
- **Servicios (6):** Asesoría técnica minera, Mantención de plantas, Eficiencia de procesos, Procedimientos técnicos, Capacitación, Gestión de proyectos — cada uno con descripción (interacción: acordeón/expandible para "ver más")
- **Sectores (8):** mineras, contratistas, plantas, mantención, operaciones, ingeniería, pymes, capacitación
- **Cobertura:** Mapa Chile estilo GTA + pins Antofagasta · Calama · Santiago · Concepción
- **Contacto:** form (nombre/email/mensaje → email) + WhatsApp + email
- **Footer:** info cliente protagonista + "Diseñado y desarrollado por Webiados" discreto

## Arquitectura de archivos (anti-conflicto entre agentes)

```
BenjaminMillar/
├── package.json, astro.config.mjs, tsconfig.json   [CTO ✓]
├── src/
│   ├── styles/global.css        (tokens @theme)     [CTO ✓]
│   ├── data/site.ts             (todo el contenido)  [CTO ✓]
│   ├── layouts/Layout.astro     (head/SEO/fonts)     [CTO ✓]
│   ├── pages/index.astro        (ensamblaje final)   [CTO — al final]
│   ├── components/
│   │   ├── sections/   ← AGENTE A (no solapa con B)
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── Services.astro + ServiceAccordion.tsx
│   │   │   ├── Sectors.astro
│   │   │   └── Footer.astro
│   │   └── interactive/ ← AGENTE B (no solapa con A)
│   │       ├── Header.astro + MobileNav.tsx
│   │       ├── ChileMap.tsx        (mapa GTA + pins)
│   │       ├── ContactForm.tsx     (Web3Forms)
│   │       └── WhatsAppFloat.astro
│   └── assets/                  (imágenes optimizadas)
└── public/                      (favicon, og, robots)
```

## Ejecución (token-económica)

1. **CTO (Opus):** scaffold + tokens + data + Layout ← *hecho en esta sesión, evita errores base*
2. **Agente A (Sonnet, web-dev):** `components/sections/*` — usa `site.ts`, Context7 para Astro
3. **Agente B (Sonnet, web-dev):** `components/interactive/*` — islands React, Context7 para Astro islands + mapa SVG
   - A y B **en paralelo**, archivos disjuntos → cero conflictos
4. **CTO (Opus):** ensambla `index.astro`, SEO (meta+JSON-LD), `robots.txt`, sitemap, verifica `npm run build`
5. **Agente C (Sonnet, seo+performance):** auditoría final Lighthouse + ajustes — *solo si build OK*

## Decisiones clave

- **Mapa GTA-style:** SVG silueta de Chile, tema dark, calles/grid sutil, pins cobre con glow + pulse, hover → tooltip ciudad. React island liviano (sin librería de mapas pesada).
- **Imágenes — opciones para el cliente:** sistema de placeholders Unsplash temáticos (minería/cobre/industria) intercambiables vía `site.ts`. Se documenta en `OPCIONES_IMAGENES.md` un set A (dramático/oscuro) y set B (luminoso/corporativo) para que el cliente elija. Las del banco audiovisual quedan pendientes de permiso.
- **Formulario:** Web3Forms con `PUBLIC_WEB3FORMS_KEY` en `.env` (placeholder; Felipe genera key real gratis y la pone en Vercel). Honeypot anti-spam. Destino: contacto@ingenieriamillar.cl.
- **WhatsApp:** `+56 9 2638 6458` (placeholder configurable en `site.ts`).

## Verificación

- `npm run build` sin errores
- `npm run preview` → revisar las 7 secciones, responsive (320/768/1920), mapa interactivo, acordeones, form
- Lighthouse: Performance ≥95, SEO ≥95, A11y ≥95
- Footer con crédito Webiados visible y discreto
