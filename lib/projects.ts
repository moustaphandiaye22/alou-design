export const BRAND = {
  name: 'Studio Noir',
  wordmark: 'NOIR°',
  tagline: 'Studio créatif & agence digitale',
  email: 'hello@studionoir.fr',
  phone: '+33 1 84 80 00 00',
  location: 'Paris · Disponible dans le monde entier',
  socials: {
    instagram: '#',
    linkedin: '#',
    behance: '#',
    dribbble: '#',
  },
}

export type Project = {
  slug: string
  title: string
  category: string
  year: string
  client: string
  cover: string
  excerpt: string
  description: string
  services: string[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'maison-lumiere',
    title: 'Maison Lumière',
    category: 'Identité de marque',
    year: '2025',
    client: 'Maison Lumière',
    cover: '/images/ad-1.png',
    excerpt:
      'Une identité de joaillerie pensée comme un écrin : sobre, précieuse, intemporelle.',
    description:
      "Pour Maison Lumière, nous avons imaginé un système visuel complet : logotype gravé, palette dorée, typographie sériale et un film de marque tourné en lumière rasante. Chaque touchpoint raconte la même histoire de raffinement.",
    services: ['Brand Strategy', 'Identité visuelle', 'Direction artistique', 'Film de marque'],
    gallery: ['/images/ad-1.png', '/images/ad-2.png', '/images/portrait-1.png', '/images/portrait-3.png'],
  },
  {
    slug: 'atlas-realty',
    title: 'Atlas Réalty',
    category: 'Site web & UX',
    year: '2025',
    client: 'Atlas Réalty',
    cover: '/images/video-1.png',
    excerpt:
      'Une expérience web immersive pour révéler des architectures d’exception.',
    description:
      "Refonte digitale complète d'un groupe immobilier premium. Parcours narratif, transitions cinématographiques et performances soignées pour un site qui se visite comme une galerie.",
    services: ['UX / UI Design', 'Développement Next.js', 'Motion Design', 'CMS sur mesure'],
    gallery: ['/images/video-1.png', '/images/video-2.png', '/images/event-1.png', '/images/event-2.png'],
  },
  {
    slug: 'neon-nights',
    title: 'Neon Nights',
    category: 'Motion & Film',
    year: '2024',
    client: 'Festival Neon',
    cover: '/images/video-2.png',
    excerpt:
      'Un film d’ouverture vibrant, entre néons et silhouettes en mouvement.',
    description:
      "Direction artistique et montage d'un film de开幕 pour un festival pluridisciplinaire. Étalonnage chaud, rythme syncopé et titre animé en 3D.",
    services: ['Direction artistique', 'Montage', 'Étalonnage', 'Titre 3D'],
    gallery: ['/images/video-2.png', '/images/video-3.png', '/images/portrait-2.png', '/images/portrait-3.png'],
  },
  {
    slug: 'aura-parfum',
    title: 'Aura — Parfum',
    category: 'Campagne & 3D',
    year: '2024',
    client: 'Aura',
    cover: '/images/ad-2.png',
    excerpt:
      'Un flacon sculpté en 3D et une campagne qui évoque le souffle du parfum.',
    description:
      "Production 3D photoréaliste d'un flacon signature et déclinaison en visuels sociaux et display. Une direction sensorielle traduite en images.",
    services: ['3D & Rendu', 'Art Direction', 'Social Content', 'Retouche'],
    gallery: ['/images/ad-2.png', '/images/ad-1.png', '/images/portrait-1.png', '/images/wedding-1.png'],
  },
  {
    slug: 'gala-automne',
    title: 'Gala Automne',
    category: 'Événement & Photo',
    year: '2024',
    client: 'Fondation Hiver',
    cover: '/images/event-1.png',
    excerpt:
      'Couverture élégante d’un gala caritatif, de la réception au dernier toast.',
    description:
      "Reportage photo et captation vidéo d'un événement de prestige. Un regard discret et cinématographique pour figer l'instant sans le troubler.",
    services: ['Photographie', 'Captation', 'Montage événementiel', 'Retouche'],
    gallery: ['/images/event-1.png', '/images/event-2.png', '/images/wedding-2.png', '/images/wedding-1.png'],
  },
  {
    slug: 'serie-portraits',
    title: 'Série — Silhouettes',
    category: 'Éditorial',
    year: '2023',
    client: 'Magazine Écho',
    cover: '/images/portrait-2.png',
    excerpt:
      'Une série de portraits en clair-obscur pour un numéro spécial mode.',
    description:
      "Éditorial mode conçu autour du contraste et de la matière. Lumière studio sculpturale, direction des modèles et étalonnage monochrome.",
    services: ['Direction artistique', 'Photographie studio', 'Étalonnage', 'Retouche'],
    gallery: ['/images/portrait-2.png', '/images/portrait-1.png', '/images/portrait-3.png', '/images/about.png'],
  },
  {
    slug: 'conference-2024',
    title: 'Conférence 2024',
    category: 'Branding & Scénographie',
    year: '2024',
    client: 'Summit Tech',
    cover: '/images/event-2.png',
    excerpt:
      'Identité scénique et contenus pour une conférence tech de mille personnes.',
    description:
      "Systeme visuel décliné du keynote aux écrans géants, en passant par le signalétique. Une cohérence graphique de bout en bout.",
    services: ['Scénographie', 'Motion', 'Templates', 'Live content'],
    gallery: ['/images/event-2.png', '/images/event-1.png', '/images/video-3.png', '/images/video-1.png'],
  },
  {
    slug: 'collection-doree',
    title: 'Collection Dorée',
    category: 'Identité & Packaging',
    year: '2023',
    client: 'Maison Dorée',
    cover: '/images/wedding-2.png',
    excerpt:
      'Un univers packaging d’or et de soie pour une maison de chocolat.',
    description:
      "Identité et packaging d'une collection limitée. Découpe, foil et photographie produit pour une expérience d'ouverture sensorielle.",
    services: ['Identité', 'Packaging', 'Photographie produit', 'Direction artistique'],
    gallery: ['/images/wedding-2.png', '/images/wedding-1.png', '/images/ad-1.png', '/images/ad-2.png'],
  },
]

export const categories = [
  'Tout',
  ...Array.from(new Set(projects.map((p) => p.category))),
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
