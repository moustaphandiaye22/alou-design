'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

export function Parallax({
  children,
  className,
  distance = 80,
  axis = 'y',
}: {
  children: ReactNode
  className?: string
  distance?: number
  axis?: 'x' | 'y'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance])
  const x = useTransform(scrollYProgress, [0, 1], [distance, -distance])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div style={axis === 'y' ? { y } : { x }}>{children}</motion.div>
    </div>
  )
}
