'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

export function Marquee({
  items,
  className,
  reverse = false,
  speed = 40,
}: {
  items: string[]
  className?: string
  reverse?: boolean
  speed?: number
}) {
  const base = items.join('  —  ')
  const content = `${base}    •    ${base}    •    `
  return (
    <div
      className={cn(
        'relative flex overflow-hidden border-y border-border/60 py-6',
        className,
      )}
    >
      <motion.div
        className="flex shrink-0 whitespace-nowrap"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        <span className="px-6 font-serif text-3xl text-foreground/80 sm:text-5xl">
          {content}
        </span>
        <span className="px-6 font-serif text-3xl text-foreground/80 sm:text-5xl">
          {content}
        </span>
      </motion.div>
    </div>
  )
}
