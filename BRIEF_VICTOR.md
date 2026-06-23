# BRIEF PARA VICTOR — Ingeniería Millar Landing Page

**Cliente:** Benjamín Millar / Ingeniería Millar  
**Proyecto:** Landing page estática  
**Formato:** Figma design (Desktop + Mobile)  
**Deadline:** [CTO confirma con Felipe]

---

## 🎯 OBJETIVO

Diseñar una landing page **moderna, profesional, impactante** para consultoría técnica minería. El cliente debe verla y pensar "esto es serio, los recomiendo a todos".

**NO es escueta.** Debe tener interacción suave (hover effects, smooth scroll), efectos visuales, pero sin perder velocidad ni volverse pesada.

---

## 📋 SECCIONES (7 EXACTAS)

### 1. HEADER (sticky)
- **Logo:** Ingeniería Millar (left)
- **Nav:** Servicios | Sectores | Nosotros | Contacto (center, desktop only)
- **CTA button:** "Contactar" (right)
- **Mobile:** Hamburger menu
- **Background:** Transparent al scroll, color sólido al interactuar
- **Style:** Minimalista, clean, sin exceso

### 2. HERO (full-width)
- **Background image:** Planta minería / industrial / profesional
- **Overlay:** Gradient negro 40% (legibilidad del texto)
- **Headline:** "Ingeniería Minera que Genera Valor" (grande, bold, blanco)
- **Subheadline:** "20+ años optimizando plantas en toda Chile" (más pequeño, gris claro)
- **CTA button:** "Contactar ahora" (naranja/café) → scroll a Contact
- **Complementario:** Ícono scroll down (animate subtle, indica más contenido abajo)
- **Style:** Impactante, foto real de minería (no fake stock)

### 3. ABOUT US (split layout)
- **Layout:** 2 columns → [Texto left] | [Imagen right]
- **Headline:** "Quiénes Somos"
- **Texto:**
  - Párrafo sobre Richard Millar Díaz (Ing. Civil Industrial, 20+ años)
  - Frase corta sobre cobertura nacional
  - Bullet points (3-4):
    - "Especialistas en consultoría técnica minería"
    - "Cobertura Antofagasta → Concepción"
    - "Procesos ISO y procedimientos documentados"
- **Imagen:** Richard Millar (headshot profesional) O planta + persona
- **Style:** Corporate pero accesible, no intimidante

### 4. SERVICES (grid 3 columns)
**6 Servicios exactos (del brief del cliente):**

1. **Consultoría Técnica Especializada en Minería**
   - Icon: 🔧 (o similar)
   - Descripción breve

2. **Mantenimiento de Plantas**
   - Icon: 🏭
   - Descripción breve

3. **Eficiencia de Procesos**
   - Icon: ⚡
   - Descripción breve

4. **Procedimientos Técnicos Documentados**
   - Icon: 📋
   - Descripción breve

5. **Capacitación Especializada**
   - Icon: 👥
   - Descripción breve

6. **Gestión de Proyectos**
   - Icon: 📊
   - Descripción breve

**Cada card:**
- White background, subtle shadow
- Icon (top, 64px)
- Título bold
- Descripción clara (2-3 líneas)
- **Hover effect:** Lift effect (translate up + shadow bigger) + icon slightly bigger
- **Click (optional):** Modal con más detalles (pero UI decision tuya)

**Grid:** 3 columns desktop, 2 tablet, 1 mobile

### 5. SECTORS / COBERTURA NACIONAL (split layout)
- **Headline:** "Cobertura Nacional"
- **Layout:** 2 columns → [Mapa left] | [Cities right]

**Mapa (left):**
- SVG mapa Chile simplificado (clean, minimal)
- 4 puntos de color (naranja/rojo) en:
  - Antofagasta
  - Calama
  - Santiago
  - Concepción
- Opcional: hover en puntos → popup "Atendemos desde [ciudad]"

**Cities (right):**
- 4 cards verticales, cada una con:
  - Ciudad name (bold)
  - Frase breve sobre cobertura (e.g., "Atendemos desde la capital minera del norte")
  - Background: light naranja/beige, left border naranja (accent)

**Style:** Clean, geográfico, comunica alcance nacional

### 6. CONTACT (full-width CTA section)
- **Background:** Dark (black o very dark gray) OR high contrast
- **Headline:** "¿Listo para Optimizar tu Operación?" (grande, blanco/light)
- **Subheadline:** "Contactanos ahora. Evaluaremos tu situación..." (gris claro, 1 línea)
- **Contact Options (3 methods):**
  - 📧 **Email:** contacto@ingenieriamillar.cl (clickeable)
  - 📞 **Teléfono:** [número cliente] (clickeable, tel: link)
  - 💬 **WhatsApp:** [número cliente] (clickeable, WhatsApp link)
- **Optional form:** Si CTO lo autoriza (Formspree/Basin), agregar form de contacto (mail + mensaje)
- **Style:** Clear, high contrast, no friction, CTA obvious

### 7. FOOTER (dark)
- **Layout:** 3 columns
  - **Links:** Home | Servicios | Nosotros | Contacto | Privacidad
  - **Social:** LinkedIn (professional) | Email icon
  - **Copyright:** "© 2026 Ingeniería Millar"
