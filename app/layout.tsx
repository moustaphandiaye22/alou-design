import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/providers/smooth-scroll'
import { CustomCursor } from '@/components/cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import { Preloader } from '@/components/preloader'
import { BRAND } from '@/lib/projects'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${BRAND.name} — Studio créatif & agence digitale`,
  description:
    'Studio Noir est un studio créatif parisien. Identité de marque, design web, motion et expériences 3D immersives pour les maisons qui visent l’exception.',
  keywords: [
    'studio créatif',
    'agence digitale',
    'branding',
    'design web',
    'motion design',
    'direction artistique',
  ],
  authors: [{ name: BRAND.name }],
  openGraph: {
    title: `${BRAND.name} — Studio créatif & agence digitale`,
    description:
      'Identité, web, motion et 3D : nous façonnons des expériences numériques premium.',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: { index: true, follow: true },
  generator: 'Next.js',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${cormorant.variable} ${grotesk.variable} bg-background`}
    >
      <body className="antialiased grain">
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <Preloader />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </SmoothScroll>
      </body>
    </html>
  )
}
