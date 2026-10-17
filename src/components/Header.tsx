import { CATEGORIES } from '../data/works'

const base = '#/portfolio/'

export default function Header({ route }: { route: string }) {
  const link = (path: string, label: string) => {
    const active = route.startsWith(path)
    return (
      <a href={path === '/' ? '#/' : `#${path}`} className={active ? 'nav-link nav-link--active' : 'nav-link'}>
        {label}
      </a>
    )
  }

  return (
    <header className="px-6 md:px-10 pt-8 pb-6">
      <a href="#/" className="font-display text-4xl md:text-5xl font-bold tracking-tight">
        6495<span className="text-accent">prod</span>
      </a>
      <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-display text-sm md:text-base uppercase tracking-widest">
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
