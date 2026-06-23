# PROMPT PARA CTO/CEO — Ingeniería Millar Landing Page

**Propósito:** Plan de implementación + brief para diseñador Figma + esqueleto dev  
**Prioridad:** P1 — Cliente espera propuesta visual  
**Plazo estimado:** Design (Figma) 3-5 días → Dev 5-7 días (Astro)

---

## CONTEXTO CLIENTE

**Empresa:** Ingeniería Millar (consultoría técnica minería, 20+ años)  
**Founder:** Richard Millar Díaz, Civil Industrial Engineer  
**Cobertura:** Nacional (Antofagasta, Calama, Santiago, Concepción)  
**Dominio:** ingenieriamillar.cl (ya contratado)  
**Tono:** Corporate, técnico, confiable, moderno (no anticuado)  
**Palette:** Negro + naranjo/café (según brief — "Bulnes Lihn" reference = profundo, técnico)  

**6 servicios** (del brief):
1. Consultoría técnica especializada en minería
2. Mantenimiento de plantas
3. Eficiencia de procesos
4. Procedimientos técnicos documentados
5. Capacitación especializada
6. Gestión de proyectos

---

## STACK RECOMENDADO (JUSTIFICADO)

**Astro 4.x** + React 19 (islands) + Tailwind v4 + Vercel

### Por qué Astro (no Next.js):
- ✅ **Static-first:** Landing estática = zero backend, máxima velocidad
- ✅ **Markdown content:** Fácil mantener servicios, proyectos, blog
- ✅ **Island architecture:** React components SOLO donde hay interacción (no overhead)
- ✅ **Built-in optimizations:** Image optimization, CSS tree-shake, code split automático
- ✅ **Vercel perfect:** Deployment stateless, preview URLs, free hosting
- ✅ **Performance:** Lighthouse 98+ por defecto
- ✅ **DX:** TypeScript, enfoque file-based routing, build rápido

### Alternativas (rechazadas):
- **Next.js:** Overkill para landing estática (requiere servidor, costo)
- **HTML puro:** Demasiado manual, difícil mantener (no escalable a blog/portfolio luego)
- **WordPress:** Cliente no quiere overhead, no tiene hosting pago

---

## ARQUITECTURA DE LANDING

### Estructura general (5 secciones principales + header/footer)

```
┌─────────────────────────────────────────────┐
│          HEADER (sticky, navegación)        │
├─────────────────────────────────────────────┤
│   HERO (full-width image + call-to-action)  │
│   • Headline: "Ingeniería Minera que        │
│              Genera Valor"                  │
│   • Subheadline: 20+ años de experiencia    │
│   • CTA: "Contactar ahora" (WhatsApp)       │
├─────────────────────────────────────────────┤
│        SOBRE NOSOTROS (split layout)        │
│  [Text] | [Image: founder, mine, team]     │
│  • Richard Millar background                │
│  • 20+ años en minería                      │
│  • Cobertura nacional                       │
├─────────────────────────────────────────────┤
│   SERVICIOS (6 cards en grid 3-col)         │
│  [Card] [Card] [Card]                       │
│  [Card] [Card] [Card]                       │
│  • Hover: lift effect, icon animation       │
│  • Click: modal o scroll a detalle          │
├─────────────────────────────────────────────┤
│  SECTORES ATENDIDOS (carousel o grid)       │
│  • Antofagasta, Calama, Santiago, etc.      │
│  • Mapa de Chile con puntos activos         │
├─────────────────────────────────────────────┤
│   TESTIMONIOS / PROYECTOS (carousel)        │
│  • 2-3 casos de éxito breves                │
│  • Metrics: "200+ plantas optimizadas"      │
├─────────────────────────────────────────────┤
│  CONTACT CTA (full-width, high-contrast)    │
│  • Email, teléfono, WhatsApp                │
│  • Form opcional (si CRM disponible)        │
├─────────────────────────────────────────────┤
│          FOOTER (links, social)              │
└─────────────────────────────────────────────┘
```

---

## SECCIONES DETALLADAS (para diseñador en Figma)

