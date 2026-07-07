# Guía de producción de imágenes finales

Guía para producir las imágenes finales del Demo Landing Pack BaseLogic. No reemplazar archivos todavía: primero generar, revisar, optimizar y aprobar visualmente cada asset.

## Criterios generales

- Formato final: `.webp`.
- Optimizar para web antes de insertar.
- Evitar logos de marcas reales, textos incrustados difíciles de editar, rostros famosos y estética genérica de banco de imágenes.
- Mantener composición limpia, buena iluminación y coherencia con la paleta de cada demo.
- Dejar espacio visual suficiente para overlays cuando la imagen se use en hero o cards con texto encima.
- No incluir datos personales visibles, direcciones reales, teléfonos reales ni marcas reconocibles.
- En autos: sin patentes visibles.
- En salud y estética: sin claims médicos, sin procedimientos invasivos y sin promesas exageradas.

## Brasa Norte

Ruta exacta: `public/assets/demos/brasa-norte/`

Identidad: gastronómica, cálida y artesanal. Paleta terracota, crema, café oscuro y verde oliva. Debe sentirse local de barrio cuidado, apetitoso y real.

Prompt negativo general: evitar comida plástica, platos sobreproducidos, estética de cadena internacional, logos visibles, texto incrustado, manos deformes, humo excesivo, fondos fríos o clínicos, vajilla sucia.

| Archivo | Prioridad | Tamaño recomendado | Proporción | Uso en landing | Prompt sugerido | EN corto |
| --- | --- | --- | --- | --- | --- | --- |
| `hero-plato-principal.webp` | Alta | 1600x2100 | 4:5 vertical | Hero principal con plato destacado y nota "Plateada a la brasa". | Fotografía realista comercial de un plato principal de restaurante chileno artesanal, plateada o carne a la brasa con puré rústico y pebre fresco, sobre mesa de madera cálida, luz lateral dorada, fondo de local acogedor suavemente desenfocado, composición vertical con espacio libre en la parte inferior para overlay, tonos terracota, crema y café, alta calidad editorial gastronómica, sin logos ni texto. | Realistic warm restaurant hero shot, grilled beef plate on wooden table, cozy Chilean bistro, vertical editorial food photography. |
| `parrilla-brasa.webp` | Alta | 1200x900 | 4:3 | Especialidad y galería de parrilla abierta. | Fotografía realista de parrilla a la brasa con cortes de carne dorándose, brasas visibles, humo sutil, textura apetecible, luz cálida artesanal, fondo oscuro y acogedor, encuadre horizontal limpio para card, sin marcas ni texto. | Realistic charcoal grill with sizzling meat, warm rustic restaurant lighting, horizontal food photo. |
| `menu-ejecutivo.webp` | Alta | 1200x900 | 4:3 | Menú ejecutivo, recomendación del día y galería. | Plato de almuerzo ejecutivo servido en restaurante de barrio moderno: proteína a la brasa, ensalada fresca, acompañamiento casero y bebestible al fondo desenfocado, mesa cálida, luz natural suave, composición clara y abundante sin verse pesada, estilo comercial realista. | Realistic lunch plate, grilled main dish with salad, warm local restaurant table. |
| `ambiente-local.webp` | Alta | 1200x900 | 4:3 | Ambiente del local y sección de reservas. | Interior de restaurante cafetería cálido y artesanal, mesas preparadas, barra de café al fondo, madera, plantas discretas, luz de tarde, sensación acogedora de barrio, sin personas reconocibles, sin logos, encuadre horizontal con profundidad. | Cozy artisan cafe restaurant interior, warm wood, prepared tables, afternoon light. |
| `cafe-especialidad.webp` | Media | 900x700 | 9:7 | Servicio de café y barra. | Café de especialidad servido en taza cerámica sobre barra de madera, manos preparando latte o taza recién servida, luz cálida, textura de crema visible, ambiente cercano y artesanal, fondo limpio sin marcas. | Specialty coffee cup on warm wooden counter, cozy artisan cafe style. |
| `postre-casero.webp` | Media | 900x700 | 9:7 | Postres caseros y vitrina dulce. | Postre casero tipo kuchen o torta de hojarasca servido en plato de cafetería, migas y textura natural, luz cálida lateral, mesa rústica, fondo suave de vitrina o local, realista y apetitoso. | Homemade cake dessert in cozy cafe, warm natural light, realistic food photography. |

