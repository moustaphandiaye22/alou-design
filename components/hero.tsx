'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { Magnetic } from '@/components/magnetic'
import { EASE } from '@/lib/motion'

const HeroCanvas = dynamic(() => import('@/components/hero-canvas'), {
  ssr: false,
})

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.4])
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const titleWords = 'Des expériences qui laissent une empreinte.'.split(' ')

  return (
    <section
      ref={ref}
      id="accueil"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden"
    >
      {/* Cinematic image base */}
      <motion.div
        style={{ scale: imgScale, y: imgY }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/hero.png"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* WebGL aura overlay */}
      <div className="absolute inset-0 z-[1] mix-blend-screen opacity-70">
        <HeroCanvas />
      </div>

      {/* Elegant dark overlays */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[2] bg-gradient-to-b from-background/80 via-background/45 to-background"
      />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,5,0.85)_100%)]" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary"
        >
          <span className="h-px w-10 bg-primary" />
          Studio créatif — Paris
        </motion.p>

        <h1 className="max-w-5xl font-serif text-[14vw] font-light leading-[0.95] text-foreground sm:text-7xl lg:text-[7.5rem]">
          {titleWords.map((w, i) => (
            <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay: 0.35 + i * 0.07, ease: EASE }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: EASE }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Studio Noir façonne des identités, des sites et des films pour les
          maisons qui refusent l’ordinaire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15, ease: EASE }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Magnetic strength={0.35}>
            <a
              href="#travaux"
              data-cursor="hover"
              className="cta-shine group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Voir nos travaux
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
          <a
            href="#contact"
            data-cursor="hover"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/20 px-8 py-4 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
          >
            Prendre contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#studio"
        data-cursor="hover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-muted-foreground"
        aria-label="Défiler vers le bas"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Défiler</span>
        <span className="relative flex h-10 w-[1px] items-start justify-center bg-border">
          <motion.span
            className="h-3 w-[1px] bg-primary"
            animate={{ y: [0, 28, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
        <ArrowDown className="h-3.5 w-3.5" />
      </motion.a>
    </section>
  )
}
