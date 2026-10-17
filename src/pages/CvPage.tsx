export default function CvPage() {
  return (
    <main className="px-6 md:px-10 py-10 max-w-3xl">
      <h1 className="section-title">CV</h1>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold uppercase tracking-widest text-muted">Profil</h2>
        <p className="mt-4 leading-relaxed">
          Producteur et monteur audiovisuel — documentaires, reportages, campagnes numériques.
          Fortes capacités de montage et un sens de l'image. Productions pour{' '}
          <a href="https://infoscope.live/" target="_blank" rel="noreferrer" className="text-accent hover:underline">
            Infoscope
          </a>
          , campagnes législatives (chargé de campagne numérique), podcasts et radio.
        </p>
      </section>

      {/* TODO(client) : remplir les expériences détaillées */}
      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold uppercase tracking-widest text-muted">Expériences</h2>
        <ul className="mt-4 space-y-4">
          <li className="bg-surface rounded-lg p-5">
            <p className="font-display font-semibold">6495prod — production</p>
            <p className="text-muted text-sm mt-1">Documentaires, reportages, montage — en cours</p>
          </li>
          <li className="bg-surface rounded-lg p-5">
            <p className="font-display font-semibold">Campagnes législatives</p>
            <p className="text-muted text-sm mt-1">Chargé de campagne numérique</p>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <a
          href="/cv-6495prod.pdf"
          className="inline-block px-6 py-3 gradient-band rounded-md font-display uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
        >
          Télécharger le CV (PDF)
        </a>
        <p className="text-muted text-xs mt-3">Déposer le fichier cv-6495prod.pdf dans public/.</p>
      </section>
    </main>
  )
}
