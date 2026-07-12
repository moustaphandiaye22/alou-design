'use client'

import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Marquee } from '@/components/marquee'

const testimonials = [
  {
    name: 'Camille Laurent',
    role: 'Directrice marketing, Maison Lumière',
    text: 'Studio Noir a réinventé notre identité avec une justesse rare. Chaque détail respire le luxe, sans jamais tomber dans l’ostentation.',
  },
  {
    name: 'Antoine Mercier',
    role: 'Fondateur, Atlas Réalty',
    text: 'Notre nouveau site est une expérience à part entière. Le niveau de finition et de fluidité a dépassé toutes nos attentes.',
  },
  {
    name: 'Léa Fontaine',
    role: 'Directrice artistique, Festival Neon',
    text: 'Un film d’ouverture saisissant. La direction artistique était ciselée, le rythme parfait. Une collaboration d’une grande exigence.',
  },
  {
    name: 'Julien Roche',
    role: 'CEO, Aura',
    text: 'Le rendu 3D de notre flacon est somptueux. Studio Noir comprend la matière et la lumière comme personne.',
  },
  {
    name: 'Sophie Blanc',
    role: 'Rédactrice en chef, Magazine Écho',
    text: 'Une série éditoriale d’une élégance folle. Le studio a su imposer une vision forte et cohérente du début à la fin.',
  },
  {
    name: 'Marc Dubois',
    role: 'Producteur, Summit Tech',
    text: 'Scénographie et contenus irréprochables pour notre conférence. Professionnalisme, créativité et sérénité totale.',
  },
]

const clients = [
  'Maison Lumière',
  'Atlas Réalty',
  'Festival Neon',
  'Aura',
  'Magazine Écho',
  'Summit Tech',
]

export function Testimonials() {
  return (
    <section id="avis" className="border-t border-border py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Avis clients"
          title="Ils nous font confiance"
          description="Des maisons exigeantes qui ont choisi Studio Noir pour donner vie à leurs ambitions."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i % 3}>
              <figure className="flex h-full flex-col rounded-sm border border-border bg-card p-7 transition-colors duration-500 hover:border-primary/50">
                <Quote className="h-8 w-8 text-primary/40" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/85">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-serif text-lg text-foreground">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Marquee items={clients} speed={34} reverse />
      </div>
    </section>
  )
}
