import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  CalendarDays,
  Camera,
  CircleUserRound,
  Grid2X2,
  Home,
  LockKeyhole,
  Mail,
  MessageCircle,
  Menu,
  Phone,
  X,
} from 'lucide-react'

const CONTACT = {
  email: 'gueyealassane096@gmail.com',
  phoneLabel: '+221 77 236 19 09',
  phone: '+221772361909',
  whatsapp: 'https://wa.me/221772361909?text=Bonjour%20Alassane%2C%20je%20souhaite%20vous%20parler%20de%20mon%20projet.',
}
const heroImages = [
  '/images/hero.png',
  '/images/portrait-1.png',
  '/images/wedding-1.png',
  '/images/ad-1.png',
]

const work = [
  { title: 'Éclat', category: 'Identité visuelle', image: '/images/portrait-1.png' },
  { title: 'Noces', category: 'Direction artistique', image: '/images/wedding-1.png' },
  { title: 'Héritage', category: 'Branding', image: '/images/ad-1.png' },
  { title: 'Présence', category: 'Design graphique', image: '/images/portrait-2.png' },
  { title: 'Mouvement', category: 'Motion design', image: '/images/event-1.png' },
  { title: 'Minuit', category: 'Motion design', image: '/images/video-2.png' },
  { title: 'Velours', category: 'Direction artistique', image: '/images/portrait-3.png' },
  { title: 'Signature', category: 'Branding', image: '/images/ad-2.png' },
]

const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'À propos' },
  { to: '/booking', label: 'Réserver' },
]

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="lux-header">
      <div className="lux-nav">
        <Link to="/" className="lux-logo" aria-label="Alou Creator — Accueil">
          <img src="/Fichier%201.png" alt="Alou Creator" />
        </Link>
        <nav className="lux-desktop-nav">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
          ))}
          <NavLink to="/login" className="client-link">Espace client</NavLink>
        </nav>
        <button className="lux-menu" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="lux-mobile-menu">
          {nav.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
          <NavLink to="/login" onClick={() => setOpen(false)}>Espace client</NavLink>
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
    { to: '/booking', label: 'Réserver', icon: CalendarDays },
    { to: '/login', label: 'Client', icon: LockKeyhole },
  ]
  return <nav className="bottom-nav">{items.map(({ to, label, icon: Icon }) => (
    <NavLink key={to} to={to}><Icon /><span>{label}</span></NavLink>
  ))}</nav>
}

