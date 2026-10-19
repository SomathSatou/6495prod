import type { ReactNode } from 'react'

function Entry({
  title,
  children,
  href,
}: {
  title: string
  children: ReactNode
  href?: string
}) {
  return (
    <li className="bg-surface border border-white/10 rounded-lg p-5">
      <p className="font-display font-semibold">{title}</p>
      <div className="text-muted text-sm mt-1">{children}</div>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 text-sm text-accent hover:underline underline-offset-4"
        >
          Voir ↗
        </a>
      )}
    </li>
  )
}

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
          </a>{' '}
          (sous le pseudonyme <strong>Adam Fourage</strong>), campagnes législatives
          (chargé de campagne numérique), podcasts et radio.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold uppercase tracking-widest text-muted">Expériences</h2>
        <ul className="mt-4 space-y-4">
          <Entry title="6495prod — production audiovisuelle">
            Documentaires, reportages, montage — en cours.
          </Entry>
          <Entry title="Infoscope" href="https://infoscope.live/">
            Documentaires et podcasts — j'officie sous le pseudonyme Adam Fourage.
          </Entry>
          <Entry title="Anjou Killers" href="http://angers.killers.free.fr/">
            Club de rugby loisir — Angers / Les Ponts-de-Cé.
          </Entry>
          <Entry title="Campagnes législatives">
            Chargé de campagne numérique.
          </Entry>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold uppercase tracking-widest text-muted">Formation</h2>
        <ul className="mt-4 space-y-4">
          <Entry title="Master" href="https://dune.univ-angers.fr/documents/dune12593">
            Mémoire consultable sur DUNE — Université d'Angers.
          </Entry>
          <Entry title="Abibac" href="https://www.education.gouv.fr/reussir-au-lycee/l-abibac-6638">
            Baccalauréat franco-allemand.
          </Entry>
        </ul>
      </section>

      <section className="mt-10">
        <a
          href="/CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 gradient-band rounded-md font-display uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
        >
          Télécharger le CV (PDF)
        </a>
        <embed
          src="/CV.pdf"
          type="application/pdf"
          className="mt-6 w-full aspect-[210/297] rounded-lg bg-white/5"
        />
      </section>
    </main>
  )
}
