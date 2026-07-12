'use client'

import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'
import { projects, categories, type Project } from '@/lib/projects'
import { EASE } from '@/lib/motion'

function Card({ project, i }: { project: Project; i: number }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
      className="break-inside-avoid"
    >
      <Link
        to={`/work/${project.slug}`}
        data-cursor="view"
        data-label="Voir"
        className="group relative mb-5 block overflow-hidden rounded-sm border border-border bg-card"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.cover}
            alt={project.title}
            className="w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex items-start justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-primary">
              {project.category}
            </span>
            <span className="flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-primary/50 bg-background/40 text-primary opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div className="translate-y-3 transition-all duration-500 group-hover:translate-y-0">
            <p className="text-xs text-muted-foreground">{project.year}</p>
            <h3 className="mt-1 font-serif text-2xl text-foreground">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.li>
  )
}

export function Portfolio() {
  const [active, setActive] = useState<string>('Tout')
  const filtered = useMemo(
    () =>
      active === 'Tout'
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  )

  return (
    <section id="travaux" className="border-t border-border py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Une sélection de travaux"
            description="Chaque projet est une réponse sur-mesure. Filtrez par discipline et plongez dans nos réalisations."
          />
          <p className="font-serif text-5xl text-primary">
            {String(projects.length).padStart(2, '0')}
            <span className="text-base text-muted-foreground"> projets</span>
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-all',
                active === c
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary/60 hover:text-foreground',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.ul
          layout
          className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <Card key={project.slug} project={project} i={i} />
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}
