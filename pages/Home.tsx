import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Portfolio } from '@/components/portfolio'
import { Cta } from '@/components/cta'
import { SiteFooter } from '@/components/site-footer'

export function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Cta />
      </main>
      <SiteFooter />
    </>
  )
}


