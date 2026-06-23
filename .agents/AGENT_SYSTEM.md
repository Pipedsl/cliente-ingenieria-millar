# Sistema de Agentes — WebiadosClientes

> Equipo de agentes con definiciones para Claude Code Y Google Antigravity (Gemini).

---

## Roles + tier mapping

| Rol | Claude Code | Antigravity (Gemini) | Cuándo Felipe lo usa |
|---|---|---|---|
| **Secretary** | Haiku 4.5 | gemini-3-flash | "secretary: <pedido>" |
| **CTO/CEO** | Opus 4.7 | gemini-3-pro deep-thinking | "cto: <pedido>" o auto-escalado |
| **Subagentes** | Sonnet/Haiku/Opus | gemini-3-flash-preview/lite/pro | CTO los "contrata" on-demand |

---

## Token economy (mismo principio en ambas plataformas)

| Tier | Claude | Gemini | Uso (% ideal) |
|---|---|---|---|
| Cheap mecánico | Haiku 4.5 | gemini-3-flash-lite | docs, boilerplate, format |
| Default desarrollo | Sonnet 4.6 | gemini-3-flash-preview | 80% del trabajo técnico |
| Bugs complejos blocking | Opus 4.6 | gemini-3-pro standard | escalation Sonnet/flash falló |
| Planning crítico irreversible | Opus 4.7 | gemini-3-pro deep-thinking | ADR, arquitectura, security audit (máx 1-2 por sesión) |

---

## Flujo

```
Felipe ──> Secretary (cheap) ──> .agents/backlog/INBOX.md
              │
              └──> "✅ Anotado"

CTO/CEO (planning) lee INBOX ──> decide ──> contrata subagente cheap/default/escalation
              │
              └──> .agents/reports/secretary-log.md
              └──> .agents/reports/HUMAN_ACTIONS.md
```

---

## Cómo invocar (Claude Code)

Escribir en chat:
- `secretary: <pedido>` → invoca Haiku
- `cto: <pedido>` o `ceo: <pedido>` → invoca Opus 4.7
- Mensaje libre → CTO decide si escalar

## Cómo invocar (Antigravity)

Mismas convenciones — el dispatcher de Antigravity lee `.antigravity/agents/*.md` y matchea por `name` + `description`.

---

## Archivos clave

```
.claude/agents/                 # Claude Code agents
├── secretary.md               # Haiku — triage
├── cto-ceo.md                 # Opus 4.7 — planning
├── web-dev.md                 # Sonnet — stack-agnostic web development
├── seo-specialist.md          # Sonnet — SEO implementation
├── performance-specialist.md  # Sonnet — Core Web Vitals, Lighthouse
├── qa-web.md                  # Sonnet — Playwright E2E, accessibility
├── tech-lead.md               # Opus 4.6+ — architecture, PR review
├── security-auditor.md        # Opus 4.6 — OWASP, security gates
├── devops.md                  # Sonnet — Vercel, GitHub Actions, deploy
└── bug-reporter.md            # Haiku — bug triage

.antigravity/agents/
├── secretary.md               # Gemini flash
└── cto-ceo.md                 # Gemini pro deep-thinking

.agents/backlog/
├── INBOX.md                   # items pendientes
├── IN_PROGRESS.md             # items ejecutándose
├── DONE.md                    # items completados
└── REGISTRO.md                # memoria pasiva info-only

.agents/reports/
├── secretary-log.md           # feed cronológico (Felipe lee esto)
└── HUMAN_ACTIONS.md           # acciones humanas pendientes (Felipe lee esto)

.agents/skills/
├── frontend-design/SKILL.md   # Dirección de diseño distintiva
└── web-design-guidelines/SKILL.md  # Web Interface Guidelines review
```

---

## Cuándo crear nuevos subagentes especializados

Cuando un task se repite 3+ veces, el CTO crea `.claude/agents/<nombre>.md` Y `.antigravity/agents/<nombre>.md` con frontmatter (`name`, `description`, `model`) + system prompt enfocado.

Ejemplos sugeridos si aparecen tareas recurrentes:
- `content-writer` (Haiku) — escribir copy para landing pages
- `wordpress-dev` (Sonnet) — si múltiples clientes con WordPress
- `ecommerce-dev` (Sonnet) — si múltiples tiendas online

---

## Reglas inviolables

1. Secretary nunca ejecuta tareas técnicas — solo captura.
2. CTO nunca escribe código directamente — siempre delega.
3. Sin commits/push sin autorización Felipe.
4. Sin acceso a producción sin autorización Felipe.
5. Token economy es ley — usar el modelo más barato que cumpla.
