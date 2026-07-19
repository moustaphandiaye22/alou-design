'use client'

import { motion } from 'motion/react'
import {
  PenTool,
  LayoutTemplate,
  Clapperboard,
  Box,
  Sparkles,
  Compass,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { TiltCard } from '@/components/tilt-card'
import { EASE } from '@/lib/motion'

const services = [
  {
    icon: PenTool,
    title: 'Branding & Identité',
    description:
      'Logotype, charte, typographie et système visuel. Une signature que l’on reconnaît au premier regard.',
    image: '/mariage/prince%20silva_89.JPG',
  },
  {
    icon: LayoutTemplate,
    title: 'Design Web & UX',
    description:
      'Sites sur-mesure, interfaces fluides et expériences pensées pour convertir avec élégance.',
    image: '/concert/VJ_76.jpg',
  },
  {
    icon: Clapperboard,
    title: 'Motion Design',
    description:
      'Films de marque, animations et transitions qui donnent vie à votre récit.',
    image: '/concert/CONCERT%20GUN%20MOR_103.jpg',
  },
  {
    icon: Box,
    title: '3D & Immersif',
    description:
      'Rendus photoréalistes, univers en volume et expériences immersives en temps réel.',
    image: '/distribution%20ndogou/La%20fleche%20_86.jpg',
  },
  {
    icon: Sparkles,
    title: 'Direction artistique',
    description:
      'Un cap créatif tenu de bout en bout, de l’intention au moindre détail.',
    image: '/defiler/aloucreator_93.jpg',
  },
  {
    icon: Compass,
    title: 'Stratégie',
    description:
      'Positionnement, narration et plateforme de marque pour donner du sens à la forme.',
    image: '/shoothing/2024_10_21_23_21_IMG_2541.JPG',
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Nos services"
          title="Une expertise à 360°"
          description="De la stratégie à l’exécution, nous couvrons l’ensemble du spectre créatif pour des résultats cohérents et magnétiques."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i % 3}>
              <TiltCard intensity={8} className="group h-full">
                <article
                  data-cursor="hover"
                  className="relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-sm border border-border bg-card p-7"
                >
                  <img
                    src={service.image}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover opacity-30 transition-opacity duration-700 group-hover:opacity-45"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />

                  <span className="absolute right-6 top-6 font-serif text-sm text-primary/80">
                    0{i + 1}
                  </span>
                  <span className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-primary/50 bg-background/50 text-primary backdrop-blur-sm">
                    <service.icon className="h-5 w-5" />
                  </span>

                  <div className="relative">
                    <h3 className="font-serif text-2xl text-foreground">
                      {service.title}
                    </h3>
                    <motion.p
                      initial={{ opacity: 0.7 }}
                      className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100"
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
