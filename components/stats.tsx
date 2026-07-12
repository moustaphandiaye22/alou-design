'use client'

import { Reveal } from '@/components/reveal'
import { Counter } from '@/components/counter'

const stats = [
  { value: 180, suffix: '+', label: 'Projets livrés' },
  { value: 12, suffix: '', label: 'Ans d’atelier' },
  { value: 40, suffix: '', label: 'Récompenses' },
  { value: 95, suffix: '%', label: 'Clients fidèles' },
]

export function Stats() {
  return (
    <section className="border-t border-border py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i}
              className="group flex flex-col items-center justify-center bg-background px-6 py-14 text-center transition-colors hover:bg-card"
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="font-serif text-6xl font-light text-foreground transition-colors group-hover:text-primary sm:text-7xl"
              />
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
