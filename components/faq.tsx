'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { EASE } from '@/lib/motion'

const faqs = [
  {
    q: 'Quels types de projets réalisez-vous ?',
    a: 'De l’identité de marque au site sur-mesure, en passant par le film, la 3D et la direction artistique. Nous couvrons l’ensemble du spectre créatif.',
  },
  {
    q: 'Comment se déroule une collaboration ?',
    a: 'Nous démarrons par une phase d’écoute et de stratégie, suivie de la direction artistique, de la production, puis de la livraison et du suivi.',
  },
  {
    q: 'Quels sont vos délais habituels ?',
    a: 'Ils varient selon l’ampleur du projet. Comptez de trois semaines pour un site vitrine à plusieurs mois pour une refonte complète accompagnée.',
  },
  {
    q: 'Travaillez-vous à l’international ?',
    a: 'Oui. Basés à Paris, nous intervenons pour des maisons du monde entier, en présentiel ou à distance.',
  },
  {
    q: 'Proposez-vous des forfaits ?',
    a: 'Chaque projet est sur-mesure. Après un échange, nous établissons une proposition claire adaptée à vos objectifs et à votre budget.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border py-24 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions fréquentes"
              description="Vous hésitez encore ? Voici les réponses aux questions les plus posées."
            />
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-serif text-xl text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-all duration-500 ${isOpen ? 'rotate-45 border-primary bg-primary/10' : 'group-hover:border-primary'}`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
