/**
 * INGENIERÍA MILLAR — Contenido centralizado (single source of truth).
 * Copys y estructura fieles al diseño Figma del diseñador (group-royal-36746076.figma.site).
 * Editar aquí, no en componentes. Imágenes intercambiables (ver OPCIONES_IMAGENES.md).
 */

export const site = {
  name: "Ingeniería Millar",
  domain: "ingenieriamillar.cl",
  url: "https://ingenieriamillar.cl",
  founder: "Richard Millar Díaz",
  email: "contacto@ingenieriamillar.cl",
  // Placeholder configurable (pendiente confirmación del cliente).
  whatsapp: "+56926386458",
  whatsappDisplay: "+56 9 XXXX XXXX",
  whatsappMessage: "Hola, me gustaría consultar por sus servicios de asesoría técnica.",
} as const;

export const seo = {
  title: "Ingeniería Millar — Consultoría en Ingeniería Minera | Asesoría Técnica Chile",
  description:
    "Más de 20 años optimizando plantas y operaciones mineras en todo Chile. Asesoría técnica, mantención de plantas, eficiencia de procesos y gestión de proyectos. Cobertura nacional: Antofagasta, Calama, Santiago y Concepción.",
  keywords:
    "asesoría técnica minera, ingeniería industrial Chile, mantención de plantas, eficiencia de procesos, consultoría minería, procedimientos técnicos",
  ogImage: "/og-image.jpg",
} as const;

export const hero = {
  eyebrow: "Consultoría en ingeniería minera",
  titlePre: "Ingeniería que",
  titleHighlight: "genera valor",
  subtitle: "Más de 20 años optimizando plantas y operaciones mineras en todo Chile.",
  cta: { label: "Contactar ahora", href: "#contacto" },
  ctaSecondary: { label: "Ver servicios", href: "#servicios" },
  // Imagen de fondo: planta/operación industrial (placeholder — reemplazar por foto minera del cliente).
  image:
    "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=2000&q=70",
} as const;

export const about = {
  eyebrow: "Quiénes somos",
  titlePre: "Experiencia que",
  titleHighlight: "transforma",
  paragraph:
    "Richard Millar Díaz, Ingeniero Civil Industrial con más de 20 años de experiencia en consultoría técnica especializada en minería, lidera un equipo dedicado a optimizar operaciones en plantas de toda Chile.",
  bullets: [
    "Especialistas en consultoría técnica minería",
    "Cobertura nacional: Antofagasta a Concepción",
    "Procesos ISO y procedimientos documentados",
    "Track record: 200+ plantas optimizadas",
  ],
  // Composición collage: imagen principal (operación/planta) + secundaria (equipo técnico).
  imagePrimary:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=70",
  imageSecondary:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=70",
} as const;

/** Banda de estadísticas (fondo oscuro). 4 métricas. */
export const stats = [
  { value: "20+", label: "Años de experiencia" },
  { value: "200+", label: "Plantas optimizadas" },
  { value: "15", label: "Regiones atendidas" },
  { value: "100%", label: "Compromiso técnico" },
] as const;

/**
 * 6 servicios. `icon` = nombre de icono Lucide.
 * Cards: hover → naranja (ninguna destacada por default).
 * Clickeables → modal con `detail` (más información para el cliente final).
 */
