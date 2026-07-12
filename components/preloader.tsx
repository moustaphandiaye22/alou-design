'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLenis } from '@/components/providers/smooth-scroll'
import { EASE } from '@/lib/motion'

export function Preloader() {
  const lenis = useLenis()
  const lenisRef = useRef(lenis)
  lenisRef.current = lenis

  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('noir:preloaded')) return
    sessionStorage.setItem('noir:preloaded', '1')
    setShow(true)
  }, [])

  useEffect(() => {
    if (!show) return
    lenisRef.current?.stop()
    document.body.style.overflow = 'hidden'

    let frame = 0
    const start = performance.now()
    const duration = 1900
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * 100))
      if (p < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setDone(true)
        window.setTimeout(() => {
          document.body.style.overflow = ''
          lenisRef.current?.start()
          setShow(false)
        }, 650)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = ''
    }
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end justify-between bg-[#050505] px-6 pb-8 pt-24 sm:px-10 lg:px-14"
          initial={{ y: 0 }}
          animate={done ? { y: '-101%' } : { y: 0 }}
          exit={{ y: '-101%' }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="block font-serif text-sm uppercase tracking-[0.45em] text-primary"
            >
              Studio Noir
            </motion.span>
          </div>

          <div className="flex items-end gap-3">
            <span className="font-serif text-[18vw] leading-[0.8] text-foreground sm:text-[14vw] lg:text-[10rem]">
              {count}
            </span>
            <span className="mb-3 text-xl text-muted-foreground">%</span>
          </div>

          <motion.div
            className="absolute inset-x-6 bottom-0 h-px bg-white/10 sm:inset-x-10 lg:inset-x-14"
            aria-hidden
          >
            <motion.div className="h-full bg-primary" style={{ width: `${count}%` }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