### 1. HEADER (sticky)
- Logo Ingeniería Millar (left)
- Nav: Servicios | Sectores | Nosotros | Contacto (center)
- CTA button: "Contactar" o WhatsApp (right)
- Background: transparent en scroll, color sólido al hover (dark)
- Mobile: hamburger menu
- **Design note:** Minimalista, sin exceso

### 2. HERO
- Full-width image: minería, planta industrial, persona técnica
- Overlay gradient: negro 40% (legibilidad)
- Headline: "Ingeniería Minera que Genera Valor" (grande, bold)
- Subheadline: "20+ años optimizando plantas en toda Chile"
- CTA: botón naranja/café "Contactar ahora" → scroll a contact
- Complementario: ícono scroll down (animate subtle)
- **Design note:** Imagen debe ser PROFESIONAL (minería real, no stock fake)

### 3. SOBRE NOSOTROS (About)
- **Layout:** 2 columns (texto left, image right)
  - **Texto:**
    - Headline: "Quiénes somos"
    - Richard Millar Díaz bio (2 párrafos max)
    - 20+ años, Civil Industrial, nacional scope
    - "Desde 2004 ayudamos a plantas a..."
    - Highlight points (bullets):
      - Especialistas en consultoría técnica minería
      - Cobertura Antofagasta → Concepción
      - Procesos ISO, procedimientos documentados
  - **Imagen:** Richard Millar (profesional headshot) + background de planta
- **Design note:** Corporate pero accesible (no intimidante)

### 4. SERVICIOS (Grid 3 columns)
Cada card:
- **Icon** (top, 64px, naranja/café) — correspondiente al servicio
- **Título:** "Consultoría Técnica" etc. (20px bold)
- **Descripción:** 2-3 líneas claras (14px)
- **Hover:** lift effect (shadow), icon slightly bigger, subtle color shift
- **Click:** (React island) modal o collapse con más detalles
- **Cards:**
  1. Consultoría Técnica → "Análisis profundo de procesos mineros"
  2. Mantenimiento de Plantas → "Optimización de ciclos de mantenimiento"
  3. Eficiencia Procesos → "Reducción de tiempos y costos operacionales"
  4. Procedimientos Técnicos → "Documentación ISO y procedimientos"
  5. Capacitación → "Training especializado para equipos"
  6. Gestión Proyectos → "Coordinación e implementación de mejoras"

### 5. SECTORES ATENDIDOS
- Headline: "Cobertura Nacional"
- Visual: Mapa de Chile simplificado (SVG, color claro) con 4 puntos:
  - Antofagasta (rojo/naranja)
  - Calama (rojo/naranja)
  - Santiago (rojo/naranja)
  - Concepción (rojo/naranja)
- Cada punto: hover → popup "Atendemos desde [ciudad]"
- **Design note:** Limpio, geográfico, comunica cobertura

### 6. TESTIMONIOS / PROYECTOS
- Carousel (3 visible, slide on scroll/click)
- Cada tarjeta:
  - Quote: "Aumentamos eficiencia 25% en 6 meses..." (italics)
  - Author: "Gerente Operaciones, Planta X" (small, gray)
  - Metric (optional): "Ahorro $500K anuales"
- **Design note:** Credibilidad sin ser fake

### 7. CONTACT CTA (Call-to-Action)
- Full-width section, high-contrast (dark background + light text o inverse)
- Headline: "Listo para optimizar tu operación?"
- 3 options (con icons):
  - 📧 Email: contacto@ingenieriamillar.cl
  - 📞 Teléfono: [número del cliente]
  - 💬 WhatsApp: [número con link directo]
- Optional form (Formspree/Basin si quiere capturar leads, pero NO obligatorio)
- **Design note:** Clear, no friction

### 8. FOOTER
- Links: Home | Servicios | Nosotros | Contacto | Privacidad
- Social: LinkedIn (profesional), mail
- Copyright: "© 2026 Ingeniería Millar"
- Minimal, dark background

---

## GUÍA PARA DISEÑADOR (Figma)

