'use client'

import { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Category = 'Mariage' | 'Portrait' | 'Événement' | 'Clip vidéo' | 'Publicité'

type Work = {
  src: string
  title: string
  category: Category
  video?: boolean
}

const works: Work[] = [
  { src: '/images/wedding-1.png', title: 'Sarah & Julien', category: 'Mariage' },
  { src: '/images/portrait-1.png', title: 'Lumière studio', category: 'Portrait' },
  { src: '/images/video-3.png', title: 'Film de mariage', category: 'Clip vidéo', video: true },
  { src: '/images/event-1.png', title: 'Gala automnal', category: 'Événement' },
  { src: '/images/ad-1.png', title: 'Parfum — Éclat', category: 'Publicité' },
  { src: '/images/portrait-3.png', title: 'Champ doré', category: 'Portrait' },
  { src: '/images/wedding-2.png', title: 'Détails & bouquet', category: 'Mariage' },
  { src: '/images/video-2.png', title: 'Clip — Neon Nights', category: 'Clip vidéo', video: true },
  { src: '/images/event-2.png', title: 'Conférence 2024', category: 'Événement' },
  { src: '/images/portrait-2.png', title: 'Portrait corporate', category: 'Portrait' },
  { src: '/images/ad-2.png', title: 'Joaillerie — Aura', category: 'Publicité' },
  { src: '/images/video-1.png', title: 'Making of', category: 'Clip vidéo', video: true },
]

const filters: ('Tout' | Category)[] = [
  'Tout',
  'Mariage',
  'Portrait',
  'Événement',
  'Clip vidéo',
  'Publicité',
]

export function Portfolio() {
  const [active, setActive] = useState<'Tout' | Category>('Tout')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = useMemo(
    () => (active === 'Tout' ? works : works.filter((w) => w.category === active)),
    [active],
  )

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i === null ? null : (i + 1) % filtered.length))
      if (e.key === 'ArrowLeft')
        setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, filtered.length])

  return (
    <section id="portfolio" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Une sélection de mes travaux"
          description="Chaque projet est unique. Découvrez mes réalisations en photographie et vidéo, filtrées par type de prestation."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-all',
                active === f
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary/60 hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div layout className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((work, i) => (
              <motion.button
                layout
                key={work.src}
                type="button"
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-sm text-left"
              >
                <img
                  src={work.src || '/placeholder.svg'}
                  alt={work.title}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {work.video && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/70 bg-background/50 text-primary backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                      <Play className="ml-0.5 h-5 w-5 fill-current" />
                    </span>
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">{work.category}</p>
                  <p className="mt-1 font-serif text-xl text-foreground">{work.title}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Fermer"
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Précédent"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))
              }}
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src || '/placeholder.svg'}
                alt={filtered[lightbox].title}
                className="max-h-[85vh] w-auto rounded-sm object-contain"
              />
              <div className="mt-4 text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                  {filtered[lightbox].category}
                </p>
                <p className="mt-1 font-serif text-2xl text-foreground">
                  {filtered[lightbox].title}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Suivant"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox((i) => (i === null ? null : (i + 1) % filtered.length))
              }}
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary sm:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
