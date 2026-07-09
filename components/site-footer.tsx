import { Mail, ArrowUpRight } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/brand-icons'

const quickLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'Facebook', href: '#', icon: FacebookIcon },
  { label: 'Email', href: 'mailto:contact@leomarchand.com', icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <a href="#accueil" className="font-serif text-3xl font-semibold text-foreground">
              Léo Marchand
            </a>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Photographe et vidéaste basé en France. Je transforme vos instants en
              souvenirs intemporels, avec créativité et exigence.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Navigation
              </h3>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Contact
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-foreground/80">
                <li>
                  <a href="mailto:contact@leomarchand.com" className="transition-colors hover:text-primary">
                    contact@leomarchand.com
                  </a>
                </li>
                <li>
                  <a href="tel:+33612345678" className="transition-colors hover:text-primary">
                    +33 6 12 34 56 78
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-primary transition-colors hover:opacity-80"
                  >
                    Réserver une séance
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Léo Marchand. Tous droits réservés.</p>
          <p>Photographe & Vidéaste — Capturer l&apos;instant.</p>
        </div>
      </div>
    </footer>
  )
}