Nota de consistencia: priorizar imperfecciones reales y textura artesanal. La comida debe vender apetito y cercanía, no lujo frío.

## Glow Studio

Ruta exacta: `public/assets/demos/glow-studio/`

Identidad: premium, elegante y de belleza/cuidado personal. Paleta champagne, nude, negro suave y blanco cálido. Debe sentirse boutique, limpio y confiable.

Prompt negativo general: evitar look hospitalario, estética de spa genérico, piel irreal, retoque extremo, procedimientos médicos, agujas, sangre, claims de resultado, texto incrustado, logos de cosméticos, rostros famosos.

| Archivo | Prioridad | Tamaño recomendado | Proporción | Uso en landing | Prompt sugerido | EN corto |
| --- | --- | --- | --- | --- | --- | --- |
| `hero-estudio-belleza.webp` | Alta | 1600x2100 | 4:5 vertical | Hero principal del estudio. | Fotografía realista de interior premium de estudio de belleza boutique, espejo grande, silla elegante, detalles champagne y nude, luz cálida suave, fondo limpio, composición vertical con espacio libre inferior para tarjeta de agenda, sensación exclusiva y tranquila, sin logos ni texto. | Premium boutique beauty studio interior, champagne tones, warm light, vertical editorial photo. |
| `servicio-facial.webp` | Alta | 900x1100 | 4:5 | Card de limpieza facial. | Tratamiento facial profesional no invasivo en cabina limpia y cálida, persona relajada con toalla o banda de cabello, profesional aplicando producto con gesto cuidadoso, tonos nude y blanco cálido, realista, sin claims médicos ni piel artificial. | Non-invasive facial treatment in premium clean beauty cabin, warm nude tones. |
| `ambiente-premium.webp` | Alta | 1200x1500 | 4:5 | Galería de ambiente del salón. | Salón premium de belleza con sillón, espejo, estación de trabajo ordenada, materiales elegantes, luz cálida, paleta champagne y negro suave, composición vertical editorial, sin logos ni texto. | Premium salon ambience, mirror and chair, champagne palette, vertical editorial photo. |
| `servicio-cejas.webp` | Media | 900x700 | 9:7 | Card de perfilado de cejas. | Close-up realista de perfilado de cejas natural, rostro parcial, herramientas limpias, gesto delicado, luz suave, acabado elegante, sin piel excesivamente retocada, sin procedimientos invasivos. | Natural eyebrow shaping close-up, clean tools, elegant beauty studio lighting. |
| `servicio-unas.webp` | Media | 900x700 | 9:7 | Card de manicure permanente. | Manicure permanente en tonos nude o champagne, manos cuidadas sobre mesa de trabajo limpia, herramientas ordenadas, luz cálida, composición comercial elegante, sin logos de esmaltes. | Nude manicure service, clean premium nail table, warm elegant light. |
| `servicio-barberia.webp` | Media | 900x700 | 9:7 | Card de corte y barba premium. | Servicio de corte y barba premium en estación de barbería elegante, herramientas limpias, capa negra, luz cálida, enfoque en manos y detalle del corte, sin marcas visibles. | Premium barber service, elegant station, clean tools, warm light. |
| `antes-despues.webp` | Media | 1400x800 | 7:4 | Sección de resultados naturales. | Composición realista antes/después para estética no médica, resultado natural de cejas o piel luminosa, misma iluminación, fondo neutro, división visual sutil sin texto incrustado, comercial y responsable. | Natural beauty before-after composition, subtle split, clean light, no medical claims. |
| `equipo-profesional.webp` | Media | 900x700 | 9:7 | Galería de equipo profesional. | Equipo de belleza preparando materiales o atendiendo con cuidado en estudio boutique, uniformes neutros, ambiente limpio y premium, rostros no protagonistas, sin logos, luz cálida. | Beauty professionals preparing tools in premium boutique studio, warm light. |
| `servicio-masaje.webp` | Baja | 900x700 | 9:7 | Card de masaje de relajación. | Masaje de relajación en cabina cálida, encuadre respetuoso de manos sobre hombros o espalda cubierta, luz suave, ambiente sereno y elegante, sin estética clínica ni spa genérico. | Relaxation massage in warm premium room, respectful composition, soft light. |
| `servicio-peinado.webp` | Baja | 900x700 | 9:7 | Card de peinado para evento. | Peinado elegante para evento, detalle de ondas o recogido suave, profesional trabajando en espejo, luz cálida, tonos nude y negro, acabado natural premium, sin logos. | Elegant event hairstyle, soft waves, premium beauty studio lighting. |

