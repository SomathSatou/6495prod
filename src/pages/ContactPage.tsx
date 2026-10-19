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
            <a href="https://www.instagram.com/6495_prod/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-surface rounded-md text-sm hover:text-accent transition-colors inline-flex items-center gap-2">
              <img src="/icons/instagram.svg" alt="" className="w-4 h-4 invert" />
              Instagram @6495_prod
            </a>
            <a href="https://www.linkedin.com/in/mehdi-bouqsim-7870883a1" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-surface rounded-md text-sm hover:text-accent transition-colors inline-flex items-center gap-2">
              <img src="/icons/linkedin.svg" alt="" className="w-4 h-4 invert" />
              LinkedIn — Mehdi Bouqsim
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold uppercase tracking-widest text-muted">Carte de visite</h2>
          <img
            src="/carte-visite.png"
            alt="Carte de visite 6495prod — logo scanimate"
            className="mt-3 w-full max-w-md rounded-lg border border-white/10"
          />
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
