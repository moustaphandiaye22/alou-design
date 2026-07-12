import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary">
        <span className="h-px w-8 bg-primary" />
        Erreur 404
      </p>
      <h1 className="mt-8 font-serif text-6xl font-light text-foreground sm:text-8xl">
        Page introuvable
      </h1>
      <p className="mt-6 max-w-md text-muted-foreground">
        Le projet ou la page que vous cherchez n’existe pas ou a été déplacé.
      </p>
      <Link
        to="/"
        className="mt-10 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Retour à l’accueil
      </Link>
    </main>
  )
}
