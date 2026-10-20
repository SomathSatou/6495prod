import { CATEGORIES, WORKS } from '../data/works'
import WorkCard from '../components/WorkCard'

export default function Home() {
  const featured = WORKS.slice(0, 3)
  return (
    <main>
      {/* Hero — dégradé officiel de la charte */}
      <section className="gradient-band px-6 md:px-10 py-20 md:py-28">
        <img src="/logo-principal-blanc.png" alt="6495prod" className="h-32 md:h-44 w-auto mb-8" />
        <p className="font-display uppercase tracking-widest text-sm text-text/80">
          Book — production audiovisuelle
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 max-w-3xl leading-tight">
          Documentaires, reportages, campagnes, podcasts.
        </h1>
        <p className="mt-6 max-w-xl text-text/85">
          Montage, image, stratégie numérique. Productions réalisées notamment pour{' '}
          <a href="https://infoscope.live/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-text">
            Infoscope
          </a>
          .
        </p>
        <a
          href="#/portfolio"
          className="inline-block mt-8 px-6 py-3 bg-ink/70 hover:bg-ink font-display uppercase tracking-widest text-sm rounded-md transition-colors"
        >
          Voir le portfolio
        </a>
      </section>

      {/* Sélection */}
      <section className="px-6 md:px-10 py-14">
        <h2 className="section-title">Sélection</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {featured.map((w) => (
            <WorkCard key={w.slug} work={w} />
          ))}
        </div>
      </section>

      {/* Catégories */}
      <section className="px-6 md:px-10 pb-14">
        <div className="flex flex-wrap gap-4">
          {CATEGORIES.map((c) => (
            <a
              key={c.slug}
              href={`#/portfolio/${c.slug}`}
              className="px-5 py-3 bg-surface rounded-md font-display uppercase tracking-widest text-sm hover:text-accent transition-colors"
            >
              {c.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
