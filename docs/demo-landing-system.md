# Sistema de landings demo BaseLogic

Este proyecto contiene un paquete de landings demo para mostrar cómo BaseLogic puede crear páginas comerciales para distintos tipos de comercios sin repetir una misma plantilla visual.

## Stack

- Astro
- TypeScript
- CSS por archivos globales y themes por demo
- Sin backend
- Sin dependencias de UI externas
- Formularios visuales sin envío real

## Rutas

- `/` redirige a `/demos`
- `/demos`: vitrina comercial del paquete
- `/demos/brasa-norte`: restaurante/cafetería
- `/demos/glow-studio`: estética/barbería
- `/demos/kineactiva`: kinesiología/salud
- `/demos/novawear`: tienda de ropa/catálogo
- `/demos/autoprime`: taller mecánico/detailing

## Estructura principal

- `src/pages/demos/*.astro`: páginas de cada demo.
- `src/layouts/DemoLayout.astro`: layout base para landings individuales.
- `src/components`: componentes compartidos funcionales.
- `src/styles/global.css`: reset, layout base, grids, componentes y vitrina `/demos`.
- `src/styles/themes/*.css`: identidad visual específica de cada demo.
- `src/data/demos.ts`: metadata compartida para índice y SEO.

## Componentes compartidos

- `SEO`: title, description, canonical y meta tags sociales básicos.
- `DemoHeader`: header de landing con variantes `default`, `minimal` y `solid`.
- `DemoFooter`: footer simple con link al índice.
- `WhatsAppButton`: botón flotante con número placeholder `+56912345678`.
- `ContactForm`: formulario visual con variantes `default`, `panel` e `inline`.
- `ServiceCard`: tarjeta de servicio con variantes `default`, `featured` y `quiet`.
- `TestimonialCard`: testimonial con variantes `default`, `compact` y `statement`.
- `FAQ`: preguntas frecuentes con `details/summary`.
- `GallerySection`: bloque de galería con layouts `grid`, `feature` y `strip`.

## Cómo crear o modificar una demo

1. Revisar `docs/creative-direction.md` para respetar el brief de la demo.
2. Trabajar solo el archivo de página correspondiente en `src/pages/demos`.
3. Importar solo el theme propio de esa demo desde `src/styles/themes`.
4. Ajustar el theme propio si la landing necesita nueva composición, ritmo o estilo.
5. Usar componentes compartidos cuando aporten estructura funcional.
6. Crear markup específico cuando el rubro necesite una sección distintiva.
7. Validar responsive y build antes de cerrar el cambio.

## Qué se puede compartir entre landings

- SEO técnico.
- Header y footer base.
- Botón de WhatsApp.
- Formularios visuales.
- Estructura de servicios, testimonios, FAQ y galería.
- Tokens CSS generales.
- Metadata común de rutas.
- Patrones de accesibilidad y responsive.

## Qué NO se debe compartir visualmente

Para evitar que las demos parezcan copias, no repetir automáticamente:

- Mismo hero con el mismo grid y solo cambio de color.
- Misma jerarquía de secciones en todas las demos.
- Misma forma de tarjetas, sombras, radios y espaciados.
- Mismo tono de titulares.
- Mismo tipo de galería.
- Mismo patrón de CTA secundario.
- Misma textura o recurso gráfico.
- Mismo ritmo visual entre testimonios, servicios y contacto.

## Sistema de themes

Cada theme define variables para:

- Colores base: `--page-bg`, `--surface`, `--surface-muted`, `--text`, `--text-muted`.
- Bordes y sombras: `--border`, `--shadow`, `--card-shadow`.
- Botones: `--button-bg`, `--button-color`, `--button-border`, `--button-radius`, `--button-shadow`.
- Form controls: `--input-bg`.
- Galería: `--gallery-media-bg`.
- Radios: `--radius`, `--card-radius`.
- Tipografía de display: `--display-font`, `--display-weight`, `--heading-weight`.
- WhatsApp: `--whatsapp-bg`.

Además, cada theme puede definir layouts propios para `.demo-hero`, `.service-grid`, `.hero-panel`, `.gallery-tile` u otras clases compartidas. Eso es esperado: el theme no debe limitarse a cambiar colores.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abrir `http://127.0.0.1:4321/demos`.

## Cómo validar

```bash
npm run build
npm audit --omit=dev
```

También revisar manualmente:

- `/demos`
- `/demos/brasa-norte`
- `/demos/glow-studio`
- `/demos/kineactiva`
- `/demos/novawear`
- `/demos/autoprime`

Cada ruta debe cargar, mantener su theme y mostrar CTA/contacto.
