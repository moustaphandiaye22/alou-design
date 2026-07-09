'use client'

import { motion } from 'motion/react'
import { Reveal } from '@/components/reveal'
import { TextReveal } from '@/components/text-reveal'
import { ImageReveal } from '@/components/mask-reveal'
import { Parallax } from '@/components/parallax'
import { Marquee } from '@/components/marquee'
import { EASE } from '@/lib/motion'

const pillars = [
  {
    title: 'Direction artistique',
    text: 'Une vision claire, une signature reconnaissable, déclinée sur chaque support.',
  },
  {
    title: 'Savoir-faire',
    text: 'Des années de pratique en photo, film, 3D et code au service du détail.',
  },
  {
    title: 'Exigence',
    text: 'Rien n’est laissé au hasard : rythme, lumière, typographie, transition.',
  },
]

const disciplines = [
  'Branding',
  'Web Design',
  'Motion',
  '3D & Immersif',
  'Direction artistique',
  'Stratégie',
]

export function About() {
  return (
    <section id="studio" className="border-t border-border py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Le studio
          </p>
        </Reveal>

        <TextReveal
          as="h2"
          text="Un studio où le luxe rencontre la précision."
          className="max-w-5xl font-serif text-4xl font-light leading-[1.08] text-foreground sm:text-6xl lg:text-7xl"
          stagger={0.06}
        />

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
          {/* Image with reveal + floating badge */}
          <Reveal>
            <div className="relative">
              <ImageReveal
                src="/images/about.png"
                alt="L’atelier du Studio Noir"
                className="aspect-[4/5] rounded-sm"
              />
              <Parallax
                distance={26}
                className="absolute -bottom-6 -left-4 hidden sm:block"
              >
                <div className="rounded-sm border border-primary/40 bg-background/80 px-6 py-4 backdrop-blur-md">
                  <p className="font-serif text-3xl text-primary">12 ans</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    d’atelier
                  </p>
                </div>
              </Parallax>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal delay={1}>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Studio Noir est un atelier parisien réunissant stratèges,
                designers et réalisateurs. Nous accompagnons les maisons
                ambitieuses de la première intuition jusqu’au dernier pixel.
              </p>
            </Reveal>

            <div className="mt-12 space-y-px overflow-hidden rounded-sm border border-border">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="group flex gap-6 border-b border-border bg-card/40 p-6 last:border-b-0"
                  >
                    <span className="font-serif text-sm text-primary">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-primary">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {p.text}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <Marquee items={disciplines} speed={38} />
      </div>
    </section>
  )
}
