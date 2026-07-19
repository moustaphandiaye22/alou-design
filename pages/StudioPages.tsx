import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  CircleUserRound,
  Grid2X2,
  Home,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react'

const CONTACT = {
  email: 'gueyealassane096@gmail.com',
  phoneLabel: '+221 77 236 19 09',
  phone: '+221772361909',
  whatsapp: 'https://wa.me/221772361909?text=Bonjour%20Alassane%2C%20je%20souhaite%20vous%20parler%20de%20mon%20projet.',
}
type PortfolioImage = { title: string; category: string; image: string }

const imageModules = import.meta.glob(
  '/public/optimized/{cover diaporamara,defiler,shoothing,concert,distribution ndogou,mariage}/*.webp',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>

const logoModules = import.meta.glob('/public/Fichier 1.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const logoImage = logoModules['/public/Fichier 1.png']
const aboutModules = import.meta.glob('/public/optimized/about/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const aboutImages = Object.entries(aboutModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, image]) => image)

const categoryLabels: Record<string, string> = {
  'cover diaporamara': 'Covers',
  defiler: 'Défilé',
  shoothing: 'Shooting',
  concert: 'Concert',
  'distribution ndogou': 'Distribution Ndogou',
  mariage: 'Mariage',
}

const work: PortfolioImage[] = Object.entries(imageModules)
  .map(([path, image]) => {
    const parts = path.split('/')
    const folder = parts.at(-2) ?? ''
    const filename = parts.at(-1) ?? ''
    return {
      image,
      category: categoryLabels[folder] ?? folder,
      title: filename.replace(/\.[^.]+$/, '').replaceAll('_', ' '),
    }
  })
  .sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title))

const heroImages = work
  .filter(item => item.category === 'Covers')
  .map(item => item.image)

const shuffledWork = [...work]
for (let index = shuffledWork.length - 1; index > 0; index -= 1) {
  const randomIndex = Math.floor(Math.random() * (index + 1))
  ;[shuffledWork[index], shuffledWork[randomIndex]] = [
    shuffledWork[randomIndex],
    shuffledWork[index],
  ]
}

const scrollingImages = shuffledWork.slice(0, 16)
const scrollingRowOne = scrollingImages.filter((_, index) => index % 2 === 0)
const scrollingRowTwo = scrollingImages.filter((_, index) => index % 2 !== 0)

const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'À propos' },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="lux-header">
      <div className="lux-nav">
        <Link to="/" className="lux-logo" aria-label="Alou Creator — Accueil">
          <img src={logoImage} alt="Alou Creator" />
        </Link>
        <nav className="lux-desktop-nav">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
          ))}
        </nav>
        <button className="lux-menu" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="lux-mobile-menu">
          {nav.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
        </nav>
      )}
    </header>
  )
}

function BottomNav() {
  const items = [
    { to: '/', label: 'Accueil', icon: Home },
    { to: '/portfolio', label: 'Portfolio', icon: Grid2X2 },
    { to: '/about', label: 'À propos', icon: CircleUserRound },
  ]
  return <nav className="bottom-nav">{items.map(({ to, label, icon: Icon }) => (
    <NavLink key={to} to={to}><Icon /><span>{label}</span></NavLink>
  ))}</nav>
}

function Footer() {
  return (
    <footer className="lux-footer">
      <div><Link className="lux-logo" to="/"><img src={logoImage} alt="Alou Creator" /></Link><p>Arts graphiques · Branding · Motion design<br />Alassane GUEYE — Dakar, Sénégal</p></div>
      <div><h4>Navigation</h4>{nav.map(n => <Link key={n.to} to={n.to}>{n.label}</Link>)}</div>
      <div><h4>Contact</h4><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneLabel}</a><p>Dakar, Sénégal</p></div>
      <div className="copyright">© 2026 ALOU CREATOR. Tous droits réservés.</div>
    </footer>
  )
}

function Shell({ children, footer = true }: { children: React.ReactNode; footer?: boolean }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return <div className="lux-site"><Header />{children}{footer && <Footer />}<a className="whatsapp-button" href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label={`Contacter Alassane sur WhatsApp au ${CONTACT.phoneLabel}`}><MessageCircle /><span>WhatsApp</span></a><BottomNav /></div>
}

