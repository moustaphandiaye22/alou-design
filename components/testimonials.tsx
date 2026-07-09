import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    name: 'Sarah & Julien',
    service: 'Mariage',
    rating: 5,
    text: "Léo a capturé notre mariage avec une sensibilité incroyable. Chaque photo raconte une émotion. Le film nous fait revivre cette journée à chaque visionnage. Un immense merci.",
  },
  {
    name: 'Camille Dubois',
    service: 'Portrait',
    rating: 5,
    text: "Une séance portrait d'une grande douceur. Léo met immédiatement à l'aise et le résultat est bluffant. Des images élégantes et naturelles à la fois.",
  },
  {
    name: 'Studio Aura',
    service: 'Publicité',
    rating: 5,
    text: "Professionnalisme et créativité au rendez-vous pour notre campagne. Les visuels ont largement dépassé nos attentes. Une collaboration que nous renouvellerons.",
  },
  {
    name: 'Thomas Leroy',
    service: 'Événement',
    rating: 5,
    text: "Réactif, discret et talentueux. Léo a couvert notre gala d'entreprise avec brio. Les photos sont magnifiques et livrées très rapidement.",
  },
  {
    name: 'Marie & Antoine',
    service: 'Clip vidéo',
    rating: 5,
    text: "Un clip d'une qualité cinématographique exceptionnelle. La direction artistique est soignée jusqu'au moindre détail. Bravo pour ce travail remarquable.",
  },
  {
    name: 'Léa Moreau',
    service: 'Portrait',
    rating: 5,
    text: "Je recommande les yeux fermés. Léo a un vrai regard d'artiste et un sens du détail rare. Mes portraits professionnels sont parfaits.",
  },
]

export function Testimonials() {
  return (
    <section id="temoignages" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ils m'ont fait confiance"
          description="La satisfaction de mes clients est ma plus belle récompense. Voici quelques-uns de leurs retours."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i % 3}>
              <figure className="flex h-full flex-col rounded-sm border border-border bg-card p-7 transition-colors duration-500 hover:border-primary/50">
                <Quote className="h-8 w-8 text-primary/40" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground/85">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-serif text-lg text-foreground">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">{t.service}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
