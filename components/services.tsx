import { Heart, Camera, CalendarHeart, Film, Music, Scissors, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: Heart,
    title: 'Photographie de mariage',
    description:
      "Un reportage complet et émouvant de votre grand jour, des préparatifs jusqu'à la piste de danse.",
    image: '/images/wedding-1.png',
  },
  {
    icon: Camera,
    title: 'Shooting portrait',
    description:
      'Des portraits authentiques en studio ou en extérieur, pensés pour révéler votre personnalité.',
    image: '/images/portrait-1.png',
  },
  {
    icon: CalendarHeart,
    title: 'Couverture événementielle',
    description:
      'Galas, conférences, soirées privées : je capture chaque moment fort de votre événement.',
    image: '/images/event-1.png',
  },
  {
    icon: Film,
    title: 'Vidéo professionnelle',
    description:
      "Des films cinématographiques pour vos marques, événements et projets d'entreprise.",
    image: '/images/video-1.png',
  },
  {
    icon: Music,
    title: 'Clip vidéo',
    description:
      "Réalisation créative de clips musicaux, du concept à l'image, avec une direction artistique soignée.",
    image: '/images/video-2.png',
  },
  {
    icon: Scissors,
    title: 'Montage vidéo',
    description:
      'Post-production, étalonnage et montage rythmé pour donner vie à vos rushes.',
    image: '/images/video-3.png',
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Services"
          title="Ce que je propose"
          description="Une gamme complète de prestations photo et vidéo, adaptées à chaque projet et à chaque envie."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i % 3}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors duration-500 hover:border-primary/50">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-primary/60 bg-background/60 text-primary backdrop-blur-sm">
                    <service.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl text-foreground">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:opacity-80"
                  >
                    Découvrir
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
