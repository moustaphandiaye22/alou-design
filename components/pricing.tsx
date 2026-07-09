import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const packs = [
  {
    name: 'Basic',
    price: '590',
    tagline: 'Idéal pour les portraits et petites séances',
    features: [
      'Séance photo de 1h',
      '20 photos retouchées',
      'Galerie en ligne privée',
      'Livraison sous 7 jours',
    ],
    featured: false,
  },
  {
    name: 'Standard',
    price: '1 290',
    tagline: 'Le choix parfait pour les événements',
    features: [
      'Couverture de 4h',
      '80 photos retouchées',
      'Court film souvenir (1 min)',
      'Galerie en ligne privée',
      'Livraison sous 10 jours',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '2 490',
    tagline: 'L’expérience complète photo & vidéo',
    features: [
      'Couverture journée complète',
      '200+ photos retouchées',
      'Film cinématographique (3-5 min)',
      'Second photographe inclus',
      'Album photo premium',
      'Livraison prioritaire',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="tarifs" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des formules pour chaque projet"
          description="Des packs transparents et flexibles. Chaque prestation peut être personnalisée selon vos besoins."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packs.map((pack, i) => (
            <Reveal key={pack.name} delay={i}>
              <article
                className={cn(
                  'relative flex h-full flex-col rounded-sm border p-8 transition-colors duration-500',
                  pack.featured
                    ? 'border-primary bg-card shadow-[0_0_60px_-15px] shadow-primary/30 lg:-translate-y-4'
                    : 'border-border bg-card hover:border-primary/50',
                )}
              >
                {pack.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground">
                    Recommandé
                  </span>
                )}
                <h3 className="font-serif text-3xl text-foreground">{pack.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pack.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">à partir de</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-5xl text-foreground">{pack.price}</span>
                  <span className="text-2xl text-primary">€</span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    'mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all',
                    pack.featured
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : 'border border-border text-foreground hover:border-primary hover:text-primary',
                  )}
                >
                  Choisir ce pack
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
