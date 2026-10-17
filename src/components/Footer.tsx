export default function Footer() {
  return (
    <footer className="mt-16 px-6 md:px-10 py-8 border-t border-white/10 text-sm text-muted flex flex-wrap gap-x-8 gap-y-2">
      <a href="mailto:6495prod@gmail.com" className="hover:text-text transition-colors">
        6495prod@gmail.com
      </a>
      <a href="https://www.instagram.com/6495_prod/" target="_blank" rel="noreferrer" className="hover:text-text transition-colors">
        Instagram
      </a>
      <a href="https://infoscope.live/" target="_blank" rel="noreferrer" className="hover:text-text transition-colors">
        Infoscope
      </a>
      <span className="ml-auto">© {new Date().getFullYear()} 6495prod</span>
    </footer>
  )
}
