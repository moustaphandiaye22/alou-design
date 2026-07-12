'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { EASE } from '@/lib/motion'

const shots = [
  { src: '/images/wedding-1.png', label: 'Maison Lumière', tag: 'Identité' },
  { src: '/images/video-2.png', label: 'Neon Nights', tag: 'Motion' },
  { src: '/images/ad-2.png', label: 'Aura', tag: '3D' },
  { src: '/images/event-1.png', label: 'Gala Automne', tag: 'Événement' },
  { src: '/images/portrait-3.png', label: 'Silhouettes', tag: 'Éditorial' },
  { src: '/images/video-1.png', label: 'Atlas Réalty', tag: 'Web' },
]

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-72%'])

  return (
    <section id="galerie" className="relative border-t border-border">
      <div ref={ref} className="relative h-[320vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex items-center gap-6 px-6 lg:px-10">
            {/* Intro panel */}
            <div className="flex h-[70vh] w-[80vw] shrink-0 flex-col justify-center pr-10 sm:w-[42vw] lg:w-[34vw]">
              <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
                <span className="h-px w-8 bg-primary" />
                Galerie immersive
              </p>
              <h2 className="font-serif text-5xl font-light leading-tight text-foreground sm:text-7xl">
                Un sens du détail, image après image.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Faites défiler pour parcourir nos univers visuels, du studio à
                l’écran.
              </p>
            </div>

            {shots.map((shot, i) => (
              <figure
                key={shot.label}
                className="group relative h-[70vh] w-[82vw] shrink-0 overflow-hidden rounded-sm sm:w-[44vw] lg:w-[30vw]"
              >
                <img
                  src={shot.src}
                  alt={shot.label}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary">
                      {shot.tag}
                    </p>
                    <p className="mt-1 font-serif text-2xl text-foreground">
                      {shot.label}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 -translate-x-2 text-primary opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </figcaption>
              </figure>
            ))}

            <div className="flex h-[70vh] w-[40vw] shrink-0 items-center pr-10">
              <p className="font-serif text-3xl font-light leading-snug text-muted-foreground">
                « La photographie est une brève complicité entre la précision et
                la chance. »
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
