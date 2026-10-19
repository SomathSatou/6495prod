import { CATEGORIES } from '../data/works'

const base = '#/portfolio/'

export default function Header({ route }: { route: string }) {
  const link = (path: string, label: string) => {
    const active = route.startsWith(path)
    return (
      <a href={path === '/' ? '#/' : `#${path}`} className={active ? 'nav-link nav-link--active' : 'nav-link'}>
        • {label}
      </a>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-white/10 px-6 md:px-10 py-4 flex flex-wrap items-center gap-x-8 md:gap-x-12 gap-y-4">
      <a href="#/" className="inline-flex shrink-0">
        <img src="/logo-principal-blanc.png" alt="6495prod" className="h-14 md:h-16 w-auto" />
      </a>
      <nav className="flex flex-wrap gap-x-6 gap-y-2 max-w-xl font-display text-sm md:text-base uppercase tracking-widest">
        {CATEGORIES.map((c) => (
          <a
            key={c.slug}
            href={`${base}${c.slug}`}
            className={route === `/portfolio/${c.slug}` ? 'nav-link nav-link--active' : 'nav-link'}
          >
            • {c.label}
          </a>
        ))}
        {link('/cv', 'CV')}
        {link('/infos-contact', 'Infos / Contact')}
      </nav>
    </header>
  )
}
