'use client'

import { motion, type Variants } from 'motion/react'
import { EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'

const container: Variants = {
  hidden: {},
  visible: (stagger = 0.08) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
}

const word: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.9, ease: EASE },
  },
}

export function TextReveal({
  text,
  as: Tag = 'h2',
  className,
  stagger = 0.08,
  delay = 0,
}: {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
  className?: string
  stagger?: number
  delay?: number
}) {
  const words = text.split(' ')
  return (
    <Tag
      className={cn(
        'flex flex-wrap',
        Tag === 'p' || Tag === 'span' ? '' : 'items-baseline',
        className,
      )}
    >
      <motion.span
        className="contents"
        variants={container}
        custom={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-12%' }}
        transition={{ delay }}
      >
        {words.map((w, i) => (
          <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em]">
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