Nota de consistencia: toda imagen debe transmitir higiene, reserva y ticket premium sin volverse clínica.

## KineActiva

Ruta exacta: `public/assets/demos/kineactiva/`

Identidad: clínica, confiable y profesional. Paleta azul petróleo, celeste, blanco y verde salud. Debe sentirse luminosa, humana y segura.

Prompt negativo general: evitar dramatizar dolor, camillas de hospital, cirugía, agujas, equipos médicos complejos, claims de cura, antes/después médicos, pacientes vulnerables expuestos, estética fitness agresiva, logos de clínicas.

| Archivo | Prioridad | Tamaño recomendado | Proporción | Uso en landing | Prompt sugerido | EN corto |
| --- | --- | --- | --- | --- | --- | --- |
| `hero-kinesiologo-consulta.webp` | Alta | 1600x1100 | 3:2 horizontal | Hero principal de consulta/evaluación. | Fotografía realista de kinesiólogo evaluando a paciente en consulta limpia y luminosa, camilla y elementos simples de rehabilitación, gesto profesional cercano, luz natural blanca suave, paleta azul petróleo, celeste y verde salud, composición horizontal con espacio libre lateral para overlays, sin logos ni claims médicos. | Physiotherapist evaluating patient in bright clean clinic, professional and trustworthy, horizontal photo. |
| `consulta-evaluacion.webp` | Alta | 1200x900 | 4:3 | Evaluación inicial y recursos visuales. | Conversación clínica entre kinesiólogo y paciente, revisión inicial de objetivos, escritorio o camilla en consulta ordenada, luz blanca suave, expresión tranquila y profesional, sin documentos legibles ni marcas. | Clinical consultation conversation, physiotherapy evaluation, bright clean room. |
| `profesional-kinesiologia.webp` | Alta | 1200x1500 | 4:5 vertical | Perfil profesional/confianza. | Retrato contextual de kinesiólogo en sala de rehabilitación, postura profesional, fondo limpio con camilla y bandas elásticas, luz natural, colores blanco, celeste y verde, sin logo ni texto, realista y cercano. | Professional physiotherapist portrait in clean rehab room, bright trustworthy style. |
| `rehabilitacion-deportiva.webp` | Media | 900x700 | 9:7 | Rehabilitación deportiva. | Ejercicio guiado de rehabilitación deportiva con banda elástica o apoyo funcional, kinesiólogo corrigiendo postura, sala limpia, tono seguro y profesional, sin estética de gimnasio intenso. | Guided sports rehab exercise with physiotherapist, clean clinical room. |
| `dolor-lumbar.webp` | Media | 900x700 | 9:7 | Dolor lumbar/movilidad. | Evaluación o educación de movilidad lumbar en consulta de kinesiología, paciente con ropa cómoda realizando movimiento suave, profesional observando, sin expresión extrema de dolor, luz clínica cálida. | Gentle lower-back mobility assessment, physiotherapy clinic, no exaggerated pain. |
| `terapia-adulto-mayor.webp` | Media | 900x700 | 9:7 | Atención adulto mayor. | Adulto mayor realizando ejercicio funcional de equilibrio o fuerza ligera con apoyo de kinesiólogo, trato respetuoso, sala luminosa, composición humana y segura, sin infantilizar al paciente. | Older adult functional therapy with physiotherapist, respectful bright clinical setting. |
| `sala-rehabilitacion.webp` | Media | 1200x900 | 4:3 | Sala/equipamiento. | Sala de rehabilitación ordenada con camilla, bandas, mancuernas pequeñas, pelota terapéutica y luz natural, estética clínica profesional, colores blanco, celeste y verde, sin personas ni logos. | Clean physiotherapy rehab room with simple equipment, bright professional style. |

