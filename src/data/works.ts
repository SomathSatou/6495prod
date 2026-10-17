/** Catégories du book — calquées sur la structure catégorielle du site de référence. */
export type Category = 'documentaires' | 'reportages' | 'campagnes' | 'son'

export const CATEGORIES: { slug: Category; label: string }[] = [
  { slug: 'documentaires', label: 'Documentaires' },
  { slug: 'reportages', label: 'Reportages' },
  { slug: 'campagnes', label: 'Campagnes' },
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

/**
 * Contenu provisoire — à remplir avec les œuvres et rôles exacts du client.
 * Les entrées ci-dessous servent de gabarit de structure.
 */
export const WORKS: Work[] = [
  {
    slug: 'la-fin-de-leur-monde',
    title: 'La fin de leur monde (ça arrive près de chez vous)',
    year: 2025,
    category: 'documentaires',
    role: 'À préciser', // rôle exact à confirmer (réalisation / montage / production)
    links: [{ label: 'Voir sur Infoscope', url: 'https://infoscope.live/' }],
  },
  {
    slug: 'cent-jours',
    title: 'Cent jours qui ébranlèrent la France',
    year: 2025,
    category: 'documentaires',
    role: 'À préciser',
    links: [{ label: 'Voir sur Infoscope', url: 'https://infoscope.live/' }],
  },
  {
    slug: 'la-gouline',
    title: 'La Gouline',
    category: 'son',
    role: 'À préciser',
    description: "Émission de débat et d'analyse d'Infoscope, en direct sur Twitch.",
    links: [{ label: 'Voir sur Infoscope', url: 'https://infoscope.live/' }],
  },
  {
    slug: 'la-soupe-angevine',
    title: 'La Soupe Angevine',
    category: 'son',
    role: 'À préciser',
    links: [{ label: 'Voir sur Infoscope', url: 'https://infoscope.live/' }],
  },
]

export const worksByCategory = (category: Category) =>
  WORKS.filter((w) => w.category === category)

export const workBySlug = (slug: string) => WORKS.find((w) => w.slug === slug)
