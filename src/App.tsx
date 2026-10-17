import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PortfolioIndex from './pages/PortfolioIndex'
import CategoryPage from './pages/CategoryPage'
import WorkPage from './pages/WorkPage'
import CvPage from './pages/CvPage'
import ContactPage from './pages/ContactPage'

/** Route courante dérivée du hash : '#/portfolio/son' → '/portfolio/son'. */
const currentRoute = () => {
  const hash = window.location.hash.replace(/^#/, '')
  return hash === '' ? '/' : hash
}

export default function App() {
  const [route, setRoute] = useState(currentRoute())

  useEffect(() => {
    const onHashChange = () => {
      setRoute(currentRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  let page
  const workMatch = route.match(/^\/portfolio\/([a-z]+)\/([a-z0-9-]+)$/)
  const catMatch = route.match(/^\/portfolio\/([a-z]+)$/)

  if (route === '/') page = <Home />
  else if (route === '/portfolio') page = <PortfolioIndex />
  else if (workMatch) page = <WorkPage slug={workMatch[2]} />
  else if (catMatch) page = <CategoryPage category={catMatch[1]} />
  else if (route === '/cv') page = <CvPage />
  else if (route === '/infos-contact') page = <ContactPage />
  else page = <main className="px-6 md:px-10 py-10">Page introuvable.</main>

  return (
    <div className="min-h-screen flex flex-col">
      <Header route={route} />
      <div className="flex-1">{page}</div>
      <Footer />
    </div>
  )
}
