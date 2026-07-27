# Despliegue estático en Coolify — BL-005

## Configuración objetivo

- **Build Pack:** `Dockerfile`
- **Dockerfile path:** `./Dockerfile`
- **Port:** `80`
- **Domain:** `https://demo.baselogic.cl`
- **Stack:** Astro static site
- **Repositorio:** `Sherydans12/BL-005`
- **Branch sugerida:** `main`

Astro está configurado con `output: 'static'`. El build genera archivos HTML y assets
que la imagen final sirve con Nginx, sin backend ni adaptador de servidor.

Para este proyecto se recomienda usar el `Dockerfile` propio y no Nixpacks. El deploy
con Nixpacks continuó usando Node v22.11.0 incluso después de configurar
`NIXPACKS_NODE_VERSION=22.13.1`, mientras que Astro requiere Node >=22.12.0. El stage
de build del `Dockerfile` fija explícitamente `node:22.13.1-alpine`.

## Configuración en Coolify

1. Seleccionar **Dockerfile** como Build Pack.
2. Configurar **Dockerfile path** como `./Dockerfile`.
3. Configurar el puerto de la aplicación como `80`.
4. Configurar el dominio `https://demo.baselogic.cl`.
5. No configurar comandos de build o directorios de publicación adicionales: el
   `Dockerfile` ejecuta `npm ci`, genera `dist/` y lo copia a Nginx.
6. No usar Nixpacks para este deploy.

Nginx sirve los archivos estáticos desde `/usr/share/nginx/html` y resuelve rutas
generadas por Astro como `/demos/brasa-norte` hacia su correspondiente `index.html`.

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