Nota de consistencia: comunicar seguridad y criterio clínico. Las imágenes deben parecer consulta particular profesional, no hospital ni gimnasio.

## NovaWear

Ruta exacta: `public/assets/demos/novawear/`

Identidad: urbana, editorial y tipo catálogo moderno. Paleta negro, blanco, gris y acento lima. Debe sentirse como marca joven que vende por drops y WhatsApp.

Prompt negativo general: evitar logos reales, marcas reconocibles, texto incrustado, modelos famosos, poses exageradas, fondos caóticos, ropa con estampados protegidos, estética e-commerce genérica, baja nitidez en producto.

| Archivo | Prioridad | Tamaño recomendado | Proporción | Uso en landing | Prompt sugerido | EN corto |
| --- | --- | --- | --- | --- | --- | --- |
| `hero-editorial-streetwear.webp` | Alta | 1600x1100 | 3:2 horizontal | Hero editorial principal. | Fotografía editorial realista de modelo joven no famoso con outfit streetwear moderno, hoodie negro, cargo pants y zapatillas, fondo urbano limpio o estudio gris, contraste fuerte, acento lima sutil, composición horizontal con espacio para overlays grandes, lookbook comercial, sin logos ni texto. | Editorial streetwear model, black hoodie and cargo pants, clean urban studio, lime accent. |
| `coleccion-urbana.webp` | Alta | 1200x900 | 4:3 | Categoría ropa urbana. | Colección de ropa urbana organizada: hoodies, chaquetas oversize, cargos y capas sobre rack o modelo, fondo limpio, luz editorial, paleta negro, blanco, gris y lima, sensación de drop moderno, sin logos. | Urban clothing collection, hoodies and cargos, clean editorial catalog shot. |
| `producto-zapatillas.webp` | Alta | 900x700 | 9:7 | Categoría y producto zapatillas. | Zapatillas urbanas sin marca visible, detalle en uso o producto sobre fondo gris limpio, iluminación contrastada, textura clara, composición comercial para catálogo, acento lima discreto. | Unbranded urban sneakers, clean gray background, high contrast catalog photo. |
| `lookbook-modelo.webp` | Alta | 1200x1500 | 4:5 vertical | Lookbook y categoría drop. | Modelo no famoso con outfit completo streetwear, pose editorial natural, fondo de calle limpia o estudio minimal, prendas negras/grises con acento lima, composición vertical para lookbook, sin logos ni texto. | Streetwear lookbook model, full outfit, clean urban editorial, vertical. |
| `detalle-accesorios.webp` | Media | 900x700 | 9:7 | Accesorios y detalle de lookbook. | Close-up de accesorios urbanos sin marca: bolso crossbody, jockey, etiqueta genérica, cierres y texturas de tela, luz dura editorial, fondo limpio, paleta negra/gris/lima. | Close-up of unbranded streetwear accessories, crossbody bag, cap, fabric textures. |
| `producto-chaqueta.webp` | Media | 900x1100 | 4:5 | Producto chaqueta oversize. | Chaqueta oversize grafito o negra sobre modelo o fondo limpio, corte amplio visible, iluminación editorial, sin logos, composición vertical de catálogo moderno. | Oversized graphite jacket on model, clean modern catalog photo. |
| `producto-polera.webp` | Media | 900x1100 | 4:5 | Producto polera essential. | Polera blanca essential de algodón pesado, foto frontal en modelo o colgada sobre fondo gris claro, textura visible, look minimal, sin logos ni estampados. | White heavyweight essential t-shirt, clean product/model catalog shot. |
| `producto-cargo.webp` | Media | 900x1100 | 4:5 | Producto cargo pants. | Pantalón cargo arena o gris urbano, fit relajado visible, bolsillos claros, modelo en pose natural, fondo limpio, estilo catálogo editorial. | Relaxed cargo pants, visible pockets, clean editorial catalog. |
| `producto-hoodie.webp` | Media | 900x1100 | 4:5 | Producto hoodie. | Hoodie negro o grafito oversize sobre modelo, capucha y caída visibles, fondo urbano minimal, luz contrastada, sin marca real. | Oversized black hoodie on model, clean streetwear catalog lighting. |
| `producto-bolso.webp` | Baja | 900x700 | 9:7 | Producto bolso crossbody. | Bolso crossbody urbano sin marca visible, usado sobre outfit neutro o sobre fondo gris, detalle de material y escala, acento lima sutil. | Unbranded crossbody bag, streetwear outfit detail, clean gray background. |
| `producto-jockey.webp` | Baja | 900x700 | 9:7 | Producto jockey. | Jockey urbano sin logo real, color negro o gris con detalle lima genérico, sobre fondo limpio o en modelo parcialmente encuadrado, luz editorial. | Unbranded streetwear cap, black or gray with lime detail, clean catalog photo. |
| `producto-overshirt.webp` | Baja | 900x1100 | 4:5 | Producto overshirt. | Overshirt denim smoke o gris sobre modelo, capa abierta sobre polera básica, fit visible, fondo urbano limpio, estilo lookbook moderno. | Smoke denim overshirt layered outfit, modern streetwear lookbook. |

