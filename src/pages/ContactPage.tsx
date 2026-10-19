export default function ContactPage() {
  const heading = 'font-display text-lg font-semibold uppercase tracking-widest text-muted'
  const chip =
    'px-5 py-2.5 bg-surface rounded-md text-sm hover:text-accent transition-colors inline-flex items-center gap-2'

  return (
    <main className="px-6 md:px-10 py-10 max-w-3xl lg:max-w-6xl">
      <h1 className="section-title">Infos / Contact</h1>

      {/* Mobile : pile verticale identique — lg : 2 colonnes, carte à droite sur 3 lignes */}
      <div className="mt-10 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
        <div>
          <h2 className={heading}>Contact</h2>
          <a
            href="mailto:6495prod@gmail.com"
            className="mt-3 inline-block font-display text-2xl lg:text-4xl xl:text-5xl tracking-tight hover:text-accent transition-colors"
          >
            6495prod@gmail.com
          </a>
        </div>

        <div>
          <h2 className={heading}>Réseaux</h2>
          <div className="mt-3 flex flex-wrap gap-4">
            <a href="https://www.instagram.com/6495_prod/" target="_blank" rel="noreferrer" className={chip}>
              <img src="/icons/instagram.svg" alt="" className="w-4 h-4 invert" />
              Instagram @6495_prod
            </a>
            <a href="https://www.linkedin.com/in/mehdi-bouqsim-7870883a1" target="_blank" rel="noreferrer" className={chip}>
              <img src="/icons/linkedin.svg" alt="" className="w-4 h-4 invert" />
              LinkedIn — Mehdi Bouqsim
            </a>
          </div>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-3">
          <h2 className={heading}>Carte de visite</h2>
          <img
            src="/carte-visite.png"
            alt="Carte de visite 6495prod — logo scanimate"
            className="mt-3 w-full max-w-md lg:max-w-none rounded-lg border border-white/10"
          />
          <div aria-hidden="true" className="hidden lg:block scanimate-bars h-5 opacity-30 mt-6" />
        </div>

        <div>
          <h2 className={heading}>Renvois</h2>
          <div className="mt-3 flex flex-wrap gap-4">
            <a href="https://infoscope.live/" target="_blank" rel="noreferrer" className={chip}>
              Infoscope
            </a>
            <a href="https://dune.univ-angers.fr/documents/dune12593" target="_blank" rel="noreferrer" className={chip}>
              Mémoire — DUNE
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
