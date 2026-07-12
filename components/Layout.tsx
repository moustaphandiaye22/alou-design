import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { SmoothScroll } from '@/components/providers/smooth-scroll'
import { CustomCursor } from '@/components/cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import { Preloader } from '@/components/preloader'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />
      <Preloader />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.div>
    </SmoothScroll>
  )
}
