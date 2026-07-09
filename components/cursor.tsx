'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState<'default' | 'hover' | 'view'>('default')
  const [label, setLabel] = useState('')
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: pos.x, y: pos.y }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      setHidden(false)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }

      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        '[data-cursor], a, button',
      )
      if (target?.dataset.cursor === 'view') {
        setVariant('view')
        setLabel(target.dataset.label || 'Voir')
      } else if (
        target?.dataset.cursor === 'hover' ||
        target?.tagName === 'A' ||
        target?.tagName === 'BUTTON'
      ) {
        setVariant('hover')
        setLabel('')
      } else {
        setVariant('default')
        setLabel('')
      }
    }

    const onLeave = () => setHidden(true)
    const onDown = () => ringRef.current?.style.setProperty('--scale', '0.8')
    const onUp = () => ringRef.current?.style.setProperty('--scale', '1')

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.16
      ring.y += (pos.y - ring.y) * 0.16
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(var(--scale, 1))`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.documentElement.classList.add('has-custom-cursor')

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference"
        style={{ opacity: hidden ? 0 : 1, transition: 'opacity 0.3s' }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className={cn(
          'pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-primary/70 text-[0.6rem] uppercase tracking-[0.2em] text-primary mix-blend-difference transition-[width,height,background-color,border-color] duration-300',
          variant === 'default' && 'h-9 w-9',
          variant === 'hover' && 'h-14 w-14 bg-primary/10',
          variant === 'view' && 'h-20 w-20 bg-primary text-primary-foreground',
        )}
        style={{ opacity: hidden ? 0 : 1, transition: 'opacity 0.3s' }}
      >
        {variant === 'view' && <span>{label}</span>}
      </div>
    </>
  )
}
