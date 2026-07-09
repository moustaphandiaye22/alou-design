'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'

export function MaskReveal({
  children,
  className,
  radius = '1.5rem',
}: {
  children: ReactNode
  className?: string
  radius?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'start 35%'],
  })
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(18% 18% 18% 18% round 0)', `inset(0% 0% 0% 0% round ${radius})`],
  )

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div style={{ clipPath: clip }}>{children}</motion.div>
    </div>
  )
}

export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'start 45%'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1])
  const overlay = useTransform(scrollYProgress, [0, 0.6], [100, 0])

  return (
    <div
      ref={ref}
      className={cn('group relative overflow-hidden bg-card', className)}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ scale }}
        className={cn('h-full w-full object-cover', imgClassName)}
      />
      <motion.div
        style={{ scaleY: overlay, originY: 0 }}
        className="absolute inset-0 origin-top bg-background"
        aria-hidden
      />
    </div>
  )
}