- **Background:** Dark (#1a1a1a o similar)
- **Text:** Light gray
- **Style:** Minimal, functional

---

## 🎨 DESIGN SYSTEM

### Colors
- **Primary:** Negro (#1a1a1a o muy dark)
- **Accent:** Naranja/Café (#D4733E o similar — "Bulnes Lihn" warmth, corporativo)
- **Secondary:** Gris oscuro (#404040) — backgrounds alternos
- **Text primary:** Negro (#1a1a1a) sobre light, Blanco (#FFFFFF) sobre dark
- **Text secondary:** Gris (#666666)
- **Hover:** Accent color + slight brightness shift

### Typography
- **Display (H1, H2):** Bricolage Grotesque (distinctive, técnico, characteristic)
  - H1: 48px bold (desktop), 32px (mobile)
  - H2: 36px bold (desktop), 24px (mobile)
- **Body text:** Inter (legible, clean, neutral)
  - Body: 16px (desktop), 14px (mobile)
  - Small: 12px (captions)
- **Line height:** 1.6 para body, 1.2 para headlines
- **Letter spacing:** Normal, sem especial

### Spacing
- **8px grid:** 8, 16, 24, 32, 48, 64, 96px
- **Section padding:** 96px (desktop), 64px (tablet), 48px (mobile)
- **Column gap:** 32px (desktop), 24px (tablet), 16px (mobile)

### Components
- **Buttons:**
  - **Filled:** Accent background, white text, rounded corners
  - **Hover:** Brightness +10%, cursor pointer
  - **Outline:** White stroke, transparent bg, white text (hero)
- **Cards:**
  - White background, subtle shadow (0 4px 12px rgba(0,0,0,0.1))
  - Rounded corners (8px)
  - **Hover:** Lift effect (translate Y -4px), shadow increase
- **Form inputs:** Dark background, light border, white text
  - **Focus:** Accent color border, glow effect

---

## 🎬 INTERACTIONS & ANIMATIONS

- **Hover effects:** Subtle, fast (200-300ms transition)
  - Services cards: lift + icon grow
  - Buttons: brightness shift
  - Links: underline or color change
- **Scroll reveals:** Optional fade-in + slide-up on lazy scroll (pero no overdone)
- **Sticky header:** Slight shadow on scroll
- **Mobile menu:** Smooth slide-out hamburger (no jump)
- **Smooth scroll:** Anchor links scroll smoothly (no jump)

**Philosophy:** Smooth but not distracting. Performance > flash.

---

## 📱 RESPONSIVE BREAKPOINTS

- **Desktop:** 1920px (max-width container 1200px)
- **Tablet:** 768px (grid 3→2 cols, adjust padding)
- **Mobile:** 320px (grid 2→1 cols, hamburger nav, smaller fonts)

Test design at: 320px, 375px, 768px, 1024px, 1920px

---

## 📸 IMAGES

**Problema:** Banco Audiovisual marcachile.cl requiere permisos explícitos.

**Solución:** CTO confirmará con cliente:
1. ¿Pueden proveer fotos de proyectos/plantas propias? (MEJOR)
2. ¿Autorizamos usar Unsplash/Pexels (CC0, libre)? (ALTERNATIVA)
3. ¿Pagamos DALL-E 3 para custom images? (PREMIUM)

**Mientras tanto:** Usa placeholders en Figma (color blocks o generic industrial photos de Unsplash como reference).

**Requisitos de imagen:**
- Profesional, real (minería, planta, engineers)
- High resolution (mínimo 2000x1200px)
- Max 2MB por imagen (optimization será en dev)

---

## ✅ DESIGN CHECKLIST (antes de entregar)

- [ ] Desktop design (1920px) completo
- [ ] Mobile design (375px) completo
- [ ] Tablet breakpoints verificados (768px)
- [ ] Color system consistente
- [ ] Tipografía consistente (Bricolage + Inter)
- [ ] Spacing grid (8px) respetado
- [ ] Hover states definidos (desktop)
- [ ] Buttons con estados (normal, hover, active, disabled)
- [ ] Icons consistentes
- [ ] Form inputs diseñados
- [ ] Componentes reutilizables documentados
- [ ] Dark mode NO necesario (solo versión light)
- [ ] Accessibility check: color contrast ≥4.5:1

---

## 🎯 TONE & FEEL

**Profesional.** **Técnico pero accesible.** **Moderno pero no trendy.** **Serio pero no aburrido.**

NO:
- Demasiado colorido o playful
- Minimalista extremo (vacío)
- Skeuomorphism o retro
- Animaciones excesivas

SÍ:
- Clean typography
- Breathing space (good padding)
- High quality imagery
- Subtle interactions
- Corporate warmth (naranja/café accent)

---

## 📁 DELIVERABLES

Cuando termines, proporciona:

1. **Figma link** (compartible) con:
   - Desktop artboard (1920px)
   - Mobile artboard (375px)
   - Components library (button, card, input, etc.)
   - Color system defined
   - Typography specs

2. **Figma notes** (opcional pero útil):
   - Rationale de color choice
   - Font pair reasoning
   - Responsive rules (cómo adapta a mobile)

---

## ❓ PREGUNTAS FRECUENTES

**¿Animaciones complejas?**
No. Interacciones suaves solamente (hover, smooth scroll). Nada que ralentice.

**¿Dark mode?**
No. Solo light mode.

**¿Formas complejas?**
No. Mantén borders simples, rounded corners 8px max.


---

**Briefing finalizado:** 2026-06-22  
**Stack destino:** Astro 4.x + React islands + Tailwind  
**Hosting:** Vercel (gratis, sin costo cliente)  

¡Adelante, Victor! 🚀

