# Opciones de imágenes — Ingeniería Millar

> Para que el cliente elija la dirección visual. Las imágenes son **intercambiables**:
> se cambian en un solo lugar por sección (ver §Cómo cambiarlas). Mientras se definen,
> usamos placeholders profesionales de Unsplash (licencia libre, sin atribución).

## Situación de las fotos del Banco Audiovisual (marcachile.cl)

El cliente compartió 12 fotos del Banco Audiovisual de Marca Chile. **Requieren permiso de
descarga/uso explícito** antes de publicarlas. Hasta confirmarlo, NO se incrustan. Una vez
con permiso, reemplazan a los placeholders 1:1 (mismas posiciones). Categorías recibidas:
Santiago, Minería, Antofagasta, Concepción, General y 2 "destacadas".

---

## SET A — Dramático / oscuro (recomendado para la estética actual)

Coherente con el diseño negro + cobre. Faena, maquinaria y cobre con luz cálida.

| Sección | Descripción | URL (Unsplash) |
|---|---|---|
| **Hero** | Maquinaria / operación industrial, tono oscuro | `https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=70` |
| **Sobre nosotros** | Ingenieros en terreno / planta | `https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=70` |

## SET B — Luminoso / corporativo

Más claro y "limpio", sensación moderna y aspiracional de día.

| Sección | Descripción | URL (Unsplash) |
|---|---|---|
| **Hero** | Camión minero / rajo a plena luz | `https://images.unsplash.com/photo-1599580546666-9f9d8e6d0f8a?auto=format&fit=crop&w=2000&q=70` |
| **Sobre nosotros** | Ingeniero con casco revisando planos | `https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=70` |

## SET C — Cobre / detalle material

Texturas de cobre y mineral — refuerza la identidad "minería chilena" de forma abstracta.

| Sección | Descripción | URL (Unsplash) |
|---|---|---|
| **Hero** | Textura de mineral / cobre macro | `https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=2000&q=70` |
| **Sobre nosotros** | Detalle industrial / tubería planta | `https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=70` |

> Las URLs de Unsplash son referenciales. Si alguna no carga, se sustituye por otra de la
> misma categoría. Lo importante para el cliente es **elegir la dirección (A / B / C)**.

---

## Cómo cambiarlas (para el desarrollador)

Las imágenes viven en los componentes de sección (no requieren tocar lógica):

- **Hero:** `src/components/sections/Hero.astro` → constante de imagen de fondo.
- **Sobre nosotros:** `src/components/sections/About.astro` → constante `aboutImg`.

Para fotos definitivas del cliente (Banco Audiovisual o propias):
1. Descargar la imagen con permiso confirmado.
2. Guardarla en `src/assets/` (Astro la optimiza: WebP/AVIF + responsive automáticamente).
3. Importarla y usar el componente `<Image>` de `astro:assets` (mejor performance que URL remota).

> Recomendación de performance: migrar las definitivas a `src/assets/` + `astro:assets`
> mejora LCP y evita depender de un host externo. Los placeholders remotos son solo para
> la etapa de definición visual.

---

## Decisión pendiente del cliente

- [ ] Elegir SET A / B / C (o mezcla por sección)
- [ ] Confirmar permiso de uso de las 12 fotos del Banco Audiovisual
- [ ] (Opcional) Enviar fotos propias de faenas/proyectos reales — lo ideal para autenticidad
