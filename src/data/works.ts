/** Catégories du book — reportages et campagnes fusionnés en « Portfolio ». */
export type Category = 'documentaires' | 'portfolio' | 'son'

export const CATEGORIES: { slug: Category; label: string }[] = [
  { slug: 'documentaires', label: 'Documentaires' },
  { slug: 'portfolio', label: 'Portfolio' },
  { slug: 'son', label: 'Podcasts & Radio' },
]

export interface Work {
  slug: string
  title: string
  year?: number
  category: Category
  /** Rôle du client sur l'œuvre (réalisation, montage, prod, stratégie numérique…) */
  role?: string
  /** Texte de contexte affiché sur la page œuvre */
  description?: string
  /** Embeds média : YouTube/Vimeo/Twitch/iframe générique */
  embeds?: { url: string; title?: string }[]
  /** Images (chemins dans /public/works/) */
  images?: string[]
  /** Liens externes (Infoscope, plateformes…) */
  links?: { label: string; url: string }[]
}

const INFOSCOPE = { label: 'Voir sur Infoscope', url: 'https://infoscope.live/' }

export const WORKS: Work[] = [
  // ——— Documentaires ———
  {
    slug: 'un-pognon-de-dingue',
    images: ['/thumbs/un-pognon-de-dingue.jpg'],
    title: 'Un Pognon de Dingue',
    category: 'documentaires',
    embeds: [{ url: 'https://www.youtube.com/embed/pDgsQ3DwLMs' }],
    links: [{ label: 'YouTube', url: 'https://youtu.be/pDgsQ3DwLMs' }, INFOSCOPE],
  },
  {
    slug: 'nous-sommes-en-guerre',
    images: ['/thumbs/nous-sommes-en-guerre.jpg'],
    title: 'Nous Sommes En Guerre',
    category: 'documentaires',
    description: 'Trilogie documentaire en trois volets.',
    embeds: [
      { url: 'https://www.youtube.com/embed/hoeFcV4LICk', title: 'Nous Sommes En Guerre — volet 1' },
      { url: 'https://www.youtube.com/embed/2MrNAhgOgWg', title: 'Nous Sommes En Guerre — volet 2' },
      { url: 'https://www.youtube.com/embed/J-cdmnGynuY', title: 'Nous Sommes En Guerre — volet 3' },
    ],
    links: [INFOSCOPE],
  },
  {
    slug: 'la-fin-de-leur-monde',
    images: ['/thumbs/la-fin-de-leur-monde.jpg'],
    title: 'La fin de leur monde (ça arrive près de chez vous)',
    category: 'documentaires',
    embeds: [{ url: 'https://www.youtube.com/embed/zKj2hS8ah_Y' }],
    links: [{ label: 'YouTube', url: 'https://youtu.be/zKj2hS8ah_Y' }, INFOSCOPE],
  },

  // ——— Portfolio (reportages & campagnes) ———
  {
    slug: 'montagne',
    images: ['/thumbs/montagne.jpg'],
    title: 'Montagne',
    category: 'portfolio',
    embeds: [{ url: 'https://www.youtube.com/embed/ClTIFQsDK0E' }],
    links: [{ label: 'YouTube', url: 'https://youtu.be/ClTIFQsDK0E' }],
  },
  {
    slug: 'routes-secondaires',
    images: ['/thumbs/routes-secondaires.jpg'],
    title: 'Routes secondaires',
    category: 'portfolio',
    embeds: [{ url: 'https://www.youtube.com/embed/oHWm7YZR90I' }],
    links: [{ label: 'YouTube', url: 'https://youtu.be/oHWm7YZR90I' }],
  },
  {
    slug: 'dirty-magic-willis',
    images: ['/thumbs/dirty-magic-willis.jpg'],
    title: 'Dirty & Magic Willis',
    category: 'portfolio',
    embeds: [{ url: 'https://www.youtube.com/embed/Rhm9nWSco2A' }],
    links: [{ label: 'YouTube', url: 'https://youtu.be/Rhm9nWSco2A' }],
  },
  {
    slug: 'printemps-des-jeunes',
    title: 'Printemps des jeunes',
    category: 'portfolio',
    description: 'Vidéo en cours d\'import — à venir.',
  },
  {
    slug: 'kapsule',
    title: 'Kapsule',
    category: 'portfolio',
    description: 'Vidéo en cours d\'import — à venir.',
  },

  // ——— Podcasts & Radio ———
  {
    slug: 'la-gouline',
    images: ['/thumbs/la-gouline.jpg'],
    title: 'La Gouline',
    category: 'son',
    description: "Émission de débat et d'analyse d'Infoscope.",
    embeds: [
      {
        url: 'https://www.youtube.com/embed/videoseries?list=PLBVL-Vlotxge-jNyfcqMR-Gt-xqZT3io4',
        title: 'La Gouline — playlist YouTube',
      },
    ],
    links: [
      { label: 'Playlist YouTube', url: 'https://youtube.com/playlist?list=PLBVL-Vlotxge-jNyfcqMR-Gt-xqZT3io4' },
      INFOSCOPE,
    ],
  },
  {
    slug: 'la-soupe-angevine',
    title: 'La Soupe Angevine',
    category: 'son',
    description: 'Podcast — Radio Campus Angers.',
    links: [
      {
        label: 'Radio Campus Angers',
        url: 'https://www.radiocampusangers.com/category/emission/la-redac/la-soupe-angevine/',
      },
      INFOSCOPE,
    ],
  },
]

export const worksByCategory = (category: Category) =>
  WORKS.filter((w) => w.category === category)

export const workBySlug = (slug: string) => WORKS.find((w) => w.slug === slug)
