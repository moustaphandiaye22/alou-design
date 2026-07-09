import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Portfolio } from '@/components/portfolio'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
