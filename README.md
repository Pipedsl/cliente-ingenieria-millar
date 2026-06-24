# Ingeniería Millar — Landing Page

**Cliente:** Benjamín Millar / Ingeniería Millar  
**Proyecto:** Landing page estática para consultoría técnica minería  
**Stack:** Astro 4.x + React 19 + Tailwind v4 + Vercel  
**Status:** ✅ Desarrollada — Lighthouse 100/100/100/100. Pendiente: imágenes definitivas + Web3Forms key + deploy.

---

## 📁 Estructura del repo

```
ingenieria-millar/
├── .claude/
│   ├── settings.local.json          # Plugins habilitados
│   └── agents/                      # 10 agentes especializados
│       ├── secretary.md (Haiku)
│       ├── cto-ceo.md (Opus)
│       ├── web-dev.md (Sonnet)
│       ├── seo-specialist.md (Sonnet)
│       ├── performance-specialist.md (Sonnet)
│       ├── qa-web.md (Sonnet)
│       ├── tech-lead.md (Opus)
│       ├── security-auditor.md (Opus)
│       ├── devops.md (Sonnet)
│       └── bug-reporter.md (Haiku)
├── .antigravity/
│   └── agents/                      # Gemini counterpart (CTO/CEO + Secretary)
├── .agents/
│   ├── AGENT_SYSTEM.md              # Sistema de agentes
│   ├── backlog/                     # INBOX, IN_PROGRESS, DONE, REGISTRO
│   ├── reports/                     # secretary-log, HUMAN_ACTIONS
│   └── skills/                      # frontend-design, web-design-guidelines
├── CLAUDE.md                        # Guía principal (empieza aquí)
├── README.md                        # Este archivo
├── QUICK_START.md                   # Cheat-sheet para desarrollo
├── skills-lock.json                 # Registry de skills
├── .gitignore
├── package.json                     # (crear cuando dev inicie)
├── BRIEF_VICTOR.md                  # Brief para diseñador
├── ESQUELETO_LANDING.html           # Preview estática del esqueleto
├── PROMPT_PARA_CTO.md               # Brief para CTO/CEO
└── src/                             # (crear cuando dev inicie, Astro project)
    ├── pages/
    ├── components/
    ├── layouts/
    └── styles/
```

---

## 🚀 Para el equipo: Cómo usar este repo

### 1. Clonar
```bash
git clone https://github.com/webiados/ingenieria-millar.git
cd ingenieria-millar
```

### 2. Leer CLAUDE.md
```bash
cat CLAUDE.md | head -50
```

### 3. Invocar agentes desde Claude Code

Abre la carpeta en Claude Code:
```bash
code .
```

En el chat de Claude Code:
```
secretary: <pedido>      # Triage
cto: <decisión técnica>  # Planning
/seo                     # Auditoría SEO
/performance             # Auditoría performance
/web-quality-audit       # Auditoría integral
```

### 4. Ver estado del proyecto
```bash
cat .agents/backlog/INBOX.md
cat .agents/reports/secretary-log.md
cat .agents/reports/HUMAN_ACTIONS.md
```

---

## 📋 Agentes disponibles

| Agente | Model | Cuándo usar |
|--------|-------|-------------|
| **secretary** | Haiku | Triage y captura de requests |
| **cto-ceo** | Opus | Planning, delegación, decisiones |
| **web-dev** | Sonnet | Desarrollo (Astro, React, etc.) |
| **seo-specialist** | Sonnet | SEO: meta tags, JSON-LD, schema.org |
| **performance-specialist** | Sonnet | Core Web Vitals, Lighthouse, optimizaciones |
| **qa-web** | Sonnet | Playwright E2E, WCAG 2.2 AA, cross-browser |
| **tech-lead** | Opus | Arquitectura, ADRs, PR reviews |
| **security-auditor** | Opus | OWASP, CSP, secrets, form security |
| **devops** | Sonnet | Vercel, GitHub Actions, CI/CD |
| **bug-reporter** | Haiku | Triage de bugs |

---

## 🎨 Diseño

### Documentos de diseño:
- **BRIEF_VICTOR.md** — Brief para diseñador (Figma)
- **ESQUELETO_LANDING.html** — Estructura HTML/preview (abre en navegador)
- **PROMPT_PARA_CTO.md** — Brief técnico completo

### Stack de diseño:
- Figma (diseño)
- Astro 4.x (desarrollo)
- Tailwind CSS v4 (styling)
- Vercel (deployment)

---

## 📊 Timeline

| Fase | Duración | Estado |
|------|----------|--------|
| Diseño Figma | 3-5 días | 🔄 En progreso |
| Feedback cliente | 1-2 días | ⏳ Pendiente |
| Desarrollo (Astro) | 5-7 días | ⏳ Pendiente |
| QA + fixes | 2-3 días | ⏳ Pendiente |
| Deploy production | 1 día | ⏳ Pendiente |

