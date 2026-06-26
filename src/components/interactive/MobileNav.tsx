/**
 * MobileNav.tsx — Menú móvil overlay full-screen.
 * Island React (client:load). El estado open se controla via evento
 * personalizado "toggle-mobile-nav" despachado por Header.astro.
 * Al cerrarse desde dentro, despacha "mobile-nav-closed" para sincronizar
 * el aria-expanded del botón hamburguesa.
 *
 * Accesible: role=dialog, aria-modal, cierre con Escape,
 * focus trap básico, respeta prefers-reduced-motion (ya global en CSS).
 */
import { useState, useEffect, useRef, useCallback } from "react";
import { nav, site } from "../../data/site";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  /* Escucha el evento del botón hamburguesa en Header.astro */
  useEffect(() => {
    const handler = (e: Event) => {
      const { open } = (e as CustomEvent<{ open: boolean }>).detail;
      setIsOpen(open);
    };
    window.addEventListener("toggle-mobile-nav", handler);
    return () => window.removeEventListener("toggle-mobile-nav", handler);
  }, []);

  /* Cierre interno — notifica a Header.astro */
  const close = useCallback(() => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("mobile-nav-closed"));
  }, []);

  /* Cierre con tecla Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  /* Bloquea scroll del body cuando está abierto */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Focus en primer link al abrir */
  useEffect(() => {
    if (!isOpen) return;
    const raf = requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  /* Focus trap: Tab / Shift+Tab entre elementos focusables */
  useEffect(() => {
    if (!isOpen) return;
    const handleTrapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !overlayRef.current) return;
      const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", handleTrapFocus);
    return () => document.removeEventListener("keydown", handleTrapFocus);
  }, [isOpen]);

  /* Scroll suave al ancla y cierra el menú */
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    close();
    setTimeout(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    }, 180);
  };

  /* WhatsApp número limpio (sin +) */
  const waNumber = site.whatsapp.replace(/\D/g, "");
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <div
      ref={overlayRef}
      id="mobile-nav-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      aria-hidden={!isOpen}
      className={[
        "fixed inset-0 z-[90] flex flex-col md:hidden",
        /* Fondo: ink oscuro con blur */
        "bg-[#0a0a0b]/96 backdrop-blur-xl",
        /* Transición opacity/transform */
        "transition-all duration-200 ease-out",
        isOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-2",
      ].join(" ")}
    >
      {/* ── Barra superior: nombre + botón cerrar ── */}
      <div className="flex items-center justify-between px-6 h-16 border-b border-[#232327]">
        <span className="font-[var(--font-display)] text-base font-semibold text-[#fafaf9] tracking-tight">
          {site.name}
        </span>
        <button
          onClick={close}
          aria-label="Cerrar menú"
          className="flex items-center justify-center w-11 h-11 rounded-md text-[#a8a29e] hover:text-[#fafaf9] transition-colors duration-150 cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* ── Links de navegación ── */}
      <nav aria-label="Menú principal móvil" className="flex-1 flex flex-col justify-center px-8 gap-0">
        {nav.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            ref={i === 0 ? firstLinkRef : undefined}
            onClick={(e) => handleLinkClick(e, item.href)}
            style={{ transitionDelay: isOpen ? `${i * 45}ms` : "0ms" }}
            className={[
              "block py-5 text-[2rem] leading-tight",
              "font-[var(--font-display)] font-semibold tracking-tight",
              "text-[#a8a29e] hover:text-[#ff5f26]",
              "border-b border-[#232327] last:border-0",
              "transition-colors duration-150 cursor-pointer",
              /* min touch target */
              "min-h-[52px] flex items-center",
            ].join(" ")}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* ── CTA WhatsApp al fondo ── */}
      <div className="px-8 pb-10 pt-4">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className={[
            "flex items-center justify-center gap-3 w-full",
            "min-h-[52px] px-6 py-3 rounded-lg",
            "bg-[#ff5f26] text-[#fafaf9] font-semibold text-base",
            "hover:opacity-90 transition-opacity duration-150 cursor-pointer",
          ].join(" ")}
          aria-label="Escríbenos por WhatsApp"
        >
          {/* Icono WhatsApp SVG inline */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Escríbenos por WhatsApp
        </a>
      </div>
    </div>
  );
}
