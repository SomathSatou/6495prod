import { CATEGORIES, worksByCategory, type Category } from '../data/works'
import WorkCard from '../components/WorkCard'

export default function CategoryPage({ category }: { category: string }) {
  const cat = CATEGORIES.find((c) => c.slug === category)
  if (!cat) return <main className="px-6 md:px-10 py-10">Catégorie inconnue.</main>

  const works = worksByCategory(cat.slug as Category)
  return (
    <main className="px-6 md:px-10 py-10">
      <h1 className="section-title">{cat.label}</h1>
      {works.length === 0 ? (
        <p className="text-muted mt-6">Contenu en préparation.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {works.map((w) => (
            <WorkCard key={w.slug} work={w} />
          ))}
        </div>
      )}
    </main>
  )
}