export const services = [
  {
    icon: "Wrench",
    title: "Consultoría Técnica",
    summary: "Análisis profundo de procesos mineros para identificar oportunidades de mejora.",
    detail:
      "Acompañamiento experto en faena y oficina: evaluación de operaciones y proyectos mineros de distinta complejidad, identificación de oportunidades de mejora y recomendaciones técnicas concretas orientadas a resultados reales, seguros y sostenibles para tu operación.",
  },
  {
    icon: "Factory",
    title: "Mantenimiento de Plantas",
    summary: "Optimización de ciclos de mantenimiento para máxima disponibilidad.",
    detail:
      "Diagnóstico y mejora de planes de mantención: optimización de ciclos, control de procesos asociados y aumento de la disponibilidad y continuidad operacional de plantas industriales, reduciendo paradas no programadas y costos.",
  },
  {
    icon: "Zap",
    title: "Eficiencia de Procesos",
    summary: "Reducción de tiempos y costos operacionales mediante optimización.",
    detail:
      "Identificación de brechas y cuellos de botella, análisis de procesos y propuestas concretas para reducir tiempos y costos. Fortalecemos la eficiencia y la sostenibilidad de la operación con una mirada técnica y práctica.",
  },
  {
    icon: "FileText",
    title: "Procedimientos Técnicos",
    summary: "Documentación ISO y procedimientos estandarizados para compliance.",
    detail:
      "Elaboración, revisión y actualización de procedimientos, instructivos, protocolos, estándares y manuales técnicos claros y aplicables, alineados con las exigencias de la operación y la normativa del rubro.",
  },
  {
    icon: "Users",
    title: "Capacitación Especializada",
    summary: "Training avanzado para equipos en nuevas metodologías y tecnologías.",
    detail:
      "Diseño y ejecución de programas formativos a medida: capacitaciones técnicas, talleres prácticos y material de apoyo para fortalecer las competencias de los equipos de trabajo y elevar el estándar operacional.",
  },
  {
    icon: "BarChart3",
    title: "Gestión de Proyectos",
    summary: "Coordinación e implementación de mejoras operacionales complejas.",
    detail:
      "Soporte técnico en todas las etapas del proyecto: planificación, control de avance, seguimiento de hitos y mejora continua, con una mirada estratégica de principio a fin para asegurar resultados.",
  },
] as const;

/**
 * Galería de imágenes (5 verticales, estética B/N oscura, label con "/").
 * Reemplaza la sección de sectores: muestra áreas/ámbitos de trabajo.
 */
export const gallery = [
  {
    label: "Terreno",
    img: "https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&w=600&q=70",
  },
  {
    label: "Mantenimiento",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=70",
  },
  {
    label: "Procesos",
    img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=600&q=70",
  },
  {
    label: "Equipo",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=70",
  },
  {
    label: "Cobertura",
    img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=600&q=70",
  },
] as const;

/**
 * Cobertura nacional: 4 cards (sin mapa). La de Calama va destacada (naranja).
 */
export const coverage = {
  eyebrow: "Presencia en terreno",
  titlePre: "Cobertura",
  titleHighlight: "Nacional",
  subtitle: "Desde el desierto de Atacama hasta el sur de Chile, llegamos donde está la operación.",
  // Imagen de fondo: paisaje cordillera / desierto.
  bgImage:
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=2000&q=60",
  cities: [
    { region: "Norte Grande", city: "Antofagasta", note: "Atendemos desde la capital minera del norte.", featured: false },
    { region: "Región de Atacama", city: "Calama", note: "Soporte directo para plantas y faenas.", featured: true },
    { region: "Zona Central", city: "Santiago", note: "Oficina central y coordinación de operaciones.", featured: false },
    { region: "Zona Sur", city: "Concepción", note: "Cobertura sur con apoyo logístico regional.", featured: false },
  ],
} as const;

export const contact = {
  eyebrow: "Hablemos",
  titlePre: "¿Listo para optimizar tu",
  titleHighlight: "operación?",
  subtitle: "Contáctanos ahora. Evaluaremos tu situación y te propondremos soluciones concretas.",
  formNote: "Completa el formulario y se abrirá tu correo con el mensaje listo para enviarnos.",
} as const;

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sectores", href: "#sectores" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const footer = {
  tagline: "Consultoría en ingeniería minera con cobertura nacional.",
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: [
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos de Uso", href: "#" },
  ],
  // Crédito de agencia — discreto, sin restar protagonismo al cliente.
  credit: { label: "Diseñado y desarrollado por Webiados", href: "https://webiados.com" },
  year: 2026,
} as const;
