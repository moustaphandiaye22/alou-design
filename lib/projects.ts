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

const IMG = {
  ad1: '/mariage/prince%20silva_89.JPG',
  ad2: '/distribution%20ndogou/La%20fleche%20_86.jpg',
  video1: '/concert/VJ_76.jpg',
  video2: '/concert/CONCERT%20GUN%20MOR_103.jpg',
  video3: '/concert/BMJAAY_68.jpg',
  portrait1: '/defiler/aloucreator_93.jpg',
  portrait2: '/shoothing/2024_10_21_23_21_IMG_2541.JPG',
  portrait3: '/defiler/aloucreator_108.jpg',
  event1: '/concert/VJ_59.jpg',
  event2: '/cover%20diaporamara/2024_09_15_14_56_IMG_1829.JPG',
  wedding1: '/mariage/princesse%20biaye_67.JPG',
  wedding2: '/distribution%20ndogou/La%20fleche%20_253.jpg',
  about: '/mariage/_OUZ4116.jpg',
}

export const projects: Project[] = [
  {
    slug: 'maison-lumiere',
    title: 'Maison Lumière',
    category: 'Identité de marque',
    year: '2025',
    client: 'Maison Lumière',
    cover: IMG.ad1,
    excerpt:
      'Une identité de joaillerie pensée comme un écrin : sobre, précieuse, intemporelle.',
    description:
      "Pour Maison Lumière, nous avons imaginé un système visuel complet : logotype gravé, palette dorée, typographie sériale et un film de marque tourné en lumière rasante. Chaque touchpoint raconte la même histoire de raffinement.",
    services: ['Brand Strategy', 'Identité visuelle', 'Direction artistique', 'Film de marque'],
    gallery: [IMG.ad1, IMG.ad2, IMG.portrait1, IMG.portrait3],
  },
  {
    slug: 'atlas-realty',
    title: 'Atlas Réalty',
    category: 'Site web & UX',
    year: '2025',
    client: 'Atlas Réalty',
    cover: IMG.video1,
    excerpt:
      'Une expérience web immersive pour révéler des architectures d’exception.',
    description:
      "Refonte digitale complète d'un groupe immobilier premium. Parcours narratif, transitions cinématographiques et performances soignées pour un site qui se visite comme une galerie.",
    services: ['UX / UI Design', 'Développement Next.js', 'Motion Design', 'CMS sur mesure'],
    gallery: [IMG.video1, IMG.video2, IMG.event1, IMG.event2],
  },
  {
    slug: 'neon-nights',
    title: 'Neon Nights',
    category: 'Motion & Film',
    year: '2024',
    client: 'Festival Neon',
    cover: IMG.video2,
    excerpt:
      'Un film d’ouverture vibrant, entre néons et silhouettes en mouvement.',
    description:
      "Direction artistique et montage d'un film de开幕 pour un festival pluridisciplinaire. Étalonnage chaud, rythme syncopé et titre animé en 3D.",
    services: ['Direction artistique', 'Montage', 'Étalonnage', 'Titre 3D'],
    gallery: [IMG.video2, IMG.video3, IMG.portrait2, IMG.portrait3],
  },
  {
    slug: 'aura-parfum',
    title: 'Aura — Parfum',
    category: 'Campagne & 3D',
    year: '2024',
    client: 'Aura',
    cover: IMG.ad2,
    excerpt:
      'Un flacon sculpté en 3D et une campagne qui évoque le souffle du parfum.',
    description:
      "Production 3D photoréaliste d'un flacon signature et déclinaison en visuels sociaux et display. Une direction sensorielle traduite en images.",
    services: ['3D & Rendu', 'Art Direction', 'Social Content', 'Retouche'],
    gallery: [IMG.ad2, IMG.ad1, IMG.portrait1, IMG.wedding1],
  },
  {
    slug: 'gala-automne',
    title: 'Gala Automne',
    category: 'Événement & Photo',
    year: '2024',
    client: 'Fondation Hiver',
    cover: IMG.event1,
    excerpt:
      'Couverture élégante d’un gala caritatif, de la réception au dernier toast.',
    description:
      "Reportage photo et captation vidéo d'un événement de prestige. Un regard discret et cinématographique pour figer l'instant sans le troubler.",
    services: ['Photographie', 'Captation', 'Montage événementiel', 'Retouche'],
    gallery: [IMG.event1, IMG.event2, IMG.wedding2, IMG.wedding1],
  },
  {
    slug: 'serie-portraits',
    title: 'Série — Silhouettes',
    category: 'Éditorial',
    year: '2023',
    client: 'Magazine Écho',
    cover: IMG.portrait2,
    excerpt:
      'Une série de portraits en clair-obscur pour un numéro spécial mode.',
    description:
      "Éditorial mode conçu autour du contraste et de la matière. Lumière studio sculpturale, direction des modèles et étalonnage monochrome.",
    services: ['Direction artistique', 'Photographie studio', 'Étalonnage', 'Retouche'],
    gallery: [IMG.portrait2, IMG.portrait1, IMG.portrait3, IMG.about],
  },
  {
    slug: 'conference-2024',
    title: 'Conférence 2024',
    category: 'Branding & Scénographie',
    year: '2024',
    client: 'Summit Tech',
    cover: IMG.event2,
    excerpt:
      'Identité scénique et contenus pour une conférence tech de mille personnes.',
    description:
      "Systeme visuel décliné du keynote aux écrans géants, en passant par le signalétique. Une cohérence graphique de bout en bout.",
    services: ['Scénographie', 'Motion', 'Templates', 'Live content'],
    gallery: [IMG.event2, IMG.event1, IMG.video3, IMG.video1],
  },
  {
    slug: 'collection-doree',
    title: 'Collection Dorée',
    category: 'Identité & Packaging',
    year: '2023',
    client: 'Maison Dorée',
    cover: IMG.wedding2,
    excerpt:
      'Un univers packaging d’or et de soie pour une maison de chocolat.',
    description:
      "Identité et packaging d'une collection limitée. Découpe, foil et photographie produit pour une expérience d'ouverture sensorielle.",
    services: ['Identité', 'Packaging', 'Photographie produit', 'Direction artistique'],
    gallery: [IMG.wedding2, IMG.wedding1, IMG.ad1, IMG.ad2],
  },
]

export const categories = [
  'Tout',
  ...Array.from(new Set(projects.map((p) => p.category))),
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
