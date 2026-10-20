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
            <a href="https://x.com/ismehdi22" target="_blank" rel="noreferrer" className={chip}>
              <svg className="w-4 h-4 invert" aria-hidden="true"><use href="/icons.svg#x-icon" /></svg>
              X @ismehdi22
            </a>
            <a href="https://www.tiktok.com/@ismehdi22" target="_blank" rel="noreferrer" className={chip}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              TikTok @ismehdi22
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