Nota de consistencia: priorizar nitidez de producto y energía editorial. Que se sienta catálogo vendible, no editorial abstracta.

## AutoPrime

Ruta exacta: `public/assets/demos/autoprime/`

Identidad: industrial, técnica y automotriz. Paleta grafito, negro, amarillo seguridad y acero. Debe comunicar orden, diagnóstico y confianza operativa.

Prompt negativo general: evitar patentes visibles, logos de marcas de autos, talleres sucios, fotos oscuras, humo excesivo, mecánicos sin elementos de seguridad, texto incrustado, certificaciones ficticias, autos de lujo reconocibles como foco principal.

| Archivo | Prioridad | Tamaño recomendado | Proporción | Uso en landing | Prompt sugerido | EN corto |
| --- | --- | --- | --- | --- | --- | --- |
| `hero-taller-mecanico.webp` | Alta | 1400x1750 | 4:5 vertical | Hero principal del taller. | Fotografía realista de taller mecánico profesional y limpio, auto genérico en zona de mantención, herramientas ordenadas, luz técnica, paleta grafito negro y amarillo seguridad, composición vertical con espacio inferior para overlay, sin patente visible, sin logos de marcas. | Clean professional auto workshop, generic car, graphite and safety yellow palette, vertical hero photo. |
| `diagnostico-scanner.webp` | Alta | 900x700 | 9:7 | Servicio scanner automotriz. | Técnico automotriz usando scanner de diagnóstico conectado a vehículo genérico, tablero desenfocado, manos con guantes, taller ordenado, luz técnica, sin marcas ni patente visible. | Mechanic using diagnostic scanner on generic car, clean workshop, no license plates. |
| `cambio-aceite.webp` | Alta | 900x700 | 9:7 | Mantención preventiva y cambio de aceite. | Cambio de aceite y filtros en taller limpio, técnico con guantes, envases genéricos sin marca, auto elevado parcialmente, luz industrial clara, composición horizontal para card. | Oil and filter change in clean workshop, mechanic with gloves, no brands. |
| `taller-profesional.webp` | Alta | 1200x900 | 4:3 | Vehículos atendidos o ambiente. | Vista amplia de taller automotriz ordenado, zona de trabajo limpia, elevador, herramientas organizadas, auto genérico sin patente, paleta grafito, acero y amarillo seguridad, iluminación profesional. | Wide clean auto workshop, organized tools, generic car, industrial lighting. |
| `mantencion-frenos.webp` | Media | 900x700 | 9:7 | Servicio frenos/suspensión. | Revisión de frenos con rueda desmontada, disco y pastillas visibles, técnico trabajando con guantes, taller limpio, enfoque técnico, sin logos de vehículo. | Brake maintenance close-up, wheel removed, mechanic with gloves, clean workshop. |
| `detailing-auto.webp` | Media | 900x700 | 9:7 | Detailing y resultado final. | Detailing exterior de auto genérico, paño de microfibra, brillo controlado, luz de taller profesional, sin patente visible, sin logos, composición limpia y técnica. | Car detailing close-up, microfiber cloth, clean workshop, no license plate. |
| `antes-despues-detailing.webp` | Media | 1400x800 | 7:4 | Comparación antes/después. | Composición antes/después de detailing automotriz en auto genérico, misma iluminación, lado izquierdo con pintura opaca o suciedad leve, lado derecho limpio y brillante, división visual sutil sin texto incrustado, sin patente. | Car detailing before-after split, same lighting, no text, no license plate. |
| `mecanico-trabajando.webp` | Media | 900x700 | 9:7 | Mecánico trabajando/pre-revisión. | Mecánico trabajando en revisión preventiva de auto genérico, guantes y ropa de trabajo neutra, gesto técnico realista, herramientas ordenadas, luz industrial, sin logos ni patente visible. | Mechanic inspecting generic car, gloves, organized tools, industrial light. |

