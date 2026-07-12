import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon, LinkedinIcon, BehanceIcon, DribbbleIcon } from '@/components/brand-icons'
import { BRAND } from '@/lib/projects'

const quickLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Travaux', href: '#travaux' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Instagram', href: BRAND.socials.instagram, icon: InstagramIcon },
  { label: 'LinkedIn', href: BRAND.socials.linkedin, icon: LinkedinIcon },
  { label: 'Behance', href: BRAND.socials.behance, icon: BehanceIcon },
  { label: 'Dribbble', href: BRAND.socials.dribbble, icon: DribbbleIcon },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <a href="#accueil" className="font-serif text-4xl font-semibold text-foreground">
              {BRAND.wordmark}
            </a>
            <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">
              {BRAND.name} — {BRAND.tagline}. Nous façonnons des marques et des
              expériences numériques pour les maisons qui visent l’exception.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  data-cursor="hover"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Navigation
              </h3>
              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-cursor="hover"
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
                  <a
                    href={`mailto:${BRAND.email}`}
                    data-cursor="hover"
                    className="transition-colors hover:text-primary"
                  >
                    {BRAND.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                    data-cursor="hover"
                    className="transition-colors hover:text-primary"
                  >
                    {BRAND.phone}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    data-cursor="hover"
                    className="inline-flex items-center gap-1 text-primary transition-colors hover:opacity-80"
                  >
                    Démarrer un projet
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.</p>
          <p className="font-serif text-base text-foreground/70">Conçu avec exigence.</p>
        </div>
      </div>
    </footer>
  )
}
