import type { Work } from '../data/works'

export default function WorkCard({ work }: { work: Work }) {
  const cover = work.images?.[0]
  return (
    <a href={`#/portfolio/${work.category}/${work.slug}`} className="card block group">
      <div className="aspect-video bg-gradient-to-br from-accent-deep/60 to-ink flex items-end p-4 relative overflow-hidden">
        {cover && (
          <img
            src={cover}
            alt={work.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
        )}
        <span className="relative font-display text-xs uppercase tracking-widest text-text/80">
          {work.year}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold group-hover:text-accent transition-colors">{work.title}</h3>
        {work.role && <p className="text-muted text-sm mt-1">{work.role}</p>}
      </div>
    </a>
  )
}
