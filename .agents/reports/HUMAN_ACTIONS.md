# HUMAN_ACTIONS — Acciones que solo Felipe puede hacer

## Landing Ingeniería Millar — pendientes para cerrar

1. **Autorizar commit** del trabajo (working tree listo, sin commitear). Decir "commits = GO".
2. **Autorizar deploy** a Vercel. Decir "deploy = GO".
3. **Web3Forms key:** crear cuenta gratis en https://web3forms.com (solo email), generar access key, ponerla como `PUBLIC_WEB3FORMS_KEY` en Vercel (Environment Variables) y en `.env` local. Sin esto el formulario no envía.
4. **Imágenes:** que el cliente elija set A/B/C (ver `OPCIONES_IMAGENES.md`) y confirme permiso de las 12 fotos del Banco Audiovisual (marcachile.cl) — hoy se usan placeholders Unsplash.
5. **Datos del cliente a confirmar** (actualizar en `src/data/site.ts`): teléfono/WhatsApp real (hoy placeholder +56 9 2638 6458), redes sociales (LinkedIn/Instagram).
6. **Dominio:** apuntar `ingenieriamillar.cl` a Vercel (DNS) tras el deploy.
