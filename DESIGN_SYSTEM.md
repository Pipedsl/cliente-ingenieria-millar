# Design System — Ingeniería Millar (guía para desarrollo)

> Derivado de la skill `ui-ux-pro-max` + brief del cliente. **Fuente de verdad visual.**
> Tokens reales en `src/styles/global.css` (`@theme`). Contenido en `src/data/site.ts`.

## Dirección estética

**Minimalista · premium · oscuro · industrial-minero · aspiracional.**
Mucho espacio negativo, tipografía grande con carácter, transiciones suaves, detalles
"técnicos" (líneas finas, numeración, grid sutil). Alterna secciones oscuras (negro) con
una o dos claras (hueso/crema) para ritmo. Evitar: visuales baratos, animaciones rápidas/bruscas, emojis.

## Color (usar tokens Tailwind, NO hex crudo)

| Token | Uso |
|---|---|
| `bg-ink` / `bg-ink-soft` | Fondos oscuros base / cards oscuras |
| `bg-bone` / `bg-bone-soft` | Secciones claras (crema cálido) |
| `text-copper` / `text-copper-bright` | Acento, eyebrows, iconos, links |
| `bg-copper` / `bg-copper-bright` | CTAs primarios |
| `text-on-dark` / `text-on-dark-muted` | Texto sobre oscuro |
| `text-on-light` / `text-on-light-muted` | Texto sobre claro |
| `border-ink-line` / `border-bone-line` | Bordes según fondo |

Contraste mínimo 4.5:1. Acento cobre solo para 1 cosa memorable por sección.

## Tipografía

- **Display (h1–h4):** `font-display` (Bricolage Grotesque) — ya por defecto en headings.
- **Body:** `font-sans` (Inter) — por defecto en body.
- Escala: `text-6xl/5xl` hero, `text-3xl/4xl` títulos sección, `text-base/lg` cuerpo.
- Eyebrows: `text-sm uppercase tracking-widest text-copper-bright`.

## Interacción / animación (CRÍTICO)

- Micro-interacciones **150–300ms**, `ease-out` al entrar. Nunca >500ms.
- Solo `transform`/`opacity` (no animar width/height/top/left).
- **Scroll reveal:** añade clase `reveal` (+ opcional `data-delay="80ms"`) a bloques; el observer del Layout los activa. Stagger 30–60ms entre items.
- Hover en cards: `translateY(-4px)` + borde/realce cobre, sombra suave.
- `cursor-pointer` en todo clickable. `:focus-visible` ya estilizado global.
- **Respeta `prefers-reduced-motion`** (ya global; no romper).

## Iconos

- **Lucide React** (`lucide-react`), NUNCA emojis. Nombres ya en `site.ts` (`service.icon`, `sector.icon`).
- Stroke consistente (1.5–2px), tamaño por tokens (24–32px). Color `text-copper-bright` o `text-on-dark`.

## Layout / responsive

- Mobile-first. Breakpoints Tailwind: `sm 640 / md 768 / lg 1024 / xl 1280`.
- Container: `max-w-6xl mx-auto px-6 md:px-8`.
- Ritmo vertical de secciones: `py-20 md:py-28 lg:py-32`.
- Touch targets ≥44px. Sin scroll horizontal. `min-h-dvh` (no 100vh) en hero.

## UX (forms y nav)

- Header sticky, fondo translúcido `bg-ink/80 backdrop-blur` al hacer scroll; nav activa resaltada; móvil = menú hamburguesa accesible (aria-expanded).
- Form: labels visibles (no solo placeholder), `type` semántico (email/tel), validación on-blur, error bajo el campo con `role="alert"`, estado loading en submit, mensaje éxito/error. Honeypot anti-spam.
- Un CTA primario por sección.

## Secciones (orden) y data

1. Header (nav `site.ts` → `nav`)
2. Hero (`hero`) — `min-h-dvh`, imagen de fondo minería + overlay oscuro, título grande, 2 CTAs
3. Sobre nosotros (`about`) — split texto/imagen + 3 highlights (números grandes cobre)
4. Servicios (`services`, 6) — grid cards con icono Lucide; **interacción: expandir para ver `detail`**
5. Sectores (`sectors`, 8) — grid compacto con iconos
6. Cobertura (`coverage`) — **mapa de Chile estilo GTA** (dark, estilizado) + pins cobre con pulse + tooltip ciudad
7. Contacto (`contact`) — form Web3Forms + botón WhatsApp + email
8. Footer (`footer`) — info cliente protagonista + crédito Webiados discreto

## Imágenes

Intercambiables. Usar placeholders Unsplash temáticos (minería/cobre/industria) vía
parámetros `?auto=format&fit=crop&w=...&q=70`. Documentar el set elegido. `loading="lazy"`
+ `width`/`height` (evitar CLS) salvo la del hero (eager + alta prioridad).
