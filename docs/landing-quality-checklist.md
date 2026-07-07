# Checklist de calidad para cada landing

Usar este checklist antes de cerrar el desarrollo de una demo.

## Diferenciación visual

- [ ] La landing no parece una copia de otra demo.
- [ ] El hero tiene composición propia.
- [ ] La paleta, radios, sombras y texturas corresponden al rubro.
- [ ] El ritmo de secciones no repite exactamente otra landing.
- [ ] Los componentes compartidos se usan con variantes o estilos propios cuando corresponde.

## Responsive

- [ ] Mobile: 320px a 480px sin overflow horizontal.
- [ ] Tablet: 768px a 1024px con jerarquía clara.
- [ ] Desktop: 1280px o más sin espacios muertos raros.
- [ ] Texto y botones no se pisan.
- [ ] Galerías o strips horizontales son usables en móvil.

## Conversión

- [ ] CTA principal visible en el primer viewport.
- [ ] CTA final claro.
- [ ] WhatsApp funciona con placeholder `+56912345678`.
- [ ] El formulario es visual y no promete envío real.
- [ ] El objetivo comercial de la landing está claro.

## SEO básico

- [ ] `title` específico.
- [ ] `description` específica.
- [ ] Una sola H1 clara.
- [ ] Secciones con H2/H3 coherentes.
- [ ] Copy orientado al rubro y no genérico.

## Jerarquía y legibilidad

- [ ] El H1 se entiende rápido.
- [ ] El texto tiene contraste suficiente.
- [ ] Los párrafos no son demasiado largos.
- [ ] Los labels de formularios son visibles.
- [ ] La sección más importante no queda escondida.

## Performance

- [ ] No se agregaron dependencias innecesarias.
- [ ] Imágenes futuras deben estar optimizadas.
- [ ] No hay JavaScript innecesario para contenido estático.
- [ ] `npm run build` pasa.

## Accesibilidad básica

- [ ] Links y botones tienen texto claro.
- [ ] Navegación por teclado razonable.
- [ ] `aria-label` solo cuando aporta contexto.
- [ ] Contraste revisado en botones y fondos.
- [ ] Inputs tienen labels asociados.

## Consistencia comercial

- [ ] El tono corresponde al negocio.
- [ ] Los beneficios son concretos.
- [ ] Los testimonios suenan realistas.
- [ ] Las FAQ responden objeciones reales.
- [ ] La landing explica por qué contactar ahora.

## Cierre

- [ ] Revisar `/demos` después de tocar metadata o theme.
- [ ] Revisar la ruta individual.
- [ ] Confirmar que no se modificaron otras landings sin necesidad.
- [ ] Confirmar que los TODOs futuros siguen vigentes o fueron actualizados.
