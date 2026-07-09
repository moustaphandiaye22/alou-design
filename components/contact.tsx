'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, MessageCircle, Check, Send } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'

const services = [
  'Mariage',
  'Portrait',
  'Événement',
  'Vidéo professionnelle',
  'Clip vidéo',
  'Montage vidéo',
  'Autre',
]

const contactInfo = [
  { icon: MessageCircle, label: 'WhatsApp', value: '+33 6 12 34 56 78', href: 'https://wa.me/33612345678' },
  { icon: Mail, label: 'Email', value: 'contact@leomarchand.com', href: 'mailto:contact@leomarchand.com' },
  { icon: InstagramIcon, label: 'Instagram', value: '@leo.marchand', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', value: 'Léo Marchand Studio', href: '#' },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left: info */}
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
                <span className="h-px w-8 bg-primary" />
                Contact
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-balance font-serif text-4xl font-light leading-tight text-foreground sm:text-5xl">
                Discutons de votre projet
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                Une envie, une date, un projet en tête ? Écrivez-moi et construisons
                ensemble des images qui vous ressemblent.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info, i) => (
                <Reveal key={info.label} delay={i}>
                  <a
                    href={info.href}
                    className="group flex items-center gap-4 rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/50"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/50 text-primary">
                      <info.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {info.label}
                      </span>
                      <span className="block truncate text-sm text-foreground transition-colors group-hover:text-primary">
                        {info.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <Reveal delay={2}>
            <div className="rounded-sm border border-border bg-card p-7 sm:p-9">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full min-h-[380px] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary text-primary">
                    <Check className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-serif text-3xl text-foreground">Message envoyé</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais
                    pour échanger sur votre projet.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-medium text-primary hover:opacity-80"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nom" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Votre nom"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="vous@email.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Téléphone" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+33 6 ..."
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Type de service" htmlFor="service">
                      <select id="service" name="service" required className={inputClass} defaultValue="">
                        <option value="" disabled>
                          Choisir...
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-background">
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Parlez-moi de votre projet, vos dates, vos envies..."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
                  >
                    Envoyer
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
