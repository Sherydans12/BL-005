export type DemoSlug =
  | 'brasa-norte'
  | 'glow-studio'
  | 'kineactiva'
  | 'novawear'
  | 'autoprime';

export type DemoMeta = {
  slug: DemoSlug;
  name: string;
  category: string;
  href: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  tone: string;
  accent: string;
};

export const demos: DemoMeta[] = [
  {
    slug: 'brasa-norte',
    name: 'Brasa Norte',
    category: 'Restaurante y cafetería',
    href: '/demos/brasa-norte',
    shortDescription:
      'Una experiencia cálida para cocina de autor, café de especialidad y reservas locales.',
    seoTitle: 'Brasa Norte | Demo landing restaurante y cafetería',
    seoDescription:
      'Landing demo para restaurante y cafetería artesanal, con foco en reservas, menú y cercanía.',
    tone: 'Cálido, artesanal y cercano',
    accent: 'Terracota, crema, café oscuro y verde oliva',
  },
  {
    slug: 'glow-studio',
    name: 'Glow Studio',
    category: 'Estética y barbería',
    href: '/demos/glow-studio',
    shortDescription:
      'Una landing premium para servicios de belleza, agenda online y tratamientos destacados.',
    seoTitle: 'Glow Studio | Demo landing estética y barbería',
    seoDescription:
      'Landing demo para estudio de estética y barbería premium, con servicios, agenda y prueba social.',
    tone: 'Elegante, premium y minimal',
    accent: 'Champagne, nude, negro suave y blanco cálido',
  },
  {
    slug: 'kineactiva',
    name: 'KineActiva',
    category: 'Kinesiología y salud particular',
    href: '/demos/kineactiva',
    shortDescription:
      'Una presencia clínica confiable para evaluación, rehabilitación y agendamiento particular.',
    seoTitle: 'KineActiva | Demo landing kinesiología particular',
    seoDescription:
      'Landing demo para consulta de kinesiología, con foco en confianza, tratamientos y agenda.',
    tone: 'Clínico, claro y confiable',
    accent: 'Azul petróleo, celeste, blanco y verde salud',
  },
  {
    slug: 'novawear',
    name: 'NovaWear',
    category: 'Tienda de ropa y catálogo',
    href: '/demos/novawear',
    shortDescription:
      'Una vitrina urbana editorial para colecciones, drops y pedidos por WhatsApp.',
    seoTitle: 'NovaWear | Demo landing tienda de ropa urbana',
    seoDescription:
      'Landing demo para marca de ropa y catálogo urbano, con colecciones, productos y contacto rápido.',
    tone: 'Urbano, editorial y directo',
    accent: 'Negro, blanco, gris y acento lima',
  },
  {
    slug: 'autoprime',
    name: 'AutoPrime',
    category: 'Taller mecánico y detailing',
    href: '/demos/autoprime',
    shortDescription:
      'Una landing técnica para servicios automotrices, diagnósticos, mantención y detailing.',
    seoTitle: 'AutoPrime | Demo landing taller mecánico y detailing',
    seoDescription:
      'Landing demo para taller mecánico y detailing, orientada a confianza técnica y cotizaciones.',
    tone: 'Industrial, técnico y preciso',
    accent: 'Grafito, negro, amarillo seguridad y acero',
  },
];

export const getDemoBySlug = (slug: DemoSlug) =>
  demos.find((demo) => demo.slug === slug);