Nota de consistencia: las imágenes deben vender método y transparencia. Mejor taller limpio y técnico que escena dramática.

## Orden recomendado de producción

1. Brasa Norte: `hero-plato-principal.webp`, `parrilla-brasa.webp`, `menu-ejecutivo.webp`, `ambiente-local.webp`.
2. Glow Studio: `hero-estudio-belleza.webp`, `servicio-facial.webp`, `ambiente-premium.webp`.
3. KineActiva: `hero-kinesiologo-consulta.webp`, `consulta-evaluacion.webp`, `profesional-kinesiologia.webp`.
4. NovaWear: `hero-editorial-streetwear.webp`, `coleccion-urbana.webp`, `producto-zapatillas.webp`, `lookbook-modelo.webp`.
5. AutoPrime: `hero-taller-mecanico.webp`, `diagnostico-scanner.webp`, `cambio-aceite.webp`, `taller-profesional.webp`.
6. Producir prioridades Media: Brasa Norte `cafe-especialidad.webp`, `postre-casero.webp`; Glow Studio `servicio-cejas.webp`, `servicio-unas.webp`, `servicio-barberia.webp`, `antes-despues.webp`, `equipo-profesional.webp`; KineActiva `rehabilitacion-deportiva.webp`, `dolor-lumbar.webp`, `terapia-adulto-mayor.webp`, `sala-rehabilitacion.webp`; NovaWear `detalle-accesorios.webp`, `producto-chaqueta.webp`, `producto-polera.webp`, `producto-cargo.webp`, `producto-hoodie.webp`; AutoPrime `mantencion-frenos.webp`, `detailing-auto.webp`, `antes-despues-detailing.webp`, `mecanico-trabajando.webp`.
7. Producir prioridades Baja: Glow Studio `servicio-masaje.webp`, `servicio-peinado.webp`; NovaWear `producto-bolso.webp`, `producto-jockey.webp`, `producto-overshirt.webp`.

## Checklist antes de insertar imágenes

- Verificar nombre exacto del archivo y carpeta exacta de destino.
- Exportar en `.webp`.
- Comprimir y revisar peso final. Como referencia: hero bajo 350 KB si es posible; cards bajo 220 KB; imágenes pequeñas bajo 160 KB.
- Revisar que no existan logos reales, textos incrustados, rostros famosos, patentes visibles ni datos personales.
- Revisar contraste y lectura con overlays o fondos del diseño.
- Probar recorte responsive en móvil, tablet y desktop.
- Confirmar que la imagen mantiene la identidad visual de la demo.
- Correr `npm run build`.
- Revisar en navegador que no aparezcan imágenes rotas.
- Hacer revisión visual final con el dueño antes de reemplazar el número o publicar.