---

## 🔧 Para web-dev (cuando inicie desarrollo)

### 1. Setup inicial
```bash
npm create astro@latest . -- --template minimal
npm install
```

### 2. Crear CLAUDE.md específico del proyecto
Documentar comandos, estructura, convenciones (dentro de este repo).

### 3. Estructura Astro
```
src/
  pages/index.astro         # Landing page principal
  layouts/Layout.astro      # Master layout
  components/
    Header.astro
    Hero.astro
    About.astro
    Services.astro
    Sectors.astro
    Contact.astro
    Footer.astro
  styles/
    global.css              # Tailwind imports
```

### 4. Desarrollo
- Basado en Figma final (Victor entrega Figma link)
- SEO: meta tags, Open Graph, JSON-LD
- Performance: Lighthouse ≥95
- Responsive: 320px, 768px, 1920px
- Cross-browser: Chrome, Firefox, Safari
- Tests: Playwright E2E para rutas críticas

### 5. Deploy
```bash
npm run build
# Preview local
npm run preview
# Vercel (auto-deploy en push a main)
git push origin main
```

---

## 🎯 Skills (sistema global)

Disponibles para usar en Claude Code (no necesitan archivo local):

```
/seo                    # Auditoría SEO
/performance            # Core Web Vitals + Lighthouse
/core-web-vitals        # LCP, CLS, INP específico
/accessibility          # WCAG 2.2 AA audit
/best-practices         # Buenas prácticas web
/web-quality-audit      # Auditoría integral (RECOMENDADO antes de ship)
/ui-ux-pro-max          # Diseño UI/UX (50+ estilos, paletas, fuentes)
/frontend-design        # Dirección de diseño distintiva (local)
/web-design-guidelines  # Web Interface Guidelines review (local)
```

---

## ✅ NO-NEGOTIABLES (toda entrega)

- ✅ **SEO:** Meta tags, Open Graph, JSON-LD, sitemap.xml, GSC-ready
- ✅ **Performance:** LCP <2.5s, CLS <0.1, INP <200ms, Lighthouse ≥90
- ✅ **Accessibility:** WCAG 2.2 AA (semantic HTML, keyboard nav, color contrast)
- ✅ **Mobile:** Responsive desde 320px, sin scroll horizontal
- ✅ **Security:** HTTPS, CSP headers, sin secrets en código

**Verifica siempre con:** `/web-quality-audit` antes de ship

---

## 📞 Contacto

**Cliente:** Benjamín Millar (contacto@ingenieriamillar.cl)  
**CTO/CEO:** [Será asignado]  
**Diseñador:** Victor  
**web-dev:** [Será asignado]  
**QA:** [Será asignado]  

---

## 📖 Documentación

- **CLAUDE.md** — Guía principal del workspace
- **QUICK_START.md** — Cheat-sheet para desarrollo rápido
- **.agents/AGENT_SYSTEM.md** — Sistema de agentes dual (Claude + Gemini)
- **BRIEF_VICTOR.md** — Brief para diseñador
- **PROMPT_PARA_CTO.md** — Brief técnico completo

---

## 🔐 Privacidad & Ownership

Este repo contiene el código del cliente Benjamín Millar / Ingeniería Millar.

- **Repo privado en GitHub** (acceso restringido a equipo Webiados)
- **Post-launch:** Cliente puede recibir acceso si lo solicita
- **Código:** Propiedad intelectual de Webiados durante desarrollo

---

## 🚀 Comandos del proyecto (Astro)

```bash
npm install          # instalar dependencias
npm run dev          # servidor de desarrollo (localhost:4321)
npm run build        # build estático a dist/
npm run preview      # previsualizar el build
```

## 🎉 Status

```
✓ Landing desarrollada (Astro 5 + React islands + Tailwind v4)
✓ 7 secciones: hero, nosotros, servicios (acordeón), sectores, cobertura (mapa Chile), contacto, footer
✓ Interactividad: mapa de Chile con pins, acordeones, formulario Web3Forms, menú móvil, WhatsApp flotante
✓ Lighthouse: Performance 100 · Accessibility 100 · Best Practices 100 · SEO 100
✓ LCP 0.5s · CLS 0 · responsive sin overflow · 0 errores de consola

⏳ Pendiente (Felipe / cliente):
  - Generar Web3Forms access key (gratis) → PUBLIC_WEB3FORMS_KEY en Vercel  (ver .env.example)
  - Cliente elige set de imágenes (ver OPCIONES_IMAGENES.md) + permiso Banco Audiovisual
  - Confirmar teléfono/WhatsApp y redes sociales (site.ts)
  - Deploy a Vercel + apuntar dominio ingenieriamillar.cl
```

---

**Cliente:** Ingeniería Millar  
**Stack:** Astro 5 + React 19 + Tailwind v4 + Vercel  
**Equipo:** Webiados · webiados.com
