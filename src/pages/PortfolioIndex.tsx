import { CATEGORIES, worksByCategory } from '../data/works'
import WorkCard from '../components/WorkCard'

export default function PortfolioIndex() {
  return (
    <main className="px-6 md:px-10 py-10">
      <h1 className="section-title">Portfolio</h1>
      {CATEGORIES.map((c) => {
        const works = worksByCategory(c.slug)
        return (
          <section key={c.slug} className="mt-12">
            <h2 className="font-display text-xl font-semibold uppercase tracking-widest text-muted">
              <a href={`#/portfolio/${c.slug}`} className="hover:text-text transition-colors">
                • {c.label}
              </a>
            </h2>
            {works.length === 0 ? (
              <p className="text-muted mt-4">Contenu en préparation.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {works.map((w) => (
                  <WorkCard key={w.slug} work={w} />
                ))}
              </div>
            )}
          </section>
        )
      })}
    </main>
  )
}