### Color System
- **Primary:** Negro (#1a1a1a o similar)
- **Accent:** Naranja/café (#D4733E o similar — "Bulnes Lihn" warmth)
- **Secondary:** Gris oscuro (#404040) para backgrounds
- **Text:** Blanco (#FFFFFF) sobre dark, negro sobre light
- **Hover:** Accent color + 20% brightness

### Typography
- **Display (headlines):** Bricolage Grotesque o similar (distinctive, técnico)
  - H1: 48px bold (desktop), 32px (mobile)
  - H2: 36px bold (desktop), 24px (mobile)
- **Body (text):** Inter o similar (legible, neutral)
  - Body: 16px (desktop), 14px (mobile)
  - Small: 12px (captions, footer)
- **Spacing scale:** 8px grid (8, 16, 24, 32, 48, 64, 96)

### Component Patterns
- **Buttons:** Filled (accent color) | Outline (white stroke)
  - Hover: brightness +10%, cursor pointer
  - States: normal, hover, active, disabled
- **Cards:** White/light bg, subtle shadow (0 4px 12px rgba(0,0,0,0.1))
  - Hover: lift effect (+4px offset), shadow increase
- **Form inputs:** Dark bg, light border, white text
  - Focus: accent color border, slight glow

### Interaction Notes
- **Animations:** Subtle, fast (200-300ms)
  - Hover effects: transform translate, opacity
  - Scroll reveals: fade-in + slide-up (lazy load on scroll)
  - Carousel: smooth slide (no jump)
- **Responsiveness:** 
  - Desktop: 1920px (max-width 1200px container)
  - Tablet: 768px (columns adjust 3→2)
  - Mobile: 320px (columns adjust 2→1, hamburger nav)
- **Performance:** 
  - Images: max 2MB per image, lazy load below fold
  - Animations: CSS-based (not JS-heavy)

---

## IMÁGENES (ESTRATEGIA)

### Problema:
Bancoaudiovisual.marcachile.cl requiere permisos de descarga. No usar sin permiso explícito.

### Solución (alternativas, en orden de preferencia):

1. **Pedir al cliente** (MEJOR):
   - "¿Pueden proveer 5-6 fotos de sus proyectos/plantas?"
   - Si no: "¿Tienen permiso para usar bancoaudiovisual?"
   - Si aún no: "Usamos Unsplash/Pexels como placeholder"

2. **Unsplash (libre, CC0):**
   - "industrial plant", "mining", "construction", "engineer"
   - Links: unsplash.com/search
   - Uso: libre, no requiere atribución

3. **Pexels (libre, CC0):**
   - Similar a Unsplash, stock industrial

4. **DALL-E 3 (pago pero vale):**
   - Prompt: "Professional photo of a mining plant in Chile, industrial, bright sunlight, high resolution"
   - Costo: $0.04/imagen (4K) — presupuesto cliente si requiere custom

5. **IStock / Depositphotos (pago, premium):**
   - Si cliente quiere "premium look" y cubre costo

### Recomendación inmediata:
Solicitar al cliente: "Nos encantaría usar fotos de vuestros proyectos reales. ¿Pueden compartir 5-6 imágenes de plantas/proyectos? Alternativa: Usamos fotos profesionales de Unsplash durante diseño, reemplazables luego."

---

## PERFORMANCE TARGETS

| Métrica | Target |
|---------|--------|
| Lighthouse Performance | ≥95 |
| LCP (Largest Contentful Paint) | <1.5s |
| CLS (Cumulative Layout Shift) | <0.05 |
| FID (First Input Delay) | <100ms |
| Total Bundle Size | <150KB (gzipped) |
| Time to Interactive | <2s |

**Astro + Vercel = estos targets son default.** No requiere heroics.

---

## FUNCIONALIDAD / INTERACCIÓN (sin overhead)

### React Islands (mini-components interactivos)
- **Servicios cards:** Hover effect + modal al click (React component)
- **Sectores mapa:** Hover tooltips (React)
- **Testimonios carousel:** Arrows para slide (React)
- **Mobile hamburger:** Toggle nav (React)

### CSS-only (no JS needed)
- Sticky header
- Scroll-reveal fade-in (Intersection Observer — vanilla JS mínimo)
- Smooth scroll anchors

**Astro philosophy:** Island Architecture = React SOLO donde hace falta, resto es HTML estático.

---

## ESTRUCTURA DE ARCHIVOS (Astro)

```
src/
  layouts/
    Layout.astro (master template)
  pages/
    index.astro (landing page)
  components/
    Header.astro
    Hero.astro
    About.astro
    Services.astro (+ ServicesCard.jsx — React island)
    Sectors.astro (+ SectorMap.jsx — React island)
    Testimonials.astro (+ CarouselTestimonials.jsx — React island)
    Contact.astro
    Footer.astro
  styles/
    global.css (Tailwind imports)
    variables.css (color system)
  content/
    services/ (markdown para servicio detallado, si se expande)
  lib/
    utils.ts (helpers)
public/
  images/
  favicon.ico
```

---

## WORKFLOW DISEÑO → DESARROLLO

### FASE 1: DISEÑO (Figma) — 3-5 días
1. CTO proporciona este prompt + wireframe ASCII al diseñador
2. Diseñador crea Figma:
   - Desktop (1920px) + Mobile (375px)
   - Color system + typography
   - Components (button, card, form)
   - Secciones completas (hero, about, servicios, etc.)
3. Diseñador entrega Figma link a Felipe
4. Felipe revisa + feedback rápido (1-2 días)
5. Figma final aprobado

### FASE 2: DESARROLLO (web-dev + Claude Code) — 5-7 días
1. web-dev clona repo starter Astro
2. Implementa cada sección (basada en Figma)
3. Integra imágenes finales
4. Tests: Lighthouse, responsividad, cross-browser
5. Deploy preview URL en Vercel
6. Felipe revisa visual en vivo
7. Merge + deploy production (ingenieriamillar.cl)

### FASE 3: POST-LAUNCH (opcional)
- Blog de proyectos (Astro Markdown)
- Case studies expandidos
- Lead capture form (si cliente quiere)

---

## PRÓXIMOS PASOS (para CTO)

1. **Confirmar con cliente:**
   - ¿Quieren usar fotos propias o autorizamos Unsplash/DALL-E?
   - ¿Números de contacto (teléfono para sitio)?
   - ¿Nombre founder correcto para about?

2. **Contrata a diseñador:**
   - Proporciona este prompt como brief completo
   - Figma link cuando esté lista

3. **Prepara web-dev:**
   - Crea repo Astro starter
   - Branch develop para esperar Figma

4. **Comunica a Felipe:**
   - Figma en [fecha] → dev en [fecha] → vivo en [fecha]

---

## CHECKLIST ANTES DE SHIP

- [ ] Figma aprobado por cliente
- [ ] Imágenes finales (cliente o Unsplash)
- [ ] Lighthouse ≥95 Performance
- [ ] Responsive tested (320px, 768px, 1920px)
- [ ] SEO meta tags: title, description, OG
- [ ] JSON-LD Organization schema
- [ ] Contact form tested (email delivery)
- [ ] Cross-browser: Chrome, Firefox, Safari, Mobile
- [ ] Vercel preview URL funcional
- [ ] Felipe auditoría visual
- [ ] Domain ingenieriamillar.cl apuntando a Vercel
- [ ] SSL certificado (auto en Vercel)

---

## STACK FINAL CONFIRMADO

✅ **Astro 4.x** (framework)  
✅ **React 19** (islands solamente)  
✅ **Tailwind CSS v4** (styling)  
✅ **TypeScript** (type safety)  
✅ **Vercel** (deployment, free, auto-preview)  
✅ **Formspree o Basin** (contact form, opcional)  

---

**Prompt creado:** 2026-06-22  
**Duración estimada:** Diseño 3-5d + Dev 5-7d = ~2 semanas total  
**Costo cliente:** $0 hosting (Vercel)  
**Resultado esperado:** Landing impactante, rápida, escalable  
