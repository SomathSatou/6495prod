import type { Work } from '../data/works'

const youtubeId = (url: string) =>
  url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/)?.[1]

export default function WorkCard({ work }: { work: Work }) {
  const yt = work.embeds?.map((e) => youtubeId(e.url)).find(Boolean)
  const cover = work.images?.[0] ?? (yt ? `https://i.ytimg.com/vi/${yt}/maxresdefault.jpg` : undefined)

  return (
    <a href={`#/portfolio/${work.category}/${work.slug}`} className="card block group">
      <div className="aspect-video bg-gradient-to-br from-accent-deep/60 to-ink flex items-end p-4 relative overflow-hidden">
        {cover && (
          <img
            src={cover}
            alt={work.title}
            loading="lazy"
            onError={
              yt
                ? (e) => {
                    const img = e.currentTarget
                    if (!img.src.includes('hqdefault'))
                      img.src = `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`
                  }
                : undefined
            }
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
