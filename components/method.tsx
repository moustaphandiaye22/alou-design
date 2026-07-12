'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal } from '@/components/reveal'
import { EASE } from '@/lib/motion'

const steps = [
  {
    n: '01',
    title: 'Écoute & Stratégie',
    text: 'Nous partons de votre histoire et de vos ambitions pour définir un cap créatif solide.',
  },
  {
    n: '02',
    title: 'Direction artistique',
    text: 'Moodboards, identité et univers : nous dessinons la signature du projet.',
  },
  {
    n: '03',
    title: 'Production',
    text: 'Photo, film, 3D ou code — nous executons avec une exigence absolue du détail.',
  },
  {
    n: '04',
    title: 'Livraison & Suivi',
    text: 'Des livrables prêts à l’emploi et un accompagnement au long cours.',
  },
]

export function Method() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 60%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="methode" className="border-t border-border py-24 lg:py-40">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-10"
      >
        {/* Sticky heading */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
                <span className="h-px w-8 bg-primary" />
                Notre méthode
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-serif text-4xl font-light leading-tight text-foreground sm:text-6xl">
                Un processus, une exigence.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-md text-muted-foreground">
                Quatre temps clairs pour transformer une intention en une
                expérience irréprochable.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Steps with progress line */}
        <div className="relative lg:col-span-7">
          <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-border" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-primary"
          />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={0}>
                <div className="flex gap-6">
                  <span className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-background font-serif text-sm text-primary">
                    {step.n}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-serif text-2xl text-foreground transition-colors">
                      {step.title}
                    </h3>
                    <motion.p
                      initial={{ opacity: 0.6 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground"
                    >
                      {step.text}
                    </motion.p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
