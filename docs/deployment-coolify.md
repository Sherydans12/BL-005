# Despliegue estático en Coolify — BL-005

## Configuración objetivo

- **Dominio:** `demo.baselogic.cl`
- **Stack:** Astro static site
- **Repositorio:** `Sherydans12/BL-005`
- **Branch sugerida:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

Astro está configurado con `output: 'static'`. El build genera archivos HTML y assets
listos para ser servidos por Coolify sin backend ni adaptador de servidor.

## Rutas finales oficiales

Estas son las rutas que deben enlazarse desde el sitio principal `baselogic.cl`:

- `https://demo.baselogic.cl/demos`
- `https://demo.baselogic.cl/demos/brasa-norte`
- `https://demo.baselogic.cl/demos/glow-studio`
- `https://demo.baselogic.cl/demos/kineactiva`
- `https://demo.baselogic.cl/demos/novawear`
- `https://demo.baselogic.cl/demos/autoprime`

La ruta raíz `/` mantiene un redireccionamiento compatible con salida estática hacia
`/demos`, incluyendo un enlace directo como fallback.

## DNS y SSL con Cloudflare

1. Crear el registro para `demo.baselogic.cl` apuntando a la IP de la VPS donde corre
   Coolify.
2. Iniciar la configuración con el registro en modo **DNS only** para evitar problemas
   de SSL o proxy durante la validación inicial.
3. Configurar el dominio y el certificado SSL en Coolify.
4. Validar que Coolify/SSL funcionan correctamente y que las seis rutas oficiales
   responden.
5. Activar el proxy de Cloudflare solo después de completar esa validación.

## Pendientes antes de publicación real

- Reemplazar el WhatsApp placeholder por el número real.
- Confirmar los canonicals finales para el dominio publicado.
- Completar la revisión visual final.

No se incluye deploy en esta preparación; el objetivo es dejar el proyecto listo para
la configuración de Coolify y Cloudflare.
