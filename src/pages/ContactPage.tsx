export default function ContactPage() {
  return (
    <main className="px-6 md:px-10 py-10 max-w-3xl">
      <h1 className="section-title">Infos / Contact</h1>

      <div className="mt-10 space-y-6">
        <div>
          <h2 className="font-display text-lg font-semibold uppercase tracking-widest text-muted">Contact</h2>
          <a href="mailto:6495prod@gmail.com" className="mt-2 inline-block text-2xl font-display hover:text-accent transition-colors">
            6495prod@gmail.com
          </a>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold uppercase tracking-widest text-muted">Réseaux</h2>
          <div className="mt-3 flex flex-wrap gap-4">
            <a href="https://www.instagram.com/6495_prod/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-surface rounded-md text-sm hover:text-accent transition-colors">
              Instagram @6495_prod
            </a>
            {/* TODO(client) : URL LinkedIn exacte */}
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold uppercase tracking-widest text-muted">Renvois</h2>
          <div className="mt-3 flex flex-wrap gap-4">
            <a href="https://infoscope.live/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-surface rounded-md text-sm hover:text-accent transition-colors">
              Infoscope
            </a>
            {/* TODO(client) : lien du mémoire (PDF dans public/ ou externe) */}
          </div>
        </div>
      </div>
    </main>
  )
}
