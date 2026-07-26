# BL-005 — BaseLogic Demo Landing Pack

Paquete de cinco landings demo para mostrar cómo BaseLogic adapta una página comercial a distintos rubros, objetivos de conversión y direcciones visuales. Las marcas, textos, precios y testimonios son ficticios y están pensados para presentación comercial.

## Stack

- Astro 7.
- TypeScript.
- CSS global compartido y themes por demo.
- Imágenes WebP locales.
- Sin backend ni dependencias de UI externas.
- Formularios visuales, sin envío real.

## Rutas oficiales

El sitio se desplegará como sitio estático en `demo.baselogic.cl`. El sitio principal
`baselogic.cl` enlazará directamente a estas rutas descriptivas, que son las rutas
oficiales de cada demo.

| Ruta | Uso |
| --- | --- |
| `/` | Redirige de forma compatible con salida estática a la vitrina `/demos`. |
| `/demos` | Índice comercial del paquete. |
| `/demos/brasa-norte` | Demo de restaurante y cafetería. |
| `/demos/glow-studio` | Demo de estética y barbería. |
| `/demos/kineactiva` | Demo de kinesiología y salud particular. |
| `/demos/novawear` | Demo de tienda de ropa y catálogo urbano. |
| `/demos/autoprime` | Demo de taller mecánico y detailing. |

## Demos incluidas

- **Brasa Norte:** experiencia cálida para cocina de autor, café de especialidad, menú y reservas.
- **Glow Studio:** landing premium para estética, barbería, tratamientos y agendamiento.
- **KineActiva:** presencia clínica para evaluación, rehabilitación y atención particular.
- **NovaWear:** vitrina urbana editorial para colecciones, productos, drops y pedidos por WhatsApp.
- **AutoPrime:** landing técnica para diagnóstico, mantención, detailing y cotizaciones.

## Ejecución local

```bash
npm install
npm run dev
```

Luego abrir `http://127.0.0.1:4321/demos`.

## Build

```bash
npm run build
npm run preview
```

El build estático se genera en `dist/`. Para revisar dependencias de producción:

```bash
npm audit --omit=dev
```

## Estado de assets

Todas las imágenes de prioridad Alta, Media y Baja fueron generadas, optimizadas en formato `.webp` e integradas en `public/assets/demos/`. El inventario final contiene 43 imágenes: 18 Alta, 20 Media y 5 Baja. No quedan assets de imagen pendientes de generación y no se observan placeholders grises visibles en la revisión final.

## WhatsApp

Las llamadas a WhatsApp usan intencionalmente el placeholder `+56912345678`. Debe reemplazarse por el número real antes de publicar cualquier landing.

## Pendientes antes de publicación real

- Reemplazar marcas, textos, precios, testimonios y datos ficticios por información aprobada del negocio.
- Confirmar imágenes finales, procedencia y permisos de uso con el responsable del proyecto.
- Reemplazar el placeholder de WhatsApp por el número real.
- Definir dominio, canonicals, metadatos SEO, ubicación y datos de contacto reales.
- Conectar formularios, analítica u otras integraciones si el proyecto final las requiere.
- Completar la revisión legal y comercial correspondiente al negocio.

## Despliegue estático

La configuración de Astro declara salida estática (`output: 'static'`) y el build genera
`dist/`. La configuración objetivo para Coolify es:

- Dominio: `demo.baselogic.cl`.
- Repositorio: `Sherydans12/BL-005`.
- Branch: `main`.
- Build command: `npm run build`.
- Publish directory: `dist`.

La guía completa de DNS, SSL y publicación está en
[docs/deployment-coolify.md](docs/deployment-coolify.md). No se ha realizado deploy en este cierre.

## Documentación

- [Cierre de proyecto](docs/project-closeout.md)
- [Despliegue en Coolify](docs/deployment-coolify.md)
- [Revisión final](docs/final-review.md)
- [Catálogo de assets](docs/assets-pending.md)
- [Sistema de landings](docs/demo-landing-system.md)