function Footer() {
  return (
    <footer className="lux-footer">
      <div><Link className="lux-logo" to="/"><img src="/Fichier%201.png" alt="Alou Creator" /></Link><p>Arts graphiques · Branding · Motion design<br />Alassane GUEYE — Dakar, Sénégal</p></div>
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
  useEffect(() => {
    const timer = window.setInterval(() => setSlide(v => (v + 1) % heroImages.length), 5500)
    return () => window.clearInterval(timer)
  }, [])
  return (
    <Shell>
      <main>
        <section className="lux-hero">
          {heroImages.map((image, i) => <img key={image} src={image} className={i === slide ? 'active' : ''} alt="" />)}
          <div className="hero-shade" />
          <div className="hero-copy"><h1>ARTS GRAPHIQUES</h1><p>Branding & Motion Design</p><div><Link to="/portfolio" className="gold-button">Portfolio</Link><Link to="/booking" className="line-button">Me contacter</Link></div></div>
          <div className="hero-dots">{heroImages.map((_, i) => <button key={i} className={i === slide ? 'active' : ''} onClick={() => setSlide(i)} />)}</div>
        </section>
        <section className="intro-section lux-section">
          <img src="/images/about.png" alt="Portrait du directeur artistique" />
          <div><Eyebrow>À propos</Eyebrow><h2>Je ne crée pas<br />pour décorer.<br /><em>Je crée pour marquer.</em></h2><p>Je suis Alassane GUEYE, créatif passionné par les arts graphiques, le branding et le motion design.</p><p>Depuis bientôt quatre ans, je transforme les idées en identités fortes, cohérentes et mémorables.</p><Link className="text-link" to="/about">Découvrir mon parcours →</Link></div>
        </section>
        <section className="lux-section home-work"><Eyebrow>Portfolio</Eyebrow><h2>Nos Univers</h2><div className="work-strip">{work.slice(0, 4).map(item => <article key={item.title}><img src={item.image} alt={item.title} /><span>{item.category}</span><h3>{item.title}</h3></article>)}</div><Link to="/portfolio" className="line-button">Voir tout le portfolio</Link></section>
        <section className="lux-section home-cta"><Eyebrow>Un projet en tête ?</Eyebrow><h2>Donnons vie à <em>votre vision</em></h2><p>Identité visuelle, branding, supports graphiques ou motion design : chaque collaboration commence par une conversation.</p><div><Link to="/booking" className="gold-button">Parler de mon projet</Link><a href={`mailto:${CONTACT.email}`} className="line-button">M’écrire</a></div></section>
      </main>
    </Shell>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p> }

export function PortfolioPage() {
  const categories = ['Tout', 'Branding', 'Design graphique', 'Motion design', 'Identité visuelle', 'Direction artistique']
  const [filter, setFilter] = useState('Tout')
  const shown = filter === 'Tout' ? work : work.filter(w => w.category === filter)
  return <Shell><main className="inner-page"><div className="page-heading"><Eyebrow>Portfolio</Eyebrow><h1>Nos Réalisations</h1></div><div className="filters">{categories.map(c => <button key={c} onClick={() => setFilter(c)} className={filter === c ? 'active' : ''}>{c}</button>)}</div><div className="portfolio-grid">{shown.map(item => <article key={item.title}><img src={item.image} alt={item.title} /><div><span>{item.category}</span><h2>{item.title}</h2></div></article>)}</div></main></Shell>
}

export function AboutPage() {
  return <Shell><main className="inner-page about-page"><div className="page-heading"><Eyebrow>À propos</Eyebrow><h1>Mon Parcours</h1></div><section className="about-grid"><div className="framed-photo"><img src="/images/about.png" alt="Alassane GUEYE, créateur d’Alou Creator" /></div><div><blockquote>“Créer, c’est donner une forme forte et mémorable à une idée.”</blockquote><p>Hello ! Je suis Alassane GUEYE, passionné par les arts graphiques, le branding et le motion design. J’évolue dans ces secteurs depuis bientôt quatre ans.</p><p>Ma motivation vient en grande partie de mon père, qui est designer. Il m’a transmis énormément de connaissances et une sensibilité créative qui me permettent aujourd’hui de proposer des solutions originales et adaptées à chaque projet.</p><p>Grâce à mon expérience, j’ai développé une expertise solide en conception graphique, stratégie de marque et communication visuelle. J’accompagne chaque client personnellement, de la première idée jusqu’à la réalisation finale.</p><div className="stats"><span><b>4 ans</b>D’expérience</span><span><b>3</b>Expertises créatives</span><span><b>100%</b>Passionné</span></div></div></section></main></Shell>
}

export function BookingPage() {
  const [step, setStep] = useState(1)
  const labels = ['Date', 'Style', 'Projet', 'Contact']
  return <Shell><main className="inner-page booking-page"><div className="page-heading"><Eyebrow>Contact</Eyebrow><h1>Parlons de votre Projet</h1></div><div className="steps">{labels.map((l, i) => <button key={l} className={step === i + 1 ? 'active' : ''} onClick={() => setStep(i + 1)}><b>{i + 1}</b>{l}</button>)}</div><form className="booking-card" onSubmit={e => e.preventDefault()}>
    {step === 1 && <><h2>Choisissez votre date</h2><label>Date souhaitée<input type="date" required /></label><label>Créneau<select><option>Matin — 09h à 12h</option><option>Après-midi — 14h à 18h</option><option>Soirée — sur demande</option></select></label></>}
    {step === 2 && <><h2>De quel service avez-vous besoin ?</h2><div className="choice-grid">{['Branding', 'Logo', 'Identité visuelle', 'Design graphique', 'Motion design', 'Direction artistique'].map(x => <label key={x}><input type="radio" name="style" />{x}</label>)}</div></>}
    {step === 3 && <><h2>Parlez-nous du projet</h2><label>Votre vision<textarea rows={5} placeholder="Ambiance, lieu, nombre de personnes, références…" /></label><label>Budget indicatif<select><option>Moins de 250 000 FCFA</option><option>250 000 — 500 000 FCFA</option><option>Plus de 500 000 FCFA</option></select></label></>}
    {step === 4 && <><h2>Vos coordonnées</h2><div className="form-row"><label>Nom<input placeholder="Votre nom" /></label><label>Téléphone<input placeholder="+221" /></label></div><label>Email<input type="email" placeholder="vous@email.com" /></label></>}
    <div className="form-actions">{step > 1 && <button type="button" className="line-button" onClick={() => setStep(step - 1)}>Retour</button>}{step < 4 ? <button type="button" className="gold-button" onClick={() => setStep(step + 1)}>Continuer</button> : <button className="gold-button">Envoyer la demande</button>}</div>
  </form></main></Shell>
}

export function LoginPage() {
  return <Shell footer={false}><main className="login-page"><form className="login-card" onSubmit={e => e.preventDefault()}><div className="login-icon"><LockKeyhole /></div><Eyebrow>Espace privé</Eyebrow><h1>Espace Client</h1><p>Retrouvez vos projets, validations et livrables.</p><label><Mail />Adresse email<input type="email" placeholder="vous@email.com" /></label><label><LockKeyhole />Mot de passe<input type="password" placeholder="••••••••" /></label><button className="gold-button">Se connecter</button><a href={`mailto:${CONTACT.email}`}>Besoin d’aide ? Contactez Alassane</a></form><div className="social-corner"><Camera /><Phone /></div></main></Shell>
}
