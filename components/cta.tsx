'use client'

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { TextReveal } from '@/components/text-reveal'
import { Magnetic } from '@/components/magnetic'
import { Parallax } from '@/components/parallax'
import { BRAND } from '@/lib/projects'

export function Cta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-28 lg:py-44"
    >
      {/* Floating glow */}
      <Parallax
        distance={60}
        className="pointer-events-none absolute -right-24 top-10 z-0"
      >
        <div className="h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
      </Parallax>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Contact
          </p>
        </Reveal>

        <TextReveal
          as="h2"
          text="Travaillons ensemble."
          className="max-w-4xl font-serif text-6xl font-light leading-none text-foreground sm:text-8xl lg:text-[8rem]"
          stagger={0.07}
        />

        <Reveal delay={1}>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Un projet, une intuition, une ambition ? Écrivez-nous et donnons-lui
            vie avec la précision du studio.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <Magnetic strength={0.25}>
            <a
              href={`mailto:${BRAND.email}`}
              data-cursor="hover"
              className="group flex items-center gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Email
                </span>
                <span className="block text-lg text-foreground transition-colors group-hover:text-primary">
                  {BRAND.email}
                </span>
              </span>
            </a>
          </Magnetic>

          <a
            href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
            data-cursor="hover"
            className="group flex items-center gap-4"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 text-primary">
              <Phone className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Téléphone
              </span>
              <span className="block text-lg text-foreground transition-colors group-hover:text-primary">
                {BRAND.phone}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Studio
              </span>
              <span className="block text-lg text-foreground">
                {BRAND.location}
              </span>
            </span>
          </div>
        </div>

        <Reveal delay={2} className="mt-14">
          <a
            href={`mailto:${BRAND.email}`}
            data-cursor="hover"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Démarrer un projet
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
