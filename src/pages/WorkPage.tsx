import { workBySlug } from '../data/works'
import Embed from '../components/Embed'

export default function WorkPage({ slug }: { slug: string }) {
  const work = workBySlug(slug)
  if (!work) return <main className="px-6 md:px-10 py-10">Œuvre introuvable.</main>

  return (
    <main className="px-6 md:px-10 py-10 max-w-4xl">
      <a href={`#/portfolio/${work.category}`} className="text-muted text-sm hover:text-text transition-colors">
        ← {work.category}
      </a>
      <h1 className="section-title mt-2">{work.title}</h1>
      <p className="text-muted mt-2">
        {work.year}
        {work.year && work.role ? ' — ' : ''}
        {work.role}
      </p>

      {work.embeds?.map((e) => (
        <div key={e.url} className="mt-8">
          <Embed url={e.url} title={e.title ?? work.title} />
        </div>
      ))}

      {work.description && <p className="mt-8 leading-relaxed">{work.description}</p>}

      {work.images && work.images.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {work.images.map((src) => (
            <img key={src} src={src} alt={work.title} loading="lazy" className="rounded-lg" />
          ))}
        </div>
      )}

      {work.links && (
        <div className="flex flex-wrap gap-4 mt-10">
          {work.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-surface rounded-md text-sm font-display uppercase tracking-widest hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </main>
  )
}