export function HomePage() {
  const [slide, setSlide] = useState(0)
  const [homeFilter, setHomeFilter] = useState('Tout')
  const [homeVisibleCount, setHomeVisibleCount] = useState(24)
  const homeCategories = ['Tout', ...Object.values(categoryLabels)]
  const homeSelection = homeFilter === 'Tout' ? work : work.filter(item => item.category === homeFilter)
  const homeVisible = homeSelection.slice(0, homeVisibleCount)
  const changeHomeFilter = (category: string) => {
    setHomeFilter(category)
    setHomeVisibleCount(24)
  }
  useEffect(() => {
    const timer = window.setInterval(() => setSlide(v => (v + 1) % heroImages.length), 5500)
    return () => window.clearInterval(timer)
  }, [])
  return (
    <Shell>
      <main>
        <section className="lux-hero">
          <img key={heroImages[slide]} src={heroImages[slide]} className="active" alt="" decoding="async" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-copy"><h1>ARTS GRAPHIQUES</h1><p>Branding & Motion Design</p><div><Link to="/portfolio" className="gold-button">Portfolio</Link><a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="line-button">Me contacter</a></div></div>
          <div className="hero-dots">{heroImages.map((_, i) => <button key={i} className={i === slide ? 'active' : ''} onClick={() => setSlide(i)} />)}</div>
        </section>
        <section className="intro-section lux-section">
          <AboutPortraits />
          <div><Eyebrow>À propos</Eyebrow><h2>Je ne crée pas<br />pour décorer.<br /><em>Je crée pour marquer.</em></h2><p>Je suis Alassane GUEYE, créatif passionné par les arts graphiques, le branding et le motion design.</p><p>Depuis bientôt quatre ans, je transforme les idées en identités fortes, cohérentes et mémorables.</p><Link className="text-link" to="/about">Découvrir mon parcours →</Link></div>
        </section>
        <section className="lux-section home-work"><Eyebrow>Portfolio</Eyebrow><h2>Nos Univers</h2><div className="universe-rows"><div className="work-strip-wrap"><div className="work-strip">{[...scrollingRowOne, ...scrollingRowOne].map((item, index) => <article key={`one-${item.image}-${index}`}><img src={item.image} alt="" loading="lazy" decoding="async" /></article>)}</div></div><div className="work-strip-wrap"><div className="work-strip work-strip-reverse">{[...scrollingRowTwo, ...scrollingRowTwo].map((item, index) => <article key={`two-${item.image}-${index}`}><img src={item.image} alt="" loading="lazy" decoding="async" /></article>)}</div></div></div><Link to="/portfolio" className="line-button">Voir tout le portfolio</Link></section>
        <section className="home-portfolio"><div className="home-portfolio-heading"><Eyebrow>Photographies</Eyebrow><h2>Le portfolio complet</h2><p>{homeSelection.length} images</p></div><div className="filters">{homeCategories.map(category => <button key={category} onClick={() => changeHomeFilter(category)} className={homeFilter === category ? 'active' : ''}>{category}</button>)}</div><div className="portfolio-grid">{homeVisible.map(item => <article key={item.image}><img src={item.image} alt="" loading="lazy" decoding="async" /></article>)}</div>{homeVisibleCount < homeSelection.length && <div className="load-more"><button className="gold-button" onClick={() => setHomeVisibleCount(count => count + 24)}>Voir plus de photos</button></div>}</section>
        <section className="lux-section home-cta"><Eyebrow>Un projet en tête ?</Eyebrow><h2>Donnons vie à <em>votre vision</em></h2><p>Identité visuelle, branding, supports graphiques ou motion design : chaque collaboration commence par une conversation.</p><div><a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="gold-button">Me contacter</a><a href={`mailto:${CONTACT.email}`} className="line-button">M’écrire</a></div></section>
      </main>
    </Shell>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p> }

function AboutPortraits() {
  return <div className="about-portraits" aria-label="Portraits d’Alassane GUEYE">{aboutImages.map((image, index) => <img key={image} src={image} alt={index === 0 ? 'Alassane GUEYE, créateur d’Alou Creator' : ''} loading="eager" decoding="async" fetchPriority={index === 0 ? 'high' : 'auto'} />)}</div>
}

export function PortfolioPage() {
  const categories = ['Tout', ...Object.values(categoryLabels)]
  const [filter, setFilter] = useState('Tout')
  const [visibleCount, setVisibleCount] = useState(18)
  const shown = filter === 'Tout' ? work : work.filter(w => w.category === filter)
  const visible = shown.slice(0, visibleCount)
  const changeFilter = (category: string) => {
    setFilter(category)
    setVisibleCount(18)
  }
  return <Shell><main className="inner-page"><div className="page-heading"><Eyebrow>Portfolio photo</Eyebrow><h1>Toutes nos Images</h1><p className="portfolio-count">{shown.length} photographies</p></div><div className="filters">{categories.map(c => <button key={c} onClick={() => changeFilter(c)} className={filter === c ? 'active' : ''}>{c}</button>)}</div><div className="portfolio-grid">{visible.map(item => <article key={item.image}><img src={item.image} alt="" loading="lazy" decoding="async" /></article>)}</div>{visibleCount < shown.length && <div className="load-more"><button className="gold-button" onClick={() => setVisibleCount(count => count + 18)}>Charger plus d’images</button></div>}</main></Shell>
}

export function AboutPage() {
  return <Shell><main className="inner-page about-page"><div className="page-heading"><Eyebrow>À propos</Eyebrow><h1>Mon Parcours</h1></div><section className="about-grid"><div className="framed-photo"><AboutPortraits /></div><div><blockquote>“Créer, c’est donner une forme forte et mémorable à une idée.”</blockquote><p>Hello ! Je suis Alassane GUEYE, passionné par les arts graphiques, le branding et le motion design. J’évolue dans ces secteurs depuis bientôt quatre ans.</p><p>Ma motivation vient en grande partie de mon père, qui est designer. Il m’a transmis énormément de connaissances et une sensibilité créative qui me permettent aujourd’hui de proposer des solutions originales et adaptées à chaque projet.</p><p>Grâce à mon expérience, j’ai développé une expertise solide en conception graphique, stratégie de marque et communication visuelle. J’accompagne chaque client personnellement, de la première idée jusqu’à la réalisation finale.</p><div className="stats"><span><b>4 ans</b>D’expérience</span><span><b>3</b>Expertises créatives</span><span><b>100%</b>Passionné</span></div></div></section></main></Shell>
}
