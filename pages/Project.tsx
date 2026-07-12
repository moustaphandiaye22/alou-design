import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { ImageReveal } from '@/components/mask-reveal'
import { Magnetic } from '@/components/magnetic'
import { Cta } from '@/components/cta'
import { projects, getProject } from '@/lib/projects'
import { NotFound } from '@/pages/NotFound'

export function Project() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined
  if (!project) return <NotFound />

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <SiteHeader />
      <main className="pt-28 lg:pt-36">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Link
              to="/#travaux"
              data-cursor="hover"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Tous les travaux
            </Link>
          </Reveal>

          <Reveal delay={1}>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-primary">
              <span>{project.category}</span>
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span className="text-muted-foreground">{project.year}</span>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl font-light leading-[1.02] text-foreground sm:text-7xl lg:text-8xl">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={3}>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {project.excerpt}
            </p>
          </Reveal>
        </section>

        {/* Cover */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-10">
          <ImageReveal
            src={project.cover}
            alt={project.title}
            className="aspect-[16/9] rounded-sm"
          />
        </div>

        {/* Meta + description */}
        <section className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 border-t border-border pt-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Client
              </p>
              <p className="mt-2 font-serif text-2xl text-foreground">
                {project.client}
              </p>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Prestations
                </p>
                <ul className="mt-3 space-y-2">
                  {project.services.map((s) => (
                    <li key={s} className="text-sm text-foreground/85">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-pretty text-xl leading-relaxed text-foreground/90 sm:text-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto mt-20 max-w-7xl px-6 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <ImageReveal
                key={src + i}
                src={src}
                alt={`${project.title} — visuel ${i + 1}`}
                className={i % 3 === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'}
              />
            ))}
          </div>
        </section>

        {/* Next project */}
        <section className="mx-auto mt-28 max-w-7xl px-6 lg:px-10">
          <Link
            to={`/work/${next.slug}`}
            data-cursor="view"
            data-label="Voir"
            className="group block overflow-hidden rounded-sm border border-border"
          >
            <div className="relative">
              <img
                src={next.cover}
                alt={next.title}
                className="h-[60vh] w-full object-cover opacity-60 transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/55" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  Projet suivant
                </p>
                <h2 className="mt-4 font-serif text-5xl font-light text-foreground sm:text-7xl">
                  {next.title}
                </h2>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/50 px-5 py-2.5 text-sm text-primary">
                  Découvrir
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        <div className="mt-28">
          <Magnetic strength={0.2} className="mx-auto flex w-fit">
            <Link
              to="/#contact"
              data-cursor="hover"
              className="rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground"
            >
              Un projet similaire ? Écrivez-nous
            </Link>
          </Magnetic>
        </div>
      </main>
      <Cta />
      <SiteFooter />
    </>
  )
}
